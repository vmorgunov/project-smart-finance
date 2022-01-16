import React from 'react';

import {
    ReportContainer,
    ReportNav,
    ReportComponent,
    ReportCostsAndIncome,
    ReportCostsOrIncomeList,
    ReportGraph
} from './ReportView.styled'

function ReportView() {
return (
    <ReportContainer>
        <ReportNav>
            <ReportComponent> <button>23. "Вернуться на главную"</button> </ReportComponent>

            <ReportComponent>7.  "Баланс: 55 000.00 UAH" </ReportComponent>
        
            <ReportComponent> 24.  "Текущий период " <br />ноябрь 2019</ReportComponent>
        </ReportNav>

        <ReportCostsAndIncome>25.  "Расходы: - 18 000.00 грн. / Доходы: + 45 000.00 грн."</ReportCostsAndIncome>

        <ReportCostsOrIncomeList>
            <div>28. Стрелки в секциях "Расходы" и "Доходы"</div>
            <div>26. Разметка и стили секции "Расходы" / 27. Разметка и стили секции "Доходы"</div>
        </ReportCostsOrIncomeList>

            <ReportGraph>29. График</ReportGraph>
    
    </ReportContainer> 
);
}

export default ReportView;