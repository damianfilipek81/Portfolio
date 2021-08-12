import React from "react";
import styled from "styled-components";
import { Container as ContainerWidth } from "@material-ui/core";
import BackButton from "../../common/BackButton/BackButton";
import ProjectBox from "../../features/ProjectBox/ProjectBox";

const Root = styled.div`
  min-height: 100%;
  background-image: url(https://upload.wikimedia.org/wikipedia/commons/6/64/Creaci%C3%B3n_de_Ad%C3%A1n_%28Miguel_%C3%81ngel%29.jpg);
  background-size: cover;
  background-attachment: fixed;
  background-position: top center;
  position: relative;
`;

const Title = styled.h1`
  text-align: center;
  margin-top: 100px;
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

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  background-image: linear-gradient(45deg, rgba(255,255,255,0) 25.32%, #3D6F8E 37.32%, #3D6F8E 50%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 87.32%, #3D6F8E 87.32%, #3D6F8E 100%);;
  mix-blend-mode: difference;
  position: absolute;
`;
const MyProjects = () => {
  const leftRow = [
    {
      name: "Pizzeria",
      link: "https://agile-dusk-72235.herokuapp.com/#/home",
      github: "https://github.com/damianfilipek81/Pizzeria",
      description:
        "Project of pizzeria website with the use of HTML, SCSS, JS, AJAX",
    },
    {
      name: "Administration panel",
      link: "https://damianfilipek81.github.io/Administration-panel-SCSS/",
      github: "https://github.com/damianfilipek81/Administration-panel-SCSS",
      description:
        "Project of administration panel with the use of HTML, SCSS, JS",
    },
    {
      name: "TO-DO app",
      link: "https://infinite-brook-09927.herokuapp.com/",
      github: "https://github.com/damianfilipek81/React-to-do",
      description:
        "Project of TO-DO app using React, React Redux, React Router, SCSS",
    },
    {
      name: "Travel agency",
      link: "https://frozen-gorge-29821.herokuapp.com/",
      github: "https://github.com/damianfilipek81/Travel-Agency",
      description:
        "Project of travel agency website using React, React Redux, React Router, SCSS",
    },
    {
      name: "Pizzeria administration panel",
      link: "https://github.com/damianfilipek81/Pizzeria-Administration-Panel",
      github:
        "https://github.com/damianfilipek81/Pizzeria-Administration-Panel",
      description:
        "Project of an administration panel for handling orders in a pizzeria with the use of React, React Redux, React Router, Redux Thunk, SCSS",
    },
    {
      name: "Epoxy Table",
      link: "https://epoxytable.pl/",
      github:
        "https://github.com/damianfilipek81/EpoxyTable",
      description:
        "My first commercial SPA project made for EpoxyTable company. Stack: SCSS, React, React Redux",
    },
  ];
  const rightRow = [
    {
      name: "Furniture store - group project",
      link: "https://github.com/damianfilipek81/Group-project",
      github: "https://github.com/damianfilipek81/Group-project",
      description:
        "3-weeks group project of furniture store website with the use of React, React Redux, React Router, SCSS, JIRA",
    },
    {
      name: "Websocket chat",
      link: "https://github.com/damianfilipek81/Websocket-Chat",
      github: "https://github.com/damianfilipek81/Websocket-Chat",
      description: "Project of websocket chat using Nodejs, Express, Websocket",
    },
    {
      name: "Music festival app",
      link: "https://wave-fest.herokuapp.com/order-a-ticket",
      github: "https://github.com/damianfilipek81/Music-Festival",
      description:
        "Project of fullstack music festival app with the use of SCSS, React, React Redux, React Router, Redux Thunk, Nodejs, Express, MongoDB, Mongoose, Chai, Websocket",
    },
    {
      name: "Bulletin board",
      link: "https://garagesal.herokuapp.com/",
      github: "https://github.com/damianfilipek81/Bulletin-Board",
      description:
        "Project of fullstack bulletin app with the use of SCSS, React, React Redux, Redux Thunk, React Router, Nodejs, Express, MongoDB, Mongoose",
    },
    {
      name: "Formula 1 fan-shop",
      link: "https://f1-shop.herokuapp.com/",
      github: "https://github.com/damianfilipek81/Formula-1-shop",
      description:
        "Project of fullstack Formula 1 fan-shop with the use of SCSS, React, React Redux, Redux Thunk, React Router, Nodejs, Express, oAuth 2.0",
    },
  ];
  return (
    <Root>
      <Overlay />
      <Container>
        <BackButton name="/home" color="#fff" colorHover="#bbb" />
        <Title>My projects</Title>
        <Wrapper>
          <Col>
            {leftRow.map((data, index) => (
              <ProjectBox key={index} {...data} />
            ))}
          </Col>
          <Col>
            {rightRow.map((data, index) => (
              <ProjectBox key={index} {...data} />
            ))}
          </Col>
        </Wrapper>
      </Container>
    </Root>
  );
};

export default MyProjects;
