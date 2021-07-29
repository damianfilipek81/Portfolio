import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Container as ContainerWidth } from "@material-ui/core";

const Container = styled(ContainerWidth)`
  height: 100vh;
`;

const Root = styled.div`
  background: #212224;
`;

const MainLayout = ({ children }) => (
  <Root>
    <Container maxWidth={1280}>{children}</Container>
  </Root>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
