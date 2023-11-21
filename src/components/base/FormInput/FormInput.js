
import styled from 'styled-components';

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StyledCard = styled.form`
  background: ${({theme})=> theme.secondaryBgColor};
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
`;

export const FormTitle = styled.h2`
  text-align: center;
  color: #333;
  color: ${({ theme }) => theme.textColor};
`;

export const FormGroup = styled.div`
  margin-bottom: 16px;
`;


export const StyledFormInput = styled.input`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.primaryBgColor};
`;

