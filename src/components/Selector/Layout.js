import styled from "styled-components";
import SearchInput from "./SearchInput";
import ListWrapper from "./ListWrapper";
import Button from "./Button";
import Popover from "./Popover";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const Wrapper = styled.div`
  margin: 0 10px;
`;

const Layout = () => {
  return (
    <Container>
      <Wrapper>
        <SearchInput />
        <ListWrapper />
        {/* listwrapper 안에 title, list, 갯수 */}
      </Wrapper>
      {/* 버튼모음*/}
      <Button />
      <Wrapper>
        <SearchInput />
        <ListWrapper />
      </Wrapper>
      {/* 셋팅버튼 */}
      <Button />
      <Popover />
    </Container>
  );
};

export default Layout;
