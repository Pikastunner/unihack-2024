import styled from "styled-components";

const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 2em;
`;

const StepWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Step = styled.div`
  width: fit-content;
  height: 100px;
  background: #F3E5D8;
  color: #222222;
`;

const StepContent = styled.div`
  display: flex; 
  flex-direction: column;
`;

export default {
  StepsContainer,
  Title,
  StepWrapper,
  Step,
  StepContent
}