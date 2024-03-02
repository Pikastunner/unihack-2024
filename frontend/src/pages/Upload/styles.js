import styled from "styled-components";

const PageContainer = styled.div`
  padding: 50px;
  height: 100%;
`;

const UploadContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UploadWrapper = styled.div`
  height: 300px;
  width: 800px;
  display: flex;
  border: 3px solid #222222;
  border-radius: 10px;
  border-style: dashed;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-spacing: 2px;
`;


export default {
  PageContainer,
  UploadContainer,
  UploadWrapper
}