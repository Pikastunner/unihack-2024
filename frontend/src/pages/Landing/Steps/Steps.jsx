import S from './styles';
export default function Steps() {
  return (
    <S.StepsContainer>
      <S.Title>Our 3 easy steps</S.Title>
      <S.StepWrapper>
        <S.Step>
          <S.Tab><p>1</p></S.Tab>
          <S.StepContent>
            <h2>Upload</h2>
            <p>Upload any notes or<br />
            slides, to translate</p>
          </S.StepContent>
        </S.Step>
        <S.Step>
          <S.Tab><p>2</p></S.Tab>
          <S.StepContent>
            <h2>Annotate</h2>
            <p>Add your own notes, <br />
            and translations!</p>
          </S.StepContent>
        </S.Step>
        <S.Step>
          <S.Tab><p>3</p></S.Tab>
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
