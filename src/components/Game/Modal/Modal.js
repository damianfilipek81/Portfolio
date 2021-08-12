import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const Root = styled.div`
display: flex;
${({ character }) =>
  (character === "male" || character === "female") && `display: none;`}
align-items: center;
justify-content: center;
background: rgba(33, 34, 36, 0.5);
color: #fff;
margin: 10px;
flex-direction: column;
padding: 50px;
border-radius: 5px;
z-index: 999;
`

const Span = styled.span`
  color: red;
`

const Button = styled(Link)`
  border-radius: 15px;
  background: rgba(255,255,255,0.3);
  padding: 5px 10px;
  color: #fff;

  &:hover{
    background: rgba(255,220,220,0.3)
  }
`

export const Modal = ({nextSite, event}) => {
  let history = useHistory();
  const handler = (e) => {
    if(e.key === ' '){
      history.push(`/${nextSite === 'about me' ? 'about' : nextSite === 'my skills' ? 'skills' : nextSite === 'my projects' ? 'projects' : nextSite === 'contact' && 'contact'}`);
    }
  }
  // useEffect(() => {
  //   handler(event)
  // },[event])
  return(
    <Root>
      <h5>Hit <Span>spacebar</Span> if you want to go to <Span>{nextSite}</Span> site.</h5>
      <Button to={nextSite === 'about me' ? 'about' : nextSite === 'my skills' ? 'skills' : nextSite === 'my projects' ? 'projects' : nextSite === 'contact' && 'contact'}>...or click here</Button>
    </Root>
  )
}

Modal.propTypes = {
  nextSite: PropTypes.string,
  event: PropTypes.any,
}