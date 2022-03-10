import React from "react";
import styled from "styled-components";
import List from "./List";

const data = [
  {
    id: 7,
    topId: 4,
    code: "CONNECTOR",
    name: "수집 설정",
    nameEn: "Connector",
    nameKo: "수집 설정",
    route: "/connector",
    ordinal: 1,
    visible: false,
    emoji: "🎰",
  },
  {
    id: 8,
    topId: 4,
    code: "PARSER",
    name: "원본 로그 파서 원본 로그 파서 원본 로그 파서 원본 로그 파서",
    nameEn: "Parser",
    nameKo: "원본 로그 파서",
    route: "/parser",
    ordinal: 2,
    visible: false,
    emoji: "🎪",
  },
  {
    id: 46,
    topId: 4,
    code: "NORMALIZER",
    name: "정규화 파서",
    nameEn: "Normalizer",
    nameKo: "정규화 파서",
    route: "/normalizer",
    ordinal: 3,
    visible: true,
    emoji: "🚌",
  },
  {
    id: 9,
    topId: 4,
    code: "SCHEMA",
    name: "정규화",
    nameEn: "Schema",
    nameKo: "정규화",
    route: "/schema",
    ordinal: 4,
    visible: true,
    emoji: "🚗",
  },

  {
    id: 11,
    topId: 4,
    code: "EXTRACTOR_MODEL",
    name: "추출 모델",
    nameEn: "Extractor Model",
    nameKo: "추출 모델",
    route: "/extractor-model",
    ordinal: 6,
    visible: false,
    emoji: "🚖",
  },
  {
    id: 44,
    topId: 5,
    code: "EVENT_SUMMARY",
    name: "탐지 현황",
    nameEn: "Event Summary",
    nameKo: "탐지 현황",
    route: "/event-summary",
    ordinal: 0,
    visible: false,
    emoji: "🥁",
  },
];

const Container = styled.section`
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
`;

const Selector = () => {
  return (
    <Container>
      <List data={data} />
    </Container>
  );
};

export default Selector;
