import React from 'react';
import male from '../../../images/boy.png';
import female from '../../../images/girl.png';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Image = styled.div`
  width: 32px;
  height: 32px;
  background-position: ${({posX, posY}) => `${posX} ${posY}`};
  background-image: url(${({character}) => character === 'male' ? male : character === 'female' && female});
  background-repeat: no-repeat;
  display: inline-block;
  z-index: 997;
  position: absolute;
  top: ${({top}) => `${top}`};
  left: ${({left}) => `${left}`};
`
export const Sprite = ({top, left, posX, posY, character, spriteRef}) => {
  return(
    <Image top={top} left={left} posX={posX} posY={posY} character={character} ref={spriteRef}/>
  )
}

Sprite.propTypes = {
  top: PropTypes.string,
  left: PropTypes.string,
  posX: PropTypes.string,
  posY: PropTypes.string,
  character: PropTypes.string,
  spriteRef: PropTypes.any,
}