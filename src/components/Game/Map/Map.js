import React, {useState, useRef, useEffect} from "react";
import styled from "styled-components";
import MapImage from "../../../images/map.png";
import { Controlls } from "../Controlls/Controlls";

const Image = styled.div`
  width: 1280px;
  height: 672px;
  background-image: url(${MapImage});
  background-repeat: no-repeat;
  position: relative;
  background-size: cover;

  &:focus-visible{
    outline: none;
  }
`;

export const Map = () => {
  const [controller, setController] = useState('');
  const myRef = useRef(null);

  useEffect(() => {
    myRef.current.focus()
  }, [])

  return (
    <Image onKeyDown={(e) => setController(e)} tabIndex="0" ref={myRef}>
      <Controlls event={controller}/>
    </Image>
  );
};
