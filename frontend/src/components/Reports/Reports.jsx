import { React} from 'react';

import ReportCosts from '../ReportCosts/ReportCosts';
import ReportIncome from '../ReportIncome/ReportIncome';

import {ReportsContainer} from './Reports.styled'

const Reports = () => {
    return (
        <ReportsContainer>
            <ReportCosts />
            <ReportIncome />
        </ReportsContainer>
    )
}

export default Reports;