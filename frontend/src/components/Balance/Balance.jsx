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
  InputText,
} from './Balance.styled';
import report from '../../images/report.svg';
import { getAllTransaction } from '../../redux/transactions/transactionSelectors';
import { incrementByAmount } from '../../redux/transactions/transactionSlice';

export const Balance = () => {
  const [value, setValue] = useState('00.00');
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

  // const getVal = text => {
  //   if (text.length === 7) return `${text.slice(0, 1)} ${text.slice(1)}`;
  //   if (text.length === 8) return `${text.slice(0, 2)} ${text.slice(2)}`;
  //   if (text.length === 9) return `${text.slice(0, 3)} ${text.slice(3)}`;
  // };

  return (
    <>
      <BalanceWrapper>
        <BalanceText>Баланс:</BalanceText>
        <LabelWrapper>
          {balance > 0 ? (
            <>
              <BalanceInput
                type="text"
                readOnly
                value={value}
                onChange={handleInputChange}
                maxLength="20"
                autoComplete="off"
              />
              <InputText>UAH</InputText>
            </>
          ) : (
            <>
              <BalanceInput
                type="text"
                value={value}
                onChange={handleInputChange}
                maxLength="20"
                autoComplete="off"
              />
              <InputText>UAH</InputText>
            </>
          )}
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
    </>
  );
};

export default Balance;
