import React from 'react';
import { ReportButton } from '../../components/ReportButton'
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
                <ReportComponent>  
                    <ReportButton />
                </ReportComponent>

                <ReportComponent>7.  "Баланс: 55 000.00 UAH" </ReportComponent>

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