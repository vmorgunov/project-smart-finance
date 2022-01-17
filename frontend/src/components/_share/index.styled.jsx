import styled from '@emotion/styled';

export const Button = styled.button`
  margin: 0 7.5px;
  width: 125px;
  height: 44px;

  font-weight: 700;
  text-transform: uppercase;
  border-radius: 16px;

  border: 2px solid #f5f6fb;
  transition: 0.3s ease-in-out;
  color: #52555f;
  background-color: transparent;

  &:hover {
    border: none;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    color: white;
    background-color: #fd812d;
  }
`;