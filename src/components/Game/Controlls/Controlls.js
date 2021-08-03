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
    { left: 512, top: 416 },
    { left: 544, top: 416 },
    { left: 576, top: 416 },
    { left: 640, top: 416 },
    { left: 672, top: 416 },
    { left: 704, top: 416 },
    { left: 544, top: 608 },
    { left: 576, top: 608 },
    { left: 608, top: 608 },
    { left: 640, top: 608 },
    { left: 672, top: 608 },
    { left: 0, top: 160 },
    { left: 32, top: 160 },
    { left: 64, top: 160 },
    { left: 96, top: 192 },
    { left: 128, top: 256 },
    { left: 160, top: 320 },
    { left: 192, top: 320 },
    { left: 224, top: 608 },
    { left: 320, top: 544 },
    { left: 384, top: 608 },
    { left: 448, top: 512 },
    { left: 320, top: 0 },
    { left: 352, top: 64 },
    { left: 384, top: 64 },
    { left: 416, top: 32 },
    { left: 512, top: 64 },
    { left: 512, top: 128 },
    { left: 736, top: 0 },
    { left: 832, top: 64 },
    { left: 704, top: 128 },
    { left: 800, top: 416 },
    { left: 736, top: 480 },
    { left: 768, top: 544 },
    { left: 896, top: 352 },
    { left: 992, top: 352 },
    { left: 1088, top: 384 },
    { left: 1088, top: 448 },
    { left: 1056, top: 512 },
    { left: 992, top: 576 },
    { left: 1184, top: 544 },
    { left: 1216, top: 384 },
  ];

  const forbiddenFieldsLeft = [
    { left: 96, top: 192 },
    { left: 128, top: 224 },
    { left: 128, top: 256 },
    { left: 160, top: 288 },
    { left: 160, top: 320 },
    { left: 224, top: 352 },
    { left: 192, top: 384 },
    { left: 192, top: 416 },
    { left: 192, top: 448 },
    { left: 64, top: 480 },
    { left: 32, top: 512 },
    { left: 352, top: 32 },
    { left: 384, top: 128 },
    { left: 448, top: 96 },
    { left: 448, top: 64 },
    { left: 544, top: 96 },
    { left: 480, top: 544 },
    { left: 416, top: 640 },
    { left: 256, top: 640 },
    { left: 352, top: 576 },
    { left: 608, top: 448 },
    { left: 544, top: 480 },
    { left: 544, top: 512 },
    { left: 544, top: 544 },
    { left: 544, top: 576 },
    { left: 544, top: 608 },
    { left: 736, top: 448 },
    { left: 736, top: 480 },
    { left: 736, top: 576 },
    { left: 736, top: 608 },
    { left: 736, top: 640 },
    { left: 768, top: 512 },
    { left: 768, top: 544 },
    { left: 800, top: 576 },
    { left: 544, top: 192 },
    { left: 544, top: 160 },
    { left: 768, top: 32 },
    { left: 768, top: 64 },
    { left: 736, top: 160 },
    { left: 736, top: 192 },
    { left: 1120, top: 224 },
    { left: 1216, top: 192 },
    { left: 832, top: 448 },
    { left: 928, top: 384 },
    { left: 928, top: 416 },
    { left: 928, top: 448 },
    { left: 928, top: 480 },
    { left: 928, top: 512 },
    { left: 928, top: 544 },
    { left: 1024, top: 416 },
    { left: 1024, top: 384 },
    { left: 1120, top: 416 },
    { left: 1024, top: 608 },
    { left: 1088, top: 576 },
    { left: 1088, top: 544 },
    { left: 1120, top: 512 },
    { left: 1120, top: 480 },
    { left: 1248, top: 448 },
    { left: 1248, top: 416 },
    { left: 1216, top: 576 },
  ];

  const forbiddenFieldsTop = [
    { left: 0, top: 544 },
    { left: 32, top: 512 },
    { left: 64, top: 480 },
    { left: 96, top: 480 },
    { left: 128, top: 480 },
    { left: 160, top: 480 },
    { left: 192, top: 384 },
    { left: 320, top: 64 },
    { left: 352, top: 160 },
    { left: 384, top: 128 },
    { left: 416, top: 128 },
    { left: 512, top: 128 },
    { left: 448, top: 576 },
    { left: 320, top: 608 },
    { left: 576, top: 480 },
    { left: 544, top: 480 },
    { left: 640, top: 480 },
    { left: 672, top: 480 },
    { left: 736, top: 576 },
    { left: 768, top: 608 },
    { left: 512, top: 224 },
    { left: 736, top: 96 },
    { left: 704, top: 224 },
    { left: 832, top: 128 },
    { left: 864, top: 128 },
    { left: 896, top: 160 },
    { left: 928, top: 160 },
    { left: 960, top: 192 },
    { left: 992, top: 192 },
    { left: 1024, top: 192 },
    { left: 1056, top: 192 },
    { left: 1088, top: 256 },
    { left: 1120, top: 224 },
    { left: 1152, top: 224 },
    { left: 1184, top: 224 },
    { left: 1216, top: 192 },
    { left: 1248, top: 192 },
    { left: 800, top: 480 },
    { left: 896, top: 576 },
    { left: 992, top: 448 },
    { left: 1088, top: 448 },
    { left: 992, top: 640 },
    { left: 1056, top: 608 },
    { left: 1088, top: 544 },
    { left: 1216, top: 480 },
    { left: 1184, top: 608 },
  ];

  const forbiddenFieldsRight = [
    { left: 288, top: 32 },
    { left: 320, top: 96 },
    { left: 320, top: 128 },
    { left: 384, top: 64 },
    { left: 480, top: 96 },
    { left: 480, top: 448 },
    { left: 480, top: 480 },
    { left: 480, top: 512 },
    { left: 480, top: 544 },
    { left: 480, top: 576 },
    { left: 480, top: 608 },
    { left: 480, top: 640 },
    { left: 416, top: 544 },
    { left: 352, top: 640 },
    { left: 192, top: 640 },
    { left: 288, top: 576 },
    { left: 608, top: 448 },
    { left: 672, top: 480 },
    { left: 672, top: 512 },
    { left: 672, top: 544 },
    { left: 672, top: 576 },
    { left: 672, top: 608 },
    { left: 736, top: 576 },
    { left: 480, top: 160 },
    { left: 480, top: 192 },
    { left: 704, top: 32 },
    { left: 704, top: 64 },
    { left: 672, top: 160 },
    { left: 672, top: 192 },
    { left: 832, top: 0 },
    { left: 832, top: 32 },
    { left: 832, top: 64 },
    { left: 800, top: 96 },
    { left: 864, top: 128 },
    { left: 928, top: 160 },
    { left: 1056, top: 192 },
    { left: 1056, top: 224 },
    { left: 768, top: 448 },
    { left: 864, top: 384 },
    { left: 864, top: 416 },
    { left: 864, top: 448 },
    { left: 864, top: 480 },
    { left: 864, top: 512 },
    { left: 864, top: 544 },
    { left: 960, top: 384 },
    { left: 960, top: 416 },
    { left: 1056, top: 416 },
    { left: 1056, top: 480 },
    { left: 1056, top: 512 },
    { left: 1024, top: 544 },
    { left: 1024, top: 576 },
    { left: 960, top: 608 },
    { left: 1184, top: 416 },
    { left: 1184, top: 448 },
    { left: 1152, top: 576 },
  ];

  const handler = (e) => {
    if (e.key === "ArrowRight" || e.key === "d") {
      setPositions({
        top: positions.top,
        left:
          positions.left === 1248 ||
          forbiddenFieldsRight.filter(
            (field) =>
              field.top === positions.top && field.left === positions.left
          ).length > 0
            ? positions.left
            : positions.left + 32,
        posX: positions.step * -32,
        posY: -64,
        step: positions.step < 2 ? positions.step + 1 : 0,
      });
    } else if (e.key === "ArrowLeft" || e.key === "a") {
      setPositions({
        top: positions.top,
        left:
          positions.left === 0 ||
          forbiddenFieldsLeft.filter(
            (field) =>
              field.top === positions.top && field.left === positions.left
          ).length > 0
            ? positions.left
            : positions.left - 32,
        posX: positions.step * -32,
        posY: -32,
        step: positions.step < 2 ? positions.step + 1 : 0,
      });
    } else if (e.key === "ArrowUp" || e.key === "w") {
      setPositions({
        top:
          positions.top === 0 ||
          forbiddenFieldsTop.filter(
            (field) =>
              field.top === positions.top && field.left === positions.left
          ).length > 0
            ? positions.top
            : positions.top - 32,
        left: positions.left,
        posX: positions.step * -32,
        posY: -96,
        step: positions.step < 2 ? positions.step + 1 : 0,
      });
    } else if (e.key === "ArrowDown" || e.key === "s") {
      setPositions({
        top:
          positions.top === 640 ||
          forbiddenFieldsDown.filter(
            (field) =>
              field.top === positions.top && field.left === positions.left
          ).length > 0
            ? positions.top
            : positions.top + 32,
        left: positions.left,
        posX: positions.step * -32,
        posY: 0,
        step: positions.step < 2 ? positions.step + 1 : 0,
      });
    }
    console.log(positions);
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
