import S from './styles';
import Wave from 'assets/wave.svg';
import Logo from 'assets/slidengo.svg';
import RightArrow from 'assets/arrow-right.svg';
import Splashart from 'assets/presentation.svg'

import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <> 
      <S.Container> 
        <S.Wrapper>
          <S.Left>
            <S.Title>
              Lecture slides for
              <b> everyone.</b>
            </S.Title>
            <Link to={'upload'}>
              <S.CTA>
                <p>Translate a slide, it's free</p>
                <S.Arrow src={RightArrow} />
              </S.CTA>
            </Link>
          </S.Left>
          <S.Right>
            <S.Splashart src={Splashart}/>
          </S.Right>
        </S.Wrapper>
      </S.Container>
    </>
  )
}
