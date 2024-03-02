import styled from "styled-components";

const StepsContainer = styled.div`
  padding: 0px 100px;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #000;
  margin-top: -50px;
  gap: 2rem;
  width: 100%;
  background: linear-gradient(#FEEEF3, #F3E5D8);
`;

const Title = styled.h2`
  font-size: 2em;
`;

const Tab = styled.span`
  background: #2D261F;
  color: #ffffff;
  padding: 10px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-weight: 700;
  }
`;

const StepWrapper = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-around;
`;

const Step = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  background: #F3E5D8;
  color: #222222;
  padding: 30px;
  border-radius: 30px;
  gap: 1rem;
`;

const StepContent = styled.div`
  display: flex; 
  flex-direction: column;
`;

export default {
  StepsContainer,
  Tab,
  Title,
  StepWrapper,
  Step,
  StepContent
}