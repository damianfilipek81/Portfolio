import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const borderSettings = `
  border-color: #fff;;
  position: absolute;
  display: inline-block;
  transition: all 1s;
`;
const BorderTop = styled.span`
  left: 50px;
  top: 50px;
  border-top: 5px solid;
  width: 0;
  ${borderSettings}
  ${({ animation }) =>
    animation &&
    `
	width: calc(100% - 100px)
	`}
`;

const BorderRight = styled.span`
  right: 50px;
  bottom: 50px;
  border-right: 5px solid;
  height: 0;
  ${borderSettings}
  ${({ animation }) =>
    animation &&
    `
	height: calc(100% - 100px)
	`}
`;

const BorderBottom = styled.span`
  bottom: 50px;
  right: 50px;
  border-bottom: 5px solid;
  width: 0;
  ${borderSettings}
  ${({ animation }) =>
    animation &&
    `
	width: calc(100% - 100px)
	`}
`;

const BorderLeft = styled.span`
  left: 50px;
  top: 50px;
  border-left: 5px solid;
  height: 0;
  ${borderSettings}
  ${({ animation }) =>
    animation &&
    `
	height: calc(100% - 100px)
	`}
`;

const Button = styled(Link)`

  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  color: #fff;
  font-size: 40px;
  transition: all 1s;
  opacity: 0;
  ${({animation}) => animation &&`
  opacity: 1;
  `}
`;

const Root = styled.div`
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  position: fixed;
`;

const Entrypage = () => {
  const [startBorderAnimation, setStartBorderAnimation] = useState(false);
  const [startButtonAnimation, setStartButtonAnimation] = useState(false);
  setTimeout(() => setStartBorderAnimation(true), 1000);
  setTimeout(() => setStartButtonAnimation(true), 2000);
  return (
    <Root>
      <BorderTop animation={startBorderAnimation} />
      <BorderLeft animation={startBorderAnimation} />
      <BorderRight animation={startBorderAnimation} />
      <BorderBottom animation={startBorderAnimation} />
      <Button to="/home" animation={startButtonAnimation}>Enter</Button>
    </Root>
  );
};
export default Entrypage;
