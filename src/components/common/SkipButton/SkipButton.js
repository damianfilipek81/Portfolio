import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Root = styled(Link)`
  position: absolute;
  top: 30px;
  right: 30px;
  color: #fff;
`
function SkipButton() {
  return (
    <Root to='/home'>
      Skip
    </Root>
  );
}

export default SkipButton;