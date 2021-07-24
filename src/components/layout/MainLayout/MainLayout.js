import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Container as ContainerWidth} from '@material-ui/core';

const Container = styled(ContainerWidth)`
  height: 100vh;
`;

const MainLayout = ({ children }) => (
  <Container>
    {children}
  </Container>
);

MainLayout.propTypes = {
  children: PropTypes.node,
}

export default MainLayout;