import S from './styles';
export default function Steps() {
  return (
    <S.StepsContainer>
      <S.StepWrapper>
        <S.Step>
          <p>1</p>
          <S.StepContent>
            <h2>Upload</h2>
            <p>Upload any notes or<br />
            slides, to translate</p>
          </S.StepContent>
        </S.Step>
        <S.Step>
          <p>2</p>
          <S.StepContent>
            <h2>Share</h2>
            <p>Add your own notes, <br />
            and translations!</p>
          </S.StepContent>
        </S.Step>
        <S.Step>
          <p>3</p>
          <S.StepContent>
            <h2>Share</h2>
            <p>Share it with your <br />
            friends!</p>
          </S.StepContent>
        </S.Step>
      </S.StepWrapper>
    </S.StepsContainer>
  )
}
