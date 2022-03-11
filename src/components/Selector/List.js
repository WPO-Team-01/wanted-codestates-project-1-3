import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  width: 100%;
  flex-grow: 1;
`;
const SubContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-x: hidden;
  overflow-y: auto;
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bolder;
  padding: 20px 10px;
  box-sizing: border-box;
  border-bottom: 1px #e5e7eb solid;
`;
const Item = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  text-align: left;
  padding: 10px;
  border-bottom: 1px #e5e7eb solid;
  box-sizing: border-box;
  :hover {
    background: #f1f3f8;
  }
`;
const List = ({ data }) => {
  const [listData, setListData] = useState(data);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setListData(data);
  }, [data]);

  const handleOnDragEnd = result => {
    const items = [...listData];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setListData(items);
  };

  const handleMultiClick = e => {
    //shift 누르면 처음 누른거에서 마지막까지 한번에 선택
    if (e.shiftKey) {
      if (!isClicked) {
        //처음 shift 누르고 클릭할 때
        setIsClicked(true);
        //처음에 위쪽에 클릭해서 아래쪽을 눌러야하는 경우
        //처음에 아래쪽을 클릭해서 위쪽을 눌러야하는 경우
      } else if (isClicked) {
        // 하나이상의 아이템 클릭후 shift 눌렀을 때
      }
    }
  };

  return (
    <Container>
      <Title>available option</Title>
      <SubContainer>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId='fields'>
            {provided => (
              <div
                className='fields'
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {listData.map((item, index) => {
                  let strFormId = String(item.id);
                  return (
                    <Draggable
                      key={item.id}
                      draggableId={strFormId}
                      index={index}
                    >
                      {provided => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <Item
                            key={item.id}
                            onClick={e => {
                              handleMultiClick(e);
                            }}
                          >
                            {item.emoji}&nbsp;&nbsp;
                            {item.name}
                          </Item>
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        {/* {data.map((item, index) => (
          <Item key={item.id}>
            {item.emoji}&nbsp;&nbsp;
            {item.name}
          </Item>
        ))} */}
      </SubContainer>
    </Container>
  );
};

export default List;
