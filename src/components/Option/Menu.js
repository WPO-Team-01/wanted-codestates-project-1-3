import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Radio from "./Radio";

const Container = styled.div`
  width: 280px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  margin-top: -1px;
  border: 1px #e5e7eb solid;
`;

const Menu = ({ title, mode }) => {
  return (
    <Container>
      {title}
      {mode === "Button" ? <Button /> : mode === "Radio" ? <Radio /> : null}
    </Container>
  );
};

export default Menu;
