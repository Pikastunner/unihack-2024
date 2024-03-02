import Logo from 'assets/slidengo.svg';

import S from './styles';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <S.Navbar>
      <Link to="/">
        <S.LogoContainer>
          <S.Logo src={Logo}/>
          <S.BrandLabel>SlideN<span>Go</span></S.BrandLabel>
        </S.LogoContainer>
      </Link>
    </S.Navbar>
  )
}
