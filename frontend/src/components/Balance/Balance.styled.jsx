import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const BalanceWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 110px 40px 442px;
  background-color: var(--bg-color);
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  @media (max-width: 768px) {
    padding: 40px 52px 60px 82px;
  }
  @media (max-width: 468px) {
    padding: 30px 25px 294px 25px;
    flex-direction: column;
  }
`;

export const BalanceText = styled.span`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.02em;
  color: var(--text-color-2);
  @media (max-width: 468px) {
    display: block;
    padding-bottom: 10px;
  }
`;

export const BalanceInput = styled.input`
  width: 125px;
  background-color: var(--bg-color);
  margin-left: 20px;
  margin-right: 15px;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 16px;
  padding: 15px 20px 15px 20px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 13px;
  line-height: 14px;
  text-align: left;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--text-color);
  cursor: pointer;
  @media (max-width: 468px) {
    margin: 0;
    border-radius: 22px 0px 0px 22px;
    padding: 15px 19px 15px 17px;
  }
`;

export const BalanceConfirm = styled.button`
  padding: 15px 18px;
  border: 2px solid #ffffff;
  background-color: var(--bg-color);
  box-sizing: border-box;
  border-radius: 16px;
  font-family: 'Roboto';
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  margin-right: 205px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: rgba(82, 85, 95, 0.7);
  @media (max-width: 768px) {
    margin-right: 110px;
  }
  @media (max-width: 468px) {
    display: block;
    margin: 0;
    padding: 15px 19px 15px 17px;
    border: 2px solid #ffffff;
    box-sizing: border-box;
    border-radius: 0px 22px 22px 0px;
  }
`;

export const BalanceNavLink = styled(NavLink)`
  align-items: center;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  letter-spacing: 0.04em;
  color: var(--text-color-2);
`;

export const ImgReport = styled.img`
  display: inline-block;
  margin-left: 15px;
`;

export const LabelWrapper = styled.div`
  @media (max-width: 468px) {
    display: flex;
    margin-bottom: 40px;
  }
`;
