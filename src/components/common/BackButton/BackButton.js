import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { device } from "../../../deviceSettings";

const Root = styled(Link)`
  position: absolute;
  top: 50px;
  left: 0;
  font-size: 50px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: 700;
  color: ${({ color }) => color};

  &:hover {
    color: ${({colorHover})=>colorHover};
  }

  @media ${device.laptop}{
    left: 30px;
  }
`;

const BackButton = ({ name, color, colorHover }) => (
  <Root to={name} color={color} colorHover={colorHover}>{`<`}</Root>
);

BackButton.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  colorHover: PropTypes.string,
};

export default BackButton;
