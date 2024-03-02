import Logo from 'assets/slidengo.svg';

import S from './styles';

export default function Navbar() {
  return (
    <S.Navbar>
      <S.LogoContainer>
        <S.Logo src={Logo}/>
        <S.BrandLabel>SlideN<span>Go</span></S.BrandLabel>
      </S.LogoContainer>
    </S.Navbar>
  )
}
