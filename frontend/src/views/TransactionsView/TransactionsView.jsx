import Media from 'react-media';

import {BtnBackspace} from '../../components/';
import { Container } from '../../components';
import {ExpenseIncome} from '../../components';

import { Background, TransactionWrrap } from './TransactionsView.styled';


const TransactionsView = () => {
    return (
        <Media queries={{
          small: "(max-width: 767px)",
          medium: "(min-width: 768px) and (max-width: 1279px)",
          large: "(min-width: 1280px)"
        }}>
        {matches => (
            <Container matches={matches}>
                <Background  matches={matches}/>
                {matches.small && <BtnBackspace />}
                <TransactionWrrap>
                        
                    {/* BALANSE COMPONENT */}
                        
                    <ExpenseIncome/>
                        
                </TransactionWrrap>
            </Container>
        )}
    </Media>
    );
};

export default TransactionsView;