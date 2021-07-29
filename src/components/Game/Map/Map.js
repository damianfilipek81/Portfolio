import React from "react";
import styled from "styled-components";
import MapImage from "../../../images/map.png";

const Image = styled.div`
  width: 1280px;
  height: 672px;
  background-image: url(${MapImage});
  background-repeat: no-repeat;
`;

const ImageWrapper = styled.span`
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
  const rows = [];
  const wrappers = [];
  for (let i = 0; i < 40; i++) {
    wrappers.push(i);
  }

  for (let i = 0; i < 21; i++) {
    rows.push(
      <Row id={`Row ${i}`}>
        {wrappers.map((data) => (
          <ImageWrapper key={data} id={`Wrapper ${data}`} />
        ))}
      </Row>
    );
  }
  return <Image>{rows.map((data) => data)}</Image>;
};
