import React from "react";
import styled from "styled-components";
import List from "./List";

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  border: 1px solid #e5e7eb;
  border-radius: 4px;

  .Container-webkit-scrollbar {
    display: none;
  }
`;

const Total = styled.div`
  padding: 10px;
  width: 100%;
  border-top: 1px solid #e5e7eb;
  box-sizing: border-box;
`;

const Selector = ({ data, title, itemSize }) => {
  return (
    <Container>
      <List data={data} title={title} itemSize={itemSize}/>
      <Total>1 / 8</Total>
    </Container>
  );
};

export default Selector;
