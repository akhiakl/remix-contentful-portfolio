import React, { useEffect, useState } from "react";
import { LazyMotion, domAnimation } from "motion/react"
import * as motion from "motion/react-m"
import clsx from "clsx";

type TypewriterProps = {
  texts: string[];
  typingSpeed?: number;
  className?: string;
};

const Typewriter = ({ texts, typingSpeed = 200, className }: TypewriterProps) => {
  const [currentText, setCurrentText] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const deletingSpeed = 50;

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[currentText];
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1));
        if (displayedText === "") {
          setIsDeleting(false);
          setCurrentText((prev) => (prev + 1) % texts.length);
        }
      } else {
        setDisplayedText((prev) => fullText.slice(0, prev.length + 1));
        if (displayedText === fullText) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentText]);

  return (
    <LazyMotion features={domAnimation}>
      <p className={clsx("min-h-6", className)}>
        <motion.span initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }} className="relative" >
          {displayedText}
          <motion.span animate={{ opacity: [1, 0, 0, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="absolute -right-2 top-0 w-0.5 h-full bg-primary" />
        </motion.span>
      </p>
    </LazyMotion>
  );
};

export default Typewriter;
