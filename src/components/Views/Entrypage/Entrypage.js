import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { keyframes } from "styled-components";

const Root = styled.div`
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const typing = keyframes`
from {
  width: 0
}
`;

const blink = keyframes`
50% {
  border-color: transparent
}
`;

const Text = styled.div`
  width: ${({ width }) => width}ch;
  ${({ display }) =>
    display
      ? `
    display: block;
  `
      : `
  display: none;`}
  animation: ${typing} 2s steps(22), ${blink} 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  ${({blinkTimeout}) => blinkTimeout ? `border-right: none;` : `border-right: 3px solid;`}
  font-size: 50px;
  color: #39ff14;
  user-select: none;
  font-family: 'matrixFont', sans-serif;
`;

const TextButton = styled(Link)`
  width: 7ch;
  ${({ display }) =>
    display
      ? `
    display: block;
  `
      : `
  display: none;`}
  animation: ${typing} 1s steps(12), ${blink} 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  ${({blinkTimeout}) => blinkTimeout ? `border-right: none;` : `border-right: 3px solid;`}
  font-size: 50px;
  color: #39ff14;
  margin-top: 30px;
  font-family: 'matrixFont', sans-serif;

  &:hover{
    color: #EBE759;
  }
`;
const Entrypage = () => {
  const [oneSecTimeout, setOneSecTimeout] = useState(false);
  setTimeout(() => setOneSecTimeout(true), 1000);
  const [sixSecTimeout, setSixSecTimeout] = useState(false);
  setTimeout(() => setSixSecTimeout(true), 6000);
  const [twelveSecTimeout, setTwelveSecTimeout] = useState(false);
  setTimeout(() => setTwelveSecTimeout(true), 12000);

  return (
    <Root>
      <Text width={16} display={oneSecTimeout} blinkTimeout={sixSecTimeout}>{`> `}Damian Filipek</Text>
      <Text width={22} display={sixSecTimeout} blinkTimeout={twelveSecTimeout}>{`> `}junior web developer</Text>
      <TextButton display={twelveSecTimeout} blinkTimeout={false} to='/home'>{`> `}Enter</TextButton>
    </Root>
  );
};
export default Entrypage;
