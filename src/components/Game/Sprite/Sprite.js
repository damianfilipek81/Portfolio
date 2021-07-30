import React from 'react';
import Boy from '../../../images/boy.png';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Image = styled.div`
  width: 32px;
  height: 32px;
  background-position: ${({posX, posY}) => `${posX} ${posY}`};
  background-image: url(${Boy});
  background-repeat: no-repeat;
  display: inline-block;
  z-index: 999;
  position: absolute;
  top: ${({top}) => `${top}`};
  left: ${({left}) => `${left}`};
`
export const Sprite = ({top, left, posX, posY}) => {
  return(
    <Image top={top} left={left} posX={posX} posY={posY}/>
  )
}

Sprite.propTypes = {
  top: PropTypes.string,
  left: PropTypes.string,
  posX: PropTypes.string,
  posY: PropTypes.string,
}