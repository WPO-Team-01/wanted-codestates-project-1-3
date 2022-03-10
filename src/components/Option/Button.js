import React, { useState } from "react";
import styled from "styled-components";

const Circle = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background: ${({ state }) => (state ? "green" : "red")};
`;

const Button = ({state, setState}) => {

  const handleButton = () => {
    setState((state) => !state);
  };

  return <Circle onClick={handleButton} state={state} />;
};

export default Button;
