import styled from 'styled-components';

export const PageContainer = styled.div`
  background-color: #f0f0f0;
  height: 100vh; 
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: max-content;
  margin: auto;
`;

export const GameCard = styled.div`
  width: 100%;
  max-width: 600px;
  margin-top: 20px;
  padding: 50px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const QuestionLength = styled.div`
  background-color: #a569bd;
  width: fit-content;
  padding: 6px 10px;
  box-shadow: 0 4px 0 rgb(75, 4, 85);
  border-radius: 0.375rem;
  margin-bottom: 20px;
`;

export const InnerText = styled.div`
  background-color: #fff;
  border-radius: 0.375rem;
  box-shadow: inset 2px 2px 2px rgba(173, 173, 173, 0.5);
  padding: 0 10px;
  font-weight: 600;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const flex = styled.div`
  display: flex;
  align-items: baseline;
`;
const vflex = styled.div`
  display: flex;
`;

const fullFlex = styled(flex)`
  justify-content: space-between;
  width: 100%;
`;

const zeroFlex = styled(flex)`
  justify-content: center;
`;
const rowg1 = styled(zeroFlex)`
  gap: 1rem;
`;

export const col = styled(vflex)`
  flex-direction: column;
  width: 100%;
`;

export const colg1 = styled(col)`
  gap: 1rem;
`;

export const colg2 = styled(col)`
  gap: 2rem;
  height: 100vh;
`;

export const HStack = { flex, fullFlex, zeroFlex, rowg1 };

export const VStack = { col, colg2, colg1 };

export const StyledFiller = styled.div`
  height: 10rem;
`;