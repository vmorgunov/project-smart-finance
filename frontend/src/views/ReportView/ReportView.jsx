import React from 'react';
import { useMediaQuery } from 'react-responsive'
import { ReportButton } from '../../components'
// import {Balance} from '../../components'
import { MonthPicker }   from '../../components';
import { Reports } from '../../components';
import { ReportStatistic } from '../../components';

// import {ModalOutMobile} from '../../components' 
// import { ModalOut } from '../../components';
import {
    ReportContainer,
    ReportHeader,
    ReportGraph
} from './ReportView.styled'

export const ReportView = () => {
const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 767 });
const isTabletOrDesktop = useMediaQuery({ minWidth: 768 });
    
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
                        <MonthPicker />
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

