import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { getAllTransaction } from '../../redux/transactions/transactionSelectors';
import { incrementByAmount } from '../../redux/transactions/transactionSlice';

export const Balance = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const balance = useSelector(getAllTransaction);
  const onClick = e => {
    e.preventDefault();
    dispatch(incrementByAmount(value));
  };

  useEffect(() => {
    setValue(balance);
  }, [balance]);

  const handleInputChange = event => {
    setValue(event.target.value);
  };

  return (
    <BalanceWrapper>
      <BalanceText>Баланс:</BalanceText>
      <LabelWrapper>
        <BalanceInput
          type="numeric"
          value={value}
          onChange={handleInputChange}
          maxLength="10"
          placeholder="00.00 UAH"
          autoComplete="off"
        />
        {balance > 0 ? (
          <BalanceConfirm disabled="disabled">Подтвердить</BalanceConfirm>
        ) : (
          <BalanceConfirm onClick={onClick} type="submit">
            Подтвердить
          </BalanceConfirm>
        )}
      </LabelWrapper>
      <BalanceNavLink to="/report">
        Перейти к отчетам
        <ImgReport src={report} alt="Отчеты" />
      </BalanceNavLink>
    </BalanceWrapper>
  );
};

export default Balance;
