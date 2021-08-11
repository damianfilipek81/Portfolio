import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Root = styled.div`
  background: #212224;
  height: 100vh;
`;

const MainLayout = ({ children }) => <Root>{children}</Root>;

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
