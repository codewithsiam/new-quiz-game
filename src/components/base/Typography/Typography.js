// Typography.js
import styled from 'styled-components';

export const Heading1 = styled.h1`
  text-align: center;
  padding: 3rem 1rem 1rem 1rem;
`;

export const Heading2 = styled.h2`
  text-align: center;
  padding: 2rem 1rem 1rem 1rem;
  color: ${({theme}) => theme.textColor}
`;


export const Paragraph = styled.p`
  margin-bottom: 1rem;
  line-height: 1.5;
  color: ${({theme}) => theme.textColor};
`;

export const Label = styled.label`
   display: block;
  margin-bottom: 8px;
  color: ${({theme}) => theme.textColor};
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;

export const StyledHeader = styled.header`
padding: 0.5rem 2rem;
background-color: ${({theme}) => theme.secondaryBgColor};
`