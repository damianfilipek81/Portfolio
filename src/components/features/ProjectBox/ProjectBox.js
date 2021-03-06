import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import GitHubIcon from "@material-ui/icons/GitHub";
import { device } from "../../../deviceSettings";

const Wrapper = styled.div`
  display: flex;
  width: 60%;
  align-items: center;
  justify-content: center;
  padding: 5px;
  padding-right: 15px;

  @media ${device.laptop}{
    font-size: 15px;
  }
  @media ${device.tablet}{
    font-size: 13px;
  }
  @media ${device.mobileM}{
    width: 70%;
    font-size: 12px;
  }
`;
const TitleWrapper = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;

  h2 {
    font-size: 23px;
    text-align: center;
  }

  @media ${device.tablet}{
    h2 {
      font-size: 17px;
    }
  }
  @media ${device.mobileM}{
    h2{
      font-size: 15px;
    }
  }
`;
const Root = styled.a`
  position: relative;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100px;
  border-radius: 15px;
  display: flex;
  margin: 10px;
  color: rgb(255, 255, 255);
  cursor: pointer;

  &:hover{
    background: rgba(0, 0, 0, 0.7);
  }

  @media ${device.mobileL}{
    margin: 6px 0;
  }
`;

const Icon = styled.a`
  position: absolute;
  right: 5px;
  bottom: 5px;

  svg {
    width: 30px;
    height: 30px;

    &:hover {
      color: red;
    }
  }
`;

const ProjectBox = ({ name, link, description, github }) => {
  return (
    <Root href={link}>
      <TitleWrapper>
        <h2>{name}</h2>
      </TitleWrapper>
      <Wrapper>
        {description}
        <Icon href={github}>
          <GitHubIcon />
        </Icon>
      </Wrapper>
    </Root>
  );
};

ProjectBox.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string,
  github: PropTypes.string,
};
export default ProjectBox;
