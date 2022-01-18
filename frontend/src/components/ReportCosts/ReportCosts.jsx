import React from 'react';

import ReportList from '../ReportList/ReportList';

import prevArrowIcon from '../../images/prev-arrow.svg';
import nextArrowIcon from '../../images/next-arrow.svg';
import { ArrowIcon, ButtonSwitch, Switch, SwitchData } from '../MonthPicker/MonthPicker.styled';
import {ReportСategoryContainer} from './ReportCosts.styled'

const ReportCosts = () => {
    return (
        <ReportСategoryContainer>
            <Switch>
                <ButtonSwitch type="button" ><ArrowIcon src={prevArrowIcon} alt="prevArrowIcon"/></ButtonSwitch>
                <SwitchData>Расходы</SwitchData>
                <ButtonSwitch type="button" ><ArrowIcon src={nextArrowIcon} alt="nextArrowIcon"/></ButtonSwitch>
            </Switch>
            <ReportList/>
        </ReportСategoryContainer>
    )
}

export default ReportCosts;