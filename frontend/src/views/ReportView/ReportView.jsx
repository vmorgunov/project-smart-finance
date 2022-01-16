import React from 'react';

import MonthPicker from '../../components/MonthPicker/MonthPicker';
import { ReportStatistic } from '../../components/ReportStatistic'
import {
    ReportContainer,
    ReportNav,
    ReportComponent,
    ReportCostsOrIncomeList,
    ReportGraph
} from './ReportView.styled'

const ReportView = () => {
    // const [costs, setCosts] = useState([]);
    // const [income, setIncome] = useState([]);
    return (
        <ReportContainer>
            <ReportNav>
                <ReportComponent> <button>23. "Вернуться на главную"</button> </ReportComponent>

                <ReportComponent>7.  "Баланс: 55 000.00 UAH" </ReportComponent>

                <MonthPicker />

            </ReportNav>

            <ReportStatistic>
                {/* costs={costs}
            income={income} */}
            </ReportStatistic>

            <ReportCostsOrIncomeList>
                <div>28. Стрелки в секциях "Расходы" и "Доходы"</div>
                <div>26. Разметка и стили секции "Расходы" / 27. Разметка и стили секции "Доходы"</div>
            </ReportCostsOrIncomeList>

            <ReportGraph>29. График</ReportGraph>

        </ReportContainer>
    );
}

export default ReportView;