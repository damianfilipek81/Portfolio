import React from "react";
import styled from "styled-components";
import Entrypage from "../Entrypage/Entrypage";

const Root = styled.div`
  background: black;
  height: 100%;
`;
const Homepage = () => (
  <Root>
    <Entrypage />
  </Root>
);

export default Homepage;
