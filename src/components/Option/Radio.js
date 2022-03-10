import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
const Input = styled.input``;

const Span = styled.span`
  margin-top: 5px;
`;

const Radio = () => {
  const [radio, setRadio] = useState("XS");
  // 선택한 사이즈는 radio 에 담겨있습니다.
  const sizes = ["XS", "S", "M"];

  const handleChange = (size) => {
    setRadio(size);
  };

  return (
    <Container>
      {sizes.map((size, index) => (
        <SubContainer key={index}>
          <Input
            type="radio"
            name="size"
            checked={radio === size}
            onClick={() => handleChange(size)}
          />
          <Span>{size}</Span>
        </SubContainer>
      ))}
    </Container>
  );
};

export default Radio;
