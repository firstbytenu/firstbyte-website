import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  defaultText: string;
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
  defaultText,
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
}) => {
  const [currentText, setCurrentText] = useState<string>(defaultText);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [textIndex, setTextIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(defaultText.length);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      if (charIndex > defaultText.length) {
        timer = setTimeout(() => {
          setCurrentText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    } else {
      if (charIndex < defaultText.length + texts[textIndex].length) {
        timer = setTimeout(() => {
          setCurrentText(defaultText + texts[textIndex].slice(0, charIndex - defaultText.length + 1));
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // Wait for 2 seconds before starting to delete
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex, charIndex, defaultText, texts, typingSpeed, deletingSpeed]);

  return <span>{currentText}</span>;
};

export default Typewriter;