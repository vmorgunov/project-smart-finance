import React from 'react';

import ReportCosts from '../ReportCosts/ReportCosts';

import {ReportsContainer} from './Reports.styled'

const Reports = () => {
    return (
        <ReportsContainer>
            <ReportCosts/>
        </ReportsContainer>
    )
}

export default Reports;