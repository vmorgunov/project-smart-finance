import React from 'react';
import {
  BalanceWrapper,
  BalanceText,
  BalanceInput,
  BalanceConfirm,
  BalanceNavLink,
  ImgReport,
  LabelWrapper,
} from './Balance.styled';
import report from '../../images/report.svg';

export const Balance = () => {
  return (
    <BalanceWrapper>
      <BalanceText>Баланс:</BalanceText>
      <LabelWrapper>
        <BalanceInput
          type="text"
          name="name"
          maxLength="10"
          placeholder="00.00   UAH"
          autoComplete="off"
        />
        <BalanceConfirm type="submit">Подтвердить</BalanceConfirm>
      </LabelWrapper>
      <BalanceNavLink to="/report">
        Перейти к отчетам
        <ImgReport src={report} alt="Отчеты" />
      </BalanceNavLink>
    </BalanceWrapper>
  );
};

export default Balance;
