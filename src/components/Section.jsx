import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: custom * 0.2 },
  }),
};

const buttonAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: custom * 0.2 },
  }),
};

const Section = ({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
  urlId,
  nextId,
}) => {
  return (
    <Wrap
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      bgImage={backgroundImg}
      id={urlId}
    >
      <ItemText>
        <motion.h1 custom={1} variants={textAnimation}>
          {title}
        </motion.h1>
        <motion.p custom={2} variants={textAnimation}>
          {description}
        </motion.p>
      </ItemText>

      <Buttons>
        <ButtonGroup
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3, once: true }}
        >
          <LeftButton custom={1} variants={buttonAnimation}>
            {leftBtnText}
          </LeftButton>
          {rightBtnText && (
            <RightButton custom={2} variants={buttonAnimation}>
              {rightBtnText}
            </RightButton>
          )}
        </ButtonGroup>
        <a href={`#${nextId}`}>
          <DownArrow src="/images/down-arrow.svg" />
        </a>
      </Buttons>
    </Wrap>
  );
};

export default Section;

const Wrap = motion(styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(/images/${props.bgImage})`};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`);

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  z-index: 10;
`;

const ButtonGroup = motion(styled.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`);

const LeftButton = motion(styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`);

const RightButton = motion(styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`);

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
  cursor: pointer;
`;

const Buttons = styled.div``;
