import React from 'react';

import { Container, Title, Span, SpanRed, Line } from './ReportStatistic.styled';

export const ReportStatistic = ({ costs, income }) => {
  
  return (
    <Container>
      <Title>Расходы:{<SpanRed>- {costs} грн.</SpanRed>} </Title>
      <Line />
      <Title>Доходы:{<Span>+ {income} грн.</Span>} </Title>
    </Container>
  );
};


