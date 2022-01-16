import React from 'react';

import { Container, Title, Span, SpanRed, Line } from './ReportStatistic.styled';

export const ReportStatistic = ({ costs, income }) => {
  let totalCosts = 0;
  let totalIncome = 0;

  if (costs) {
    const sum = costs.reduce((acc, amount) => {
      return acc + amount.total;
    }, 0);
    totalCosts = sum;
  }

  if (income) {
    const sum = income.reduce((acc, amount) => {
      return acc + amount.total;
    }, 0);
    totalIncome = sum;
  }

  return (
    <Container>
      <Title>Costs:{<SpanRed>- {totalCosts} UAN</SpanRed>} </Title>
      <Line />
      <Title>Income:{<Span>+ {totalIncome} UAN</Span>} </Title>
    </Container>
  );
};


