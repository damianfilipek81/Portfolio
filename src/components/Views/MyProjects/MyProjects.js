import React from "react";
import styled from "styled-components";
import { Container as ContainerWidth } from "@material-ui/core";
import BackButton from "../../common/BackButton/BackButton";
import ProjectBox from "../../features/ProjectBox/ProjectBox";

const Root = styled.div`
  height: 100%;
`;

const Title = styled.h1`
  text-align: center;
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

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Col = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 10px;
`;
const MyProjects = () => {
  return (
    <Root>
      <Container>
      <BackButton name="/home" color="#fff" colorHover="#bbb" />
        <Title>My projects</Title>
        <Wrapper>
          <Col>
            <ProjectBox></ProjectBox>
            <ProjectBox></ProjectBox>
            <ProjectBox></ProjectBox>
          </Col>
          <Col>
            <ProjectBox></ProjectBox>
            <ProjectBox></ProjectBox>
            <ProjectBox></ProjectBox>
          </Col>
        </Wrapper>
      </Container>
    </Root>
  );
};

export default MyProjects;
