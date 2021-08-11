import React, { useState } from "react";
import styled from "styled-components";
import { Container as ContainerWidth } from "@material-ui/core";
import BackButton from "../../common/BackButton/BackButton";
import reactImage from "../../../images/react.svg.png";
import reduxImage from "../../../images/redux.png";
import routerImage from "../../../images/router.png";
import htmlImage from "../../../images/html.svg.png";
import cssImage from "../../../images/css.png";
import scssImage from "../../../images/scss.svg.png";
import styledImage from "../../../images/styled.png";
import nodeImage from "../../../images/node.svg.png";
import mongoImage from "../../../images/mongo.png";
import materialImage from "../../../images/material.png";
import jestImage from "../../../images/jest.png";
import javascriptImage from "../../../images/javascript.svg";
import gitImage from "../../../images/git.png";
import chaiImage from "../../../images/chai.png";
import bootstrapImage from "../../../images/bootstrap.svg";
import jiraImage from "../../../images/jira.png";
import englishImage from "../../../images/english.png";
import polishImage from "../../../images/polish.png";
import enzymeImage from "../../../images/enzyme.png";

const Root = styled.div`
  height: 100%;
  background-image: url("https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-repeat: no-repeat;
  background-size: cover;
`;
const Blur = styled.div`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  height: 100%;
`;

const Container = styled(ContainerWidth)`
  height: 100%;
  color: #fff;
  display: flex !important;
  height: 100%;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  height: 75%;
  width: 100%;
`;

const Col = styled.div`
  width: 25%;
  text-align: center;
  cursor: pointer;
  height: 100%;
  overflow: auto;
  border-radius: 15px;
  margin: 0px 3px;
  transition: all 0.1s;
  ${({ selected }) =>
    selected === false
      ? `filter: blur(2px);
      background: rgba(255, 255, 255, 0.5);
      `
      : `background: rgba(222, 222, 222, 0.3);
      `}
  &:hover {
    background: rgba(222, 222, 222, 0.3);
  }
`;

const Icon = styled.img`
  height: 35px;
  object-fit: cover;
  padding-right: 10px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  padding: 3px 8px;
`;

const MySkills = () => {
  const [isSelected, setIsSelected] = useState("frontend");
  return (
    <Root>
      <Blur>
        <Container>
          <BackButton name="/home" color="#fff" colorHover="#bbb" />
          <Title>My skills</Title>
          <Wrapper>
            <Col
              onClick={() => setIsSelected("frontend")}
              selected={isSelected === "frontend" ? true : false}
            >
              <h2>Frontend</h2>
              <IconWrapper>
                <Icon src={javascriptImage} />
                Javascript
              </IconWrapper>
              <IconWrapper>
                <Icon src={reactImage} />
                React
              </IconWrapper>
              <IconWrapper>
                <Icon src={reduxImage} />
                React Redux
              </IconWrapper>
              <IconWrapper>
                <Icon src={reduxImage} />
                Redux Thunk
              </IconWrapper>
              <IconWrapper>
                <Icon src={routerImage} />
                React Router
              </IconWrapper>
              <IconWrapper>
                <Icon src={htmlImage} />
                HTML
              </IconWrapper>
              <IconWrapper>
                <Icon src={cssImage} />
                CSS
              </IconWrapper>
              <IconWrapper>
                <Icon src={scssImage} />
                SCSS
              </IconWrapper>
              <IconWrapper>
                <Icon src={styledImage} />
                Styled Components
              </IconWrapper>
              <IconWrapper>
                <Icon src={bootstrapImage} />
                Bootstrap
              </IconWrapper>
              <IconWrapper>
                <Icon src={materialImage} />
                Material Ui
              </IconWrapper>
            </Col>
            <Col
              onClick={() => setIsSelected("backend")}
              selected={isSelected === "backend" ? true : false}
            >
              <h2>Backend</h2>
              <IconWrapper>
                <Icon src={nodeImage} />
                Node.js
              </IconWrapper>
              <IconWrapper>
                <Icon src={nodeImage} />
                Express.js
              </IconWrapper>
              <IconWrapper>
                <Icon src={mongoImage} />
                MongoDB
              </IconWrapper>
              <IconWrapper>
                <Icon src={mongoImage} />
                Mongoose
              </IconWrapper>
            </Col>
            <Col
              onClick={() => setIsSelected("testing")}
              selected={isSelected === "testing" ? true : false}
            >
              <h2>Testing</h2>
              <IconWrapper>
                <Icon src={jestImage} />
                Jest
              </IconWrapper>
              <IconWrapper>
                <Icon src={chaiImage} />
                Chai
              </IconWrapper>
              <IconWrapper>
                <Icon src={enzymeImage} />
                Enzyme
              </IconWrapper>
            </Col>
            <Col
              onClick={() => setIsSelected("others")}
              selected={isSelected === "others" ? true : false}
            >
              <h2>Others</h2>
              <IconWrapper>
                <Icon src={gitImage} />
                Git
              </IconWrapper>
              <IconWrapper>
                <Icon src={jiraImage} />
                Jira
              </IconWrapper>
              <IconWrapper>
                <Icon src={englishImage} />
                English B2/C1
              </IconWrapper>
              <IconWrapper>
                <Icon src={polishImage} />
                Polish native
              </IconWrapper>
            </Col>
          </Wrapper>
        </Container>
      </Blur>
    </Root>
  );
};

export default MySkills;
