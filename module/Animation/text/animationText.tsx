import React from "react";
import { motion } from "framer-motion";

interface WordWrapperProps {
  children: React.ReactNode;
}

const WordWrapper: React.FC<WordWrapperProps> = ({ children }) => {
  return <span className="word-wrapper">{children}</span>;
};

interface TagMap {
  [key: string]: React.ElementType;
}

const tagMap: TagMap = {
  paragraph: "p",
  heading1: "h1",
  heading2: "h2",
};

interface AnimatedCharactersProps {
  type: keyof TagMap;
  text: string;
}

const AnimatedCharacters: React.FC<AnimatedCharactersProps> = ({
  type,
  text,
}) => {
  const item = {
    hidden: {
      y: "200%",
      color: "#0055FF",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      color: "#FFF",

      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  const splitWords = text.split(" ");

  const words: string[][] = [];

  for (let i = 0; i < splitWords.length; i++) {
    const word = splitWords[i];
    words.push(word.split(" "));
  }

  words.forEach((word) => {
    word.push("\u00A0");
  });

  const Tag = tagMap[type];

  return (
    <Tag>
      {words.map((word, index) => {
        return (
          <WordWrapper key={index}>
            {word.map((element, index) => {
              return (
                <span
                  key={index}
                  style={{
                    overflow: "hidden",
                    display: "inline-block",
                  }}
                >
                  <motion.span
                    style={{ display: "inline-block", fontSize: "24px" }}
                    variants={item}
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </WordWrapper>
        );
      })}
    </Tag>
  );
};

export default AnimatedCharacters;
