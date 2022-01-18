import React from 'react';

import { ReportButton } from '../../components/ReportButton'
// import Balance from '../../components/Balance/Balance';
import MonthPicker from '../../components/MonthPicker/MonthPicker';
import Reports from '../../components/Reports/Reports';
import { ReportStatistic } from '../../components/ReportStatistic'

import {
    ReportContainer,
    ReportNav,
    ReportComponent,
    ReportGraph
} from './ReportView.styled'

const ReportView = () => {
    // const [costs, setCosts] = useState([]);
    // const [income, setIncome] = useState([]);
    return (
        <ReportContainer>
            <ReportNav>
                <ReportButton />
                <ReportComponent>7.  "Баланс: 55 000.00 UAH" </ReportComponent>
                {/* <Balance />. */}
                <MonthPicker />
            </ReportNav>

            <ReportStatistic>
                {/* costs={costs}
            income={income} */}
            </ReportStatistic>

            <Reports/>
            <ReportGraph>29. График</ReportGraph>
        </ReportContainer>
    );
}

export default ReportView;