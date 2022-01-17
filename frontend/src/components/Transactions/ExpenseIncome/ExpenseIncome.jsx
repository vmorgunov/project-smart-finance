import ButtonTab from "../ButtonTab/ButtonTab";
import Form from "../Form/Form";
import { ExpenseIncomeWrrap } from "./ExpenseIncome.styled";

const ExpenseIncome = () => {
    return (
        <ExpenseIncomeWrrap>
            <ButtonTab
                leftPos={'0'}
                topPos={'-40'}
                labelColorText={true}
                labelColorBG={true}
                text={'расход'}
            />
            <ButtonTab
                leftPos={'138'}
                topPos={'-40'}
                labelColorText={false}
                labelColorBG={false}
                text={'доход'}
            />
            <Form />
        </ExpenseIncomeWrrap>
    );
};

export default ExpenseIncome;