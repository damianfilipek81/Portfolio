import React from "react";
import styled from "styled-components";
import {Map} from '../../Game/Map/Map';

const Root = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Homepage = () => (
  <Root>
    <Map />
  </Root>
);

export default Homepage;
