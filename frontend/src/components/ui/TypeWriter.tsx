import React, { useState, useEffect } from 'react';

interface TypeWriterProps {
  text: string;
  delay?: number;
  className?: string;
  repeat?: boolean;
  alternateText?: string;
}

const TypeWriter: React.FC<TypeWriterProps> = ({ 
  text, 
  delay = 50, 
  className = '', 
  repeat = false,
  alternateText
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isAlternate, setIsAlternate] = useState(false);

  useEffect(() => {
    if (repeat) {
      const timeout = setTimeout(() => {
        const targetText = isAlternate ? alternateText || text : text;
        
        if (!isDeleting && currentIndex < targetText.length) {
          setCurrentText(prevText => prevText + targetText[currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        } else if (!isDeleting && currentIndex === targetText.length) {
          setTimeout(() => setIsDeleting(true), 2000); // Wait 2 seconds before deleting
        } else if (isDeleting && currentIndex > 0) {
          setCurrentText(prevText => prevText.slice(0, -1));
          setCurrentIndex(prevIndex => prevIndex - 1);
        } else if (isDeleting && currentIndex === 0) {
          setIsDeleting(false);
          if (alternateText) {
            setIsAlternate(!isAlternate);
          }
          setTimeout(() => {}, 1000); // Wait 1 second before typing again
        }
      }, isDeleting ? delay / 2 : delay);

      return () => clearTimeout(timeout);
    } else {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setCurrentText(prevText => prevText + text[currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        }, delay);

        return () => clearTimeout(timeout);
      }
    }
  }, [currentIndex, delay, text, isDeleting, repeat, alternateText, isAlternate]);

  return <span className={className}>{currentText}</span>;
};

export default TypeWriter; 