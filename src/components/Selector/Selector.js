import styled from "styled-components";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import hotkeys from "hotkeys-js";
import { setAvaiable, setSelected } from "../../redux/contents/contentsSlice";

export const ListType = {
  Available: "Available",
  Selected: "Selected",
};

const SelectorContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
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

const Container = styled.div`
  width: 100%;
  height: 100%;
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
  font-size: ${({ state }) =>
    state === "M" ? "medium" : state === "S" ? "small" : "x-small"};
`;

const Selector = ({
  data,
  title,
  type,
  isMoveOneMode = true,
  setMultiSelected,
  select,
  fieldCount,
  selectCount,
  isDisplaySelectItem,
  itemSize,
}) => {
  const dispatch = useDispatch();
  const [anchorId, setAnchorId] = useState();
  const [idList, setIdList] = useState([]);
  const [shiftEditingList, setShiftEditingList] = useState([]);

  useEffect(() => {
    setMultiSelected([
      ...idList.filter((id) => !shiftEditingList.includes(id)),
      ...shiftEditingList,
    ]);
  }, [idList, shiftEditingList, setMultiSelected]);

  useEffect(() => {
    hotkeys("shift, command");
  }, []);

  const onClick = (value) => {
    const convertedValue = Number(value);

    if (!hotkeys.isPressed("command") && !hotkeys.isPressed("shift")) {
      if (!idList.includes(convertedValue)) {
        setIdList([convertedValue]);
        setAnchorId(convertedValue);
      } else {
        setIdList((prev) => (prev.length > 1 ? [convertedValue] : []));
        setAnchorId(undefined);
      }
      setShiftEditingList([]);
    }

    if (!isMoveOneMode && hotkeys.isPressed("command")) {
      const targetList = [
        ...idList.filter((id) => !shiftEditingList.includes(id)),
        ...shiftEditingList,
      ];

      if (!targetList.includes(convertedValue)) {
        setIdList([...targetList, convertedValue]);
        setAnchorId(convertedValue);
      } else {
        setIdList(targetList.filter((id) => id !== convertedValue));
        setAnchorId(undefined);
      }
      setShiftEditingList([]);
    }

    if (!isMoveOneMode && hotkeys.isPressed("shift")) {
      if (!idList.length) {
        setIdList([convertedValue]);
        setAnchorId(convertedValue);
        setShiftEditingList([]);
        return;
      }
      const targetIndex = data.findIndex((d) => d.id === convertedValue);
      const anchorIndex = data.findIndex((d) => d.id === anchorId);
      const minIndex = Math.min(targetIndex, anchorIndex);
      const maxIndex = Math.max(targetIndex, anchorIndex);
      const selectedSection = data
        .slice(minIndex, maxIndex + 1)
        .map((d) => d.id);
      setShiftEditingList(selectedSection);
    }
  };

  const handleOnDragEnd = (result) => {
    const items = [...data];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    dispatch(
      type === ListType.Available ? setAvaiable(items) : setSelected(items),
    );
  };

  return (
    <SelectorContainer>
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
                  {data.map((item, index) => {
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
                              background={select.includes(item.id) && "#62D1FF"}
                              onClick={(e) => onClick(e.target.id)}
                              state={itemSize}
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
        </SubContainer>
      </Container>
      <Total>
        {isDisplaySelectItem ? `${selectCount} / ${fieldCount}` : "0 / 0"}
      </Total>
    </SelectorContainer>
  );
};

export default Selector;
