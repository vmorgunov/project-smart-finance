import styled from '@emotion/styled';
import close from '../../images/close.svg'

export const Backdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  margin: 50px 0 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(5px);
`;
export const CloseIcon = styled.svg`
  background-image: url(${close});
  background-repeat: no-repeat;
  
`;
export const CloseButton = styled.button`
  position: absolute;
  width: 12px;
  height: 12px;
  top: 20px;
  right: 20px;
  cursor: pointer;
  border: none;
  background-color: inherit;
  &:hover {
    cursor: pointer;   
`;

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  flex-flow: column;
  justify-content: center;

  width: 310px;
  height: 154px;

  border-radius: 30px;
  background-color: var(--bg-text-color);
  box-shadow: 10px 10px 30px var(--text-color-1);
`;

export const Title = styled.h2`
  padding: 0 0 20px;

  font-weight: 500;
  font-size: 14px;
  line-height: 16, 41px;
  font-family: Roboto;
  letter-spacing: 0.02em;

  color: var(--text-color-3);
`;

export const Button = styled.button`
  margin: 0 7.5px;
  width: 100px;
  height: 36px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 13px;

  border: 2px solid #f5f6fb;
  transition: 0.3s ease-in-out;
  background-color: transparent;

  &:hover {
    border: none;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    color: var(--bg-color);
    background-color: var(--acent-color);
  }
`;

export const ButtonBox = styled.div`
`