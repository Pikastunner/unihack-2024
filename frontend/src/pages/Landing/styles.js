import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const WaveWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: -10vw;
`;

const Wave = styled.img`
  width: 100%;
`;

const ContentWrapper = styled.div`
  padding: 50px;
`;

export default {
  Container,
  ContentWrapper,
  WaveWrapper,
  Wave
}