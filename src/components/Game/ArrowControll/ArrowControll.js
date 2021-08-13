import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";

const svgSettings = `
svg{
  width: 75px;
  height: 75px;
  color: #bbb;

  &:active{
    color: rgb(0,0,0);
  }
}
`;
const Root = styled.div`
  width: 250px;
  height: 250px;
  position: fixed;
  z-index: 998;
`;
const ArrowLeft = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);

  ${svgSettings}
`;
const ArrowRight = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  ${svgSettings}
`;
const ArrowUp = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  ${svgSettings}
`;
const ArrowDown = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  ${svgSettings}
`;
const ArrowControll = ({setController}) => {
  const left = {
    key: 'ArrowLeft'
  }
  const right = {
    key: 'ArrowRight'
  }
  const down = {
    key: 'ArrowDown'
  }
  const up = {
    key: 'ArrowUp'
  }
  return (
    <Root>
      <ArrowLeft onClick={() => setController(left)}>
        <KeyboardArrowLeftIcon />
      </ArrowLeft>
      <ArrowRight onClick={() => setController(right)}>
        <KeyboardArrowRightIcon />
      </ArrowRight>
      <ArrowUp onClick={() => setController(up)}>
        <KeyboardArrowUpIcon />
      </ArrowUp>
      <ArrowDown onClick={() => setController(down)}>
        <KeyboardArrowDownIcon />
      </ArrowDown>
    </Root>
  );
};

ArrowControll.propTypes={
  setArrowEvent: PropTypes.func,
}
export default ArrowControll;
