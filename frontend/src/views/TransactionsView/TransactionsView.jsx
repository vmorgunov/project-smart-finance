import Media from 'react-media';

import { BtnBackspace } from '../../components/';
import { Container } from '../../components';
import { ExpenseIncome } from '../../components';
import { Balance } from '../../components';

import { Background, TransactionWrrap } from './TransactionsView.styled';

const TransactionsView = () => {
  return (
    <>
      <Balance />
      <Media
        queries={{
          small: '(max-width: 767px)',
          medium: '(min-width: 768px) and (max-width: 1279px)',
          large: '(min-width: 1280px)',
        }}
      >
        {matches => (
          <Container matches={matches}>
            <Background matches={matches} />
            {matches.small && <BtnBackspace />}
            <TransactionWrrap>
              <ExpenseIncome />
            </TransactionWrrap>
          </Container>
        )}
      </Media>
    </>
  );
};

export default TransactionsView;
