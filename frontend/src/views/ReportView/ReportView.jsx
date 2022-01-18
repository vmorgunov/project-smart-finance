import React from 'react';
// import { useMediaQuery } from 'react-responsive'
import { ReportButton } from '../../components'
// import Balance from '../../components/Balance/Balance';
import { MonthPicker }   from '../../components';
import { Reports } from '../../components';
import { ReportStatistic } from '../../components';
import {
    ReportContainer,
    ReportHeader,
    ReportComponent,
    ReportGraph
} from './ReportView.styled'

export const ReportView = () => {

// const isMobile = useMediaQuery({ minWidth: 320 });
// const isTablet = useMediaQuery({ minWidth: 768 });
// const isDesktop = useMediaQuery({ minWidth: 1280 });
    
    return (
        <>
            {/* {isTablet && */}
                <ReportContainer>
                    <ReportHeader>
                        <ReportButton />
                        <ReportComponent>7.  "Баланс: 55 000.00 UAH" </ReportComponent>
                        {/* <Balance />. */}
                        <MonthPicker />
                    </ReportHeader>
                      
                    <ReportStatistic>
                        {/* costs={costs}
            income={income} */}
                    </ReportStatistic>
                    <Reports />
                    <ReportGraph>29. График</ReportGraph>
                </ReportContainer>
            {/* } */}
        </>
    );
}

