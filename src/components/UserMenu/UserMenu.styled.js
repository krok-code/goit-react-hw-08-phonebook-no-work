import styled from '@emotion/styled';

export const Title = styled.h2`
  color: white;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  margin-left: 20px;
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  letter-spacing: 4px;
  background: transparent;
  border-radius: 18px;
  :hover {
    background: #03e9f4;
    border-radius: 18px;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 100px #03e9f4;
  }
`;
