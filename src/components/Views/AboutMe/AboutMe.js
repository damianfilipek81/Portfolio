import React from "react";
import styled from "styled-components";
import { Container as ContainerWidth } from "@material-ui/core";
import MyImage from "../../../images/myImage.jpg";
import BackButton from "../../common/BackButton/BackButton";

const Container = styled(ContainerWidth)`
  height: 100%;
  color: #qqq;
  display: flex !important;
  height: 100%;
  position: relative;
  align-items: center;
  justify-content: space-between;
`;

const Root = styled.div`
  height: 100%;
  background-image: url("https://images.pexels.com/photos/411195/pexels-photo-411195.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-repeat: no-repeat;
  background-size: cover;
`;

const Image = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 50%;
`;

const Wrapper = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.p`
  font-size: 19px;
  margin: 0;
  line-height: 25px;
  padding-bottom: 15px;
`;
const AboutMe = () => {
  return (
    <Root>
      <Container maxWidth="lg">
        <BackButton name={"/home"} color="#393939" colorHover="#030303" />
        <Wrapper>
          <Image src={MyImage} />
        </Wrapper>
        <Wrapper>
          <Text>Hi there!</Text>
          <Text>
            My name is Damian Filipek and I'm 22 years old. I study the
            management of the application development process in The School of
            Management and Banking in Cracow.
          </Text>
          <Text>
            In November 2020 I started my jurney with programming. Since then
            I’m spending 40 to 50 hours per week mastering my skills. In my
            portfolio I already have many projects, with which I am very
            satisfied and willing to share.
          </Text>
          <Text>
            I feel very confident in frontend technologies like Javascript and
            React, but I can also do a fullstack apps with the usage of Node.js,
            Express.js and MongoDB.
          </Text>
          <Text>
            Currently I'm looking for a job as a Junior Frontend Developer, feel
            free to contact me if you have any questions.
          </Text>
          <Text>
            Apart from programming in my spare time i relly enjoy playing chess,
            reading some criminal or waching F1 races with a group of friends.
          </Text>
        </Wrapper>
      </Container>
    </Root>
  );
};

export default AboutMe;
