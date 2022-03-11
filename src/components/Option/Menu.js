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
  border-bottom: 1px solid #e5e7eb;
`;

const Menu = ({ title, mode, state, setState }) => {
  return (
    <Container>
      {title}
      {mode === "Button" ? <Button state={state} setState={setState} /> : mode === "Radio" ? <Radio state={state} setState={setState} /> : null}
    </Container>
  );
};

export default Menu;
