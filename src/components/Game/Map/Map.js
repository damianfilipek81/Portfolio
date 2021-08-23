import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import MapImage from "../../../images/map.png";
import { Controlls } from "../Controlls/Controlls";
import maleCharacter from "../../../images/boy.png";
import femaleCharacter from "../../../images/girl.png";
import { device } from "../../../deviceSettings";
import ArrowControll from "../ArrowControll/ArrowControll";
import HomepageClassicView from '../../Views/HomepageClassicView/HomepageClassicView';

// const Image = styled.div`
//   width: 1280px;
//   height: 672px;
//   background-image: url(${MapImage});
//   background-repeat: no-repeat;
//   position: relative;
//   background-size: cover;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   &:focus-visible {
//     outline: none;
//   }
// `;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 1280px;
  height: 672px;
  overflow: auto;

  &:focus-visible {
    outline: none;
  }
`;
const Image = styled.img`
  position: absolute;
  width: 1280px;
  height: 672px;
  top: 0;
  left: 0;
  object-fit: cover;
  ${({classicView})=> classicView && `filter: blur(5px);`}
`;
const CharacterPickerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  position: fixed;
  top: 50%;
  left: 49%;
  transform: translate(-50%, -50%);
  ${({classicView})=> classicView && `filter: blur(5px);`}

`;
const CharacterPicker = styled.div`
  display: flex;
  ${({ character }) =>
    (character === "male" || character === "female") && `display: none;`}
  align-items: center;
  justify-content: center;
  background: rgba(33, 34, 36, 0.5);
  color: #fff;
  width: 150px;
  height: 100px;
  margin: 10px;
  cursor: pointer;
  flex-direction: column;
  border-radius: 5px;

  &:hover {
    background: rgba(33, 34, 36, 0.8);
  }

  @media ${device.mobileS}{
    width: 135px;
  }
`;

const SpriteImage = styled.div`
  width: 32px;
  height: 32px;
  background-position: 0, 32;
  background-image: url(${({ sex }) => sex});
  background-repeat: no-repeat;
  display: inline-block;
  z-index: 999;
  margin-bottom: 5px;
`;

const ClassicViewButton = styled.span`
  display: inline-block;
  position: absolute;
  top: 20px;
  right: 20px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  z-index: 1001;
  font-weight: bold;
  background: rgba(0,0,0,0.4);
  padding: 10px;
  border-radius: 5px;

  &:hover{
    color: black;
    background: rgba(255,255,255,0.4);
  }

  @media ${device.laptop}{
    position: fixed;
    top: 10px;
  }
`
export const Map = () => {
  const [controller, setController] = useState("");
  const [character, setCharacter] = useState(null);
  const [classicView, setClassicView] = useState(false);

  const myRef = useRef(null);

  useEffect(() => {
    myRef.current.focus();
  }, []);
  return (
    <Wrapper onKeyDown={(e) => setController(e)} tabIndex="0" ref={myRef}>
      <Image src={MapImage} classicView={classicView}/>
      <CharacterPickerWrapper classicView={classicView}>
        <CharacterPicker
          onClick={() => setCharacter("male")}
          character={character}
        >
          <SpriteImage sex={maleCharacter} />
          Male
        </CharacterPicker>
        <CharacterPicker
          onClick={() => setCharacter("female")}
          character={character}
        >
          <SpriteImage sex={femaleCharacter} />
          Female
        </CharacterPicker>
      </CharacterPickerWrapper>
      <Controlls event={controller} character={character}/>
      <ArrowControll setController={setController}/>
      {classicView === false ? <ClassicViewButton onClick={() => setClassicView(true)}>Classic view</ClassicViewButton> :
        <ClassicViewButton onClick={() => setClassicView(false)}>Map view</ClassicViewButton>
      }
      {classicView && <HomepageClassicView />}
    </Wrapper>
  );
};
