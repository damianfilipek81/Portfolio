import React from "react";
import styled from "styled-components";
import { Container as ContainerWidth } from "@material-ui/core";
import BackButton from "../../common/BackButton/BackButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import emailjs from "emailjs-com";
import { device } from "../../../deviceSettings";
require("dotenv").config();

const Root = styled.div`
  height: 100%;
`;
const Container = styled(ContainerWidth)`
  color: #fff;
  display: flex !important;
  height: 100%;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  align-items: center;
  textarea {
    resize: none;
    height: 150px;
  }

  input,
  textarea {
    margin: 5px;
    padding: 10px;
    border-radius: 15px;
    border: none;
    width: 100%;
    &:focus-visible {
      outline: none;
    }
  }

  @media ${device.laptop} {
   margin-top: 70px;
  }
  @media ${device.mobileL} {
    width: 350px;
    margin-top: 170px;
  }
  @media ${device.mobileM} {
    width: 310px;
  }
  @media ${device.mobileS} {
    width: 270px;
  }
`;

const Button = styled.button`
  width: 150px;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 15px;
  color: rgb(0, 0, 0);
  border-radius: 15px;
  cursor: pointer;
  margin-top: 20px;
  border: none;

  &:hover {
    background: rgba(255, 255, 255, 0.6);
  }
`;

const IconWrapper = styled.div``;

const Email = styled.p`
  user-select: text;
`;
const Icon = styled.a`
  padding: 15px;
  svg {
    width: 50px;
    height: 50px;
    &:hover {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;
const Social = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
`;
const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Root>
      <Container>
        <BackButton name="/home" color="#fff" colorHover="#bbb" />
        <Form onSubmit={sendEmail}>
          <input
            placeholder="Your name"
            type="text"
            name="name"
            required
          ></input>
          <input
            placeholder="Your e-mail"
            type="email"
            name="email"
            required
          ></input>
          <textarea placeholder="Message" name="message" required></textarea>
          <Button type="submit">Send</Button>
        </Form>
        <Social>
          <IconWrapper>
            <Icon href="https://github.com/damianfilipek81">
              <GitHubIcon />
            </Icon>
            <Icon href="https://www.linkedin.com/in/damianfilipek81/">
              <LinkedInIcon />
            </Icon>
          </IconWrapper>
          <Email>damianfilipek81@gmail.com</Email>
        </Social>
      </Container>
    </Root>
  );
};

export default Contact;
