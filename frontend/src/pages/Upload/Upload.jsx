import Navbar from 'components/Navbar';
import Drop from 'components/Drop';

import S from './styles';

export default function Upload() {
  return (
    <S.PageContainer>
      <Navbar />
      <S.UploadContainer>
        <S.UploadWrapper>
          <Drop />
        </S.UploadWrapper>
      </S.UploadContainer>
    </S.PageContainer>
  )
}

