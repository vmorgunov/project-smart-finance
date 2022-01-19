import { React } from 'react';
// import { useState } from 'react';

import ReportCosts from '../ReportCosts/ReportCosts';
import ReportIncome from '../ReportIncome/ReportIncome';

import { ReportsContainer } from './Reports.styled'

import prevArrowIcon from '../../images/prev-arrow.svg';
import nextArrowIcon from '../../images/next-arrow.svg';
import { ArrowIcon, ButtonSwitch, Switch, SwitchData } from '../MonthPicker/MonthPicker.styled';

export const Reports = () => {

    const clickOnSwitch = () => {
        console.log(`click`);
    }
    return (
        <ReportsContainer>
            <Switch>
                <ButtonSwitch type="button" onClick={clickOnSwitch}><ArrowIcon src={prevArrowIcon} alt="prevArrowIcon"/></ButtonSwitch>
                
                <SwitchData>Доходы</SwitchData>
                
                <ButtonSwitch type="button" onClick={clickOnSwitch}><ArrowIcon src={nextArrowIcon} alt="nextArrowIcon"/></ButtonSwitch>
            </Switch>
            <ReportIncome />
            <ReportCosts />
        </ReportsContainer>
    )
}

