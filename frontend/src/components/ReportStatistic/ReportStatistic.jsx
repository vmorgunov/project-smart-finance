import React   from 'react';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';

import { Container, Title, Span, SpanRed, Line } from './ReportStatistic.styled';

export const ReportStatistic = () => {
//   function numberWithCommas(x) {
//   return parseFloat(x)
//     .toFixed(2)
//     .toString()
//     .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ' ');
// }
//   const dispatch = useDispatch();
//   const costs = useSelector();
//   const income = useSelector();

  // useEffect(() => {
  //   dispatch();
  //   dispatch();
  // }, [dispatch]);

  return (
    <Container>
      <Title>Расходы:{<SpanRed>-{} грн</SpanRed>} </Title>
        <Line />
      <Title>Доходы:{<Span>+ {} грн</Span>} </Title>
    </Container>    
  );
};


