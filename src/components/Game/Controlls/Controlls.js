import React, { useState, useEffect } from "react";
import { Sprite } from "../Sprite/Sprite";
import PropTypes from "prop-types";

export const Controlls = ({ event }) => {
  const [positions, setPositions] = useState({
    top: 448,
    left: 608,
    posX: 0,
    posY: 0,
    step: 0,
  });

  const forbiddenFieldsDown = [
    { left: 640, top: 416 },
    { left: 672, top: 416 },
    { left: 704, top: 416 },
  ];

  const handler = (e) => {
    if (e.key === "ArrowRight") {
      setPositions({
        top: positions.top,
        left: positions.left === 1248 ? positions.left : positions.left + 32,
        posX: positions.step * -32,
        posY: -64,
        step: positions.step < 2 ? positions.step + 1 : 0,
      });
    } else if (e.key === "ArrowLeft") {
      setPositions({
        top: positions.top,
        left: positions.left === 0 ? positions.left : positions.left - 32,
        posX: positions.step * -32,
        posY: -32,
        step: positions.step < 2 ? positions.step + 1 : 0,
      });
    } else if (e.key === "ArrowUp") {
      setPositions({
        top: positions.top === 0 ? positions.top : positions.top - 32,
        left: positions.left,
        posX: positions.step * -32,
        posY: -96,
        step: positions.step < 2 ? positions.step + 1 : 0,
      });
    } else if (e.key === "ArrowDown") {
      for (let data of forbiddenFieldsDown) {
        if (data.left === positions.left && data.top === positions.top) {
          console.log(data);
          setPositions({
            top: positions.top,
            left: positions.left,
            posX: positions.step * -32,
            posY: 0,
            step: positions.step < 2 ? positions.step + 1 : 0,
          });
        } else {
          setPositions({
            top: positions.top === 640 ? positions.top : positions.top + 32,
            left: positions.left,
            posX: positions.step * -32,
            posY: 0,
            step: positions.step < 2 ? positions.step + 1 : 0,
          });
        }
      }
    }
    console.log("Left", positions.left, "top", positions.top);
  };

  useEffect(() => {
    handler(event);
  }, [event]);
  return (
    <Sprite
      top={`${positions.top}px`}
      left={`${positions.left}px`}
      posX={`${positions.posX}px`}
      posY={`${positions.posY}px`}
    />
  );
};

Controlls.propTypes = {
  event: PropTypes.object,
};
