import React from 'react';
import styled from 'styled-components';
import List from './List';

const Container = styled.section`
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Total = styled.div`
  padding: 10px;
  width: 100%;
  border-top: 1px solid #e5e7eb;
  box-sizing: border-box;
`;

const Selector = ({
  data,
  title,
  isMoveOneMode,
  multiSelected,
  setMultiSelected,
}) => {
  return (
    <Container>
      <List
        data={data}
        title={title}
        isMoveOneMode={isMoveOneMode}
        multiSelected={multiSelected}
        setMultiSelected={setMultiSelected}
      />
      <Total>1 / 8</Total>
    </Container>
  );
};

export default Selector;
