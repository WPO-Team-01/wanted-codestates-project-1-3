import React, { useState } from "react";
import styled from "styled-components";

const Circle = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background: ${({ isGreen }) => (isGreen ? "green" : "red")};
`;

const Button = () => {
  const [isGreen, setIsGreen] = useState(false);

  const handleButton = () => {
    setIsGreen((isGreen) => !isGreen);
  };

  return <Circle onClick={handleButton} isGreen={isGreen} />;
};

export default Button;
