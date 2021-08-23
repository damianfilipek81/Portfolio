import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../../deviceSettings";

const Root = styled.div`
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.mobileL} {
    flex-direction: column;
  }
`;

const Box = styled(Link)`
  z-index: 1000;
  height: 250px;
  width: 250px;
  background: #afbbbb66;
  margin: 20px;
  text-align: center;
  line-height: 250px;
  border-radius: 15px;
  font-size: 30px;
  color: #fff;

  &:hover {
    background: rgba(233, 233, 233, 0.4);
  }

  @media ${device.laptop} {
    height: 200px;
    width: 200px;
    line-height: 200px;
    font-size: 25px;
  }

  @media ${device.tablet} {
    height: 150px;
    width: 150px;
    line-height: 150px;
    font-size: 20px;
  }
  @media ${device.tablet} {
    width: 100%;
    height: 50px;
    font-size: 15px;
    line-height: 50px;
    margin: 10px;
  }
`;
function HomepageClassicView() {
  return (
    <Root>
      <Box to="/about">About me</Box>
      <Box to="/skills">My skills</Box>
      <Box to="/projects">My projects</Box>
      <Box to="/contact">Contact</Box>
    </Root>
  );
}

export default HomepageClassicView;
