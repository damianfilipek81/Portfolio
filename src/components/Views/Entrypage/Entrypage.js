import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BorderTop = styled.span`
  position: absolute;
  left: 50px;
  top: 50px;
  border-top: 5px solid red;
  display: inline-block;
  transition: all 1s;
  width: 0;
  ${({ animation }) =>
    animation &&
    `
	width: calc(100% - 100px)
	`}
`;

const BorderRight = styled.span`
  position: absolute;
  right: 50px;
  bottom: 50px;
  border-right: 5px solid red;
  display: inline-block;
  transition: all 1s;
  height: 0;
  ${({ animation }) =>
    animation &&
    `
	height: calc(100% - 100px)
	`}
`;

const BorderBottom = styled.span`
  position: absolute;
  bottom: 50px;
  right: 50px;
  border-bottom: 5px solid red;
  display: inline-block;
  transition: all 1s;
  width: 0;
  ${({ animation }) =>
    animation &&
    `
	width: calc(100% - 100px)
	`}
`;

const BorderLeft = styled.span`
  position: absolute;
  left: 50px;
  top: 50px;
  border-left: 5px solid red;
  display: inline-block;
  transition: all 1s;
  height: 0;
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
`;

const Root = styled.div`
  background: black;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  position: fixed;
`;

const Entrypage = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  setTimeout(() => setStartAnimation(true), 1000);

  return (
    <Root>
      <BorderTop animation={startAnimation} />
      <BorderLeft animation={startAnimation} />
      <BorderRight animation={startAnimation} />
      <BorderBottom animation={startAnimation} />
      <Button to="/homepage">Enter</Button>
    </Root>
  );
};
export default Entrypage;
