import Hero from "./Hero"
import Wave from 'assets/wave.svg';

import S from './styles';
import Navbar from "pages/Navbar";

export default function Landing() {
  return (
    <S.Container>
      <S.ContentWrapper>
        <Navbar />
        <Hero />
      </S.ContentWrapper>
      <S.WaveWrapper>
        <S.Wave src={Wave} />
      </S.WaveWrapper>
    </S.Container>
  )
}
