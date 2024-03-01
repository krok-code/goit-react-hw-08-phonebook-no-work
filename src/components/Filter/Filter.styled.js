import styled from '@emotion/styled';

export const FilterCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;

export const Input = styled.input`
  height: 25px;
  border-radius: ${props => props.theme.spacing(2)};
  margin-top: 15px;
  cursor: pointer;
`;
