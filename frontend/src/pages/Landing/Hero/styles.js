import styled from "styled-components";

const Arrow = styled.img`
  width: 10%;
`;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  height: fit-content;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 20px;
`;

const CTA = styled.button`
  width: min-content;
  gap: 1rem;
  border-radius: 10px;
  background-color: #2D261F;
  color: #FFFFFF;
  display: flex;
  padding: 10px 30px;
  align-items: center;

  p {
    font-size: 1em;
    text-wrap: nowrap;
  }

  &:active {
    transform: translateY(2px);
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1.2;
  gap: 1rem;
  align-self: flex-start;
`;

const Logo = styled.img`
  width: 10%;
`;

const Right = styled.div`
  flex: 1;
  margin-top: -50px;
`;

const Title = styled.h2`
  font-size: 2.7em;

  h2 {
    text-wrap: nowrap;
  }

  b {
    background: linear-gradient(75deg, #E99649, #FF5ADB);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Splashart = styled.img`
  width: 100%;
`;

const WaveWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const Wave = styled.img`
  width: 100%;
`;

const Wrapper = styled.div`
  padding: 0px 100px;
  display: flex;
  align-items: center;
`;

export default {
  Arrow,
  Container,
  CTA,
  Logo,
  Splashart,
  Title,
  Left,
  Right,
  Wave,
  WaveWrapper,
  Wrapper
}