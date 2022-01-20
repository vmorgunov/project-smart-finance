import {React, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { ReportButton, MonthPicker, Reports, ReportStatistic } from '../../components';
// import {Balance} from '../../components'

import 'moment/locale/ru';
import moment from 'moment';

import {
    ReportContainer,
    ReportHeader,
    ReportGraph
} from './ReportView.styled'

export const ReportView = () => {
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 767 });
    const isTabletOrDesktop = useMediaQuery({ minWidth: 768 });
    
    const [newDate, setNewDate] = useState(moment(new Date()));
    const [dateMonth, setDateMonth] = useState(moment(new Date()).format('MM'));
    const [dateYears, setDateYears] = useState(moment(new Date()).format('YYYY'));

    const switchMonthLeft = () => {
        setDateMonth(newDate.add(-1, 'month').format('MM'));
        if (dateMonth === '01') {
            setDateYears(newDate.add('year').format('YYYY'));
        }
    };

    const switchMonthRight = () => {
        setDateMonth(newDate.add(1, 'month').format('MM'));
        if (dateMonth === '12') {
            setDateYears(newDate.add('year').format('YYYY'));
        }
    };
    
    return (
        <>
            <ReportContainer> 
                {isMobile &&
                    <>
                        <ReportButton />                   
                        <MonthPicker />
                    </>
                }
                {isTabletOrDesktop &&
                    <ReportHeader>

                        <ReportButton />

                        {/* <Balance/> */}

                        <MonthPicker
                            switchMonthLeft={switchMonthLeft}
                            switchMonthRight={switchMonthRight}
                            dateMonth={dateMonth}
                            dateYears={dateYears}
                        />

                    </ReportHeader>
                }
                      {/* {isTabletOrDesktop && <ModalOut />}
                      {isMobile && <ModalOutMobile/>} */}
                <ReportStatistic>
                </ReportStatistic>

                <Reports />
                
                <ReportGraph>29. График</ReportGraph>
            </ReportContainer>
        </>
    );
}

