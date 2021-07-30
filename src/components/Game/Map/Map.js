import React, {useState} from "react";
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
`;

const Field = styled.span`
  width: 32px;
  height: 32px;
  display: inline-block;
  margin: 0;
  top: 0;
`;

const Row = styled.div`
  height: 32px;
`;

export const Map = () => {
  const [controller, setController] = useState('');

  const rows = [];
  const wrappers = [];
  for (let i = 0; i < 40; i++) {
    wrappers.push(i);
  }

  for (let i = 0; i < 21; i++) {
    rows.push(
      <Row id={`Row ${i}`}>
        {wrappers.map((data) => (
          <Field key={data} id={`Wrapper ${data}`}  />
        ))}
      </Row>
    );
  }
  return (
    <Image onKeyDown={(e) => setController(e)} tabIndex="0">
      {rows.map((data) => data)}
      <Controlls event={controller}/>
    </Image>
  );
};
