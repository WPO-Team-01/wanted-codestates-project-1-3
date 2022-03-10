import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import hotkeys from "hotkeys-js";

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
  background-color: ${(props) => props.background || "white"};
  padding: 10px;
  border-bottom: 1px #e5e7eb solid;
  box-sizing: border-box;
`;

const List = ({
  data,
  title,
  isMoveOneMode,
  multiSelected,
  setMultiSelected,
}) => {
  const [listData, setListData] = useState(data);
  const [checkValue, setCheckValue] = useState([]);
  const [multi, setMulti] = useState(true);
  const [lastClick, setLastClick] = useState();

  const findEl = (el) => listData.find((item) => item.id === Number(el));
  const onClick = (value) => {
    setLastClick(value);
    if (!isHotkeyPressed("command") && !isHotkeyPressed("Shift")) {
      if (checkValue.includes(Number(value))) {
        setCheckValue((prev) => prev.filter((item) => item !== Number(value)));
      } else {
        setCheckValue((prev) => [...prev, Number(value)]);
      }
    }
    if (multi && isHotkeyPressed("command")) {
      if (!checkValue.includes(Number(value))) {
        setCheckValue((prev) => [...prev, Number(value)]);
      } else {
        setCheckValue((prev) => prev.filter((item) => item !== Number(value)));
      }
    }
    if (multi && isHotkeyPressed("Shift")) {
      const firstEl = listData.indexOf(findEl(lastClick));
      const lastEl = listData.indexOf(findEl(Number(value)));
      const checkEl = listData
        .slice(firstEl + 1, lastEl + 1)
        .reduce((acc, cur) => {
          return [...acc, cur.id];
        }, []);
      if (checkValue.length === 0) {
        setCheckValue((prev) => prev.concat(checkEl));
      } else {
        for (let i = 0; i <= checkEl.length; i++) {
          if (checkValue.includes(checkEl[i])) {
            setCheckValue((prev) => prev.filter((item) => item !== checkEl[i]));
          } else {
            setCheckValue((prev) => [...prev, Number(checkEl[i])]);
          }
        }
      }

      setLastClick(value);
    }
  };

  useEffect(() => {
    setListData(data);
  }, [data]);

  const handleOnDragEnd = (result) => {
    const items = [...listData];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setListData(items);
  };

  const handleClick = (item) => {
    if (isMoveOneMode) {
      setMultiSelected([item.id]);
    } else {
      let newArr = [...multiSelected, ...[item.id]];
      setMultiSelected(newArr);
    }
  };

  return (
    <Container>
      <Title>{title}</Title>
      <SubContainer>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="fields">
            {(provided) => (
              <div
                className="fields"
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{ width: "100%" }}
              >
                {listData.map((item, index) => {
                  let strFormId = String(item.id);
                  return (
                    <Draggable
                      key={item.id}
                      draggableId={strFormId}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <Item
                            key={item.id}
                            id={item.id}
                            background={
                              checkValue.includes(item.id) && "#62D1FF"
                            }
                            onClick={(e) => onClick(e.target.id)}
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
