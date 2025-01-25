import React, { useEffect, useState } from 'react'
import styles from './LoadingScreen.module.css';

const LoadingScreen = () => {
  const [currentText, setCurrentText] = useState("")
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0)
  const [finalText, setFinalText] = useState("")
  const [isAnimating, setIsAnimating] = useState(true)
  const [rollUp,setRollUp]=useState(false);
  const welcomes = ["HELLO", "வணக்கம்", "नमस्ते","こんにちは"]

  useEffect(() => {
    if (isAnimating) {
      const timeout = setTimeout(() => {
        if (currentLanguageIndex >= welcomes.length) {
          setFinalText(prev => prev + welcomes[0].charAt(currentCharIndex))
          
          setCurrentCharIndex(prev => prev + 1)
          setCurrentLanguageIndex(0)
          
          if (currentCharIndex >= welcomes[0].length - 1) {
            setIsAnimating(false)
            setCurrentText("")
            setRollUp(true)
          }
        } else {
          const currentWelcome = welcomes[currentLanguageIndex]
          const characterToShow = currentWelcome.charAt(currentCharIndex)
          
          setCurrentText(characterToShow)
          setCurrentLanguageIndex(prev => prev + 1)
        }
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentCharIndex, currentLanguageIndex, isAnimating]);

  return (
    <section className={`${styles.LoadingScreen} ${rollUp ? styles.up : ''}`}>
      <div className={styles.loadingTextContainer}>
        <p className={styles.loadingText}>
          {finalText}
          <span className={styles.currentChar}>{currentText}</span>
        </p>
      </div>
    </section>
  )
}

export default LoadingScreen