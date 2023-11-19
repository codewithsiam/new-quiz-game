import styled from 'styled-components';

export const Button = styled.button`
  background-color: #4CAF50;
  border: 0;
  border-radius: 0.375rem;
  padding: 9px 20px;
  color: white;
  
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4996ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
`;

export const PrimaryButton = styled.button`
  background-color: ${(props) => (props.$selected ? '#66ac05' : '#a9de5f')}; 
  box-shadow: ${(props) =>
        props.$selected ? '0 2px 4px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1)' : '0 5px 0 #60a104'};
  border: none;
  border-radius: 0.375rem;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  padding: 10px 25px;
  transition:
    background-color 0.3s,
    transform 0.3s,
    box-shadow 0.3s;

  transform: ${(props) => (props.$selected ? 'translateY(5px)' : 'translateY(0)')};

  &:hover {
    background-color: #66ac05;
  }

  &:active {
    box-shadow: ${(props) => (props.$selected ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.2)')};
    transform: translateY(5px);
  }
`;
