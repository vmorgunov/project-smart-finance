import { useMediaQuery } from 'react-responsive';

import TransactionTable from '../TransactionTable'
import { Summary, TransactioDetailsWrrap, TransactioInfoWrrap } from './TransactioInfo.styled'

const TransactioInfo = ({ type }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
    const isDesctop = useMediaQuery({ minWidth: 1280 });
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const matches = { isMobile, isTablet, isDesctop }
    return (
        <TransactioInfoWrrap matches={matches}>
            <TransactioDetailsWrrap  matches={matches}>
                <TransactionTable />
            </TransactioDetailsWrrap>
            <Summary matches={matches}>{/* КОНТЕЙНЕР ДЛЯ СВОДКИ */}</Summary>
        </TransactioInfoWrrap>
    )
}
export default TransactioInfo
