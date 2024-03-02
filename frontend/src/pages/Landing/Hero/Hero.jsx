import S from './styles';
import Wave from 'assets/wave.svg';
import Logo from 'assets/slidengo.svg';
import RightArrow from 'assets/arrow-right.svg';
import Splashart from 'assets/presentation.svg'

export default function Hero() {
  return (
    <> 
      <S.Container> 
        <S.Wrapper>
          <S.Left>
            <S.Title>
              Lecture slides for<br></br>
              <b>everyone.</b>
            </S.Title>
            <S.CTA>
              <p>Translate a slide, it's free</p>
              <S.Arrow src={RightArrow} />
            </S.CTA>
          </S.Left>
          <S.Right>
            <S.Splashart src={Splashart}/>
          </S.Right>
        </S.Wrapper>
      </S.Container>
    </>
  )
}
