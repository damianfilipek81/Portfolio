import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { device } from '../../../deviceSettings';

// ${({ character }) =>
//   (character === "male" || character === "female") && `display: none;`}
const Root = styled.div`
display: none;
${({nextSite}) => nextSite !== null && `display: flex;`}
${({close}) => close && `display: none;`}
align-items: center;
justify-content: center;
background: rgba(33, 34, 36, 0.5);
color: #fff;
margin: 10px;
flex-direction: column;
padding: 50px;
border-radius: 5px;
z-index: 999;
position: fixed;
top: 20%;
left: 49%;
transform: translate(-50%, -50%);
margin: 0;

@media ${device.mobileL} {
  width: 300px;
  padding: 15px 25px;
}
@media ${device.mobileS} {
  width: 240px;
  padding: 15px 25px;
}
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

const CloseBtn = styled.span`
  right: 10px;
  top: 0;
  position: absolute;
  color: #fff;
  font-size: 33px;
  font-weight: bold;
  cursor: pointer;

  &:hover{
    color: rgb(200,200,200);
  }
`
export const Modal = ({nextSite, event}) => {
  const [close, setClose] = useState(false);

  let history = useHistory();
  const handler = (e) => {
    if(e.key === ' '){
      history.push(`/${nextSite === 'about me' ? 'about' : nextSite === 'my skills' ? 'skills' : nextSite === 'my projects' ? 'projects' : nextSite === 'contact' && 'contact'}`);
    }
  }
  useEffect(() => {
    handler(event);
    setClose(false);
  },[event])
  return(
    <Root nextSite={nextSite} close={close}>
      <CloseBtn onClick={() => setClose(true)}>x</CloseBtn>
      <h5>Hit <Span>spacebar</Span> if you want to go to <Span>{nextSite}</Span> site.</h5>
      <Button to={nextSite === 'about me' ? 'about' : nextSite === 'my skills' ? 'skills' : nextSite === 'my projects' ? 'projects' : nextSite === 'contact' && 'contact'}>...or click here</Button>
    </Root>
  )
}

Modal.propTypes = {
  nextSite: PropTypes.string,
  event: PropTypes.any,
}