import React from "react";

import {
    CurrentPeriodTitle,
    Switch ,
    ButtonSwitch,
    SwitchData,
    ArrowIcon
} from './MonthPicker.styled'

import prevArrowIcon from '../../images/prev-arrow.svg';
import nextArrowIcon from '../../images/next-arrow.svg';

function MonthPicker() {
    return (
        <div>
            <CurrentPeriodTitle>Текущий период:</CurrentPeriodTitle>
            <Switch>
                <ButtonSwitch type="button" ><ArrowIcon src={prevArrowIcon} alt="prevArrowIcon"/></ButtonSwitch>
                <SwitchData>ноябрь 2019</SwitchData>
                <ButtonSwitch type="button" ><ArrowIcon src={nextArrowIcon} alt="nextArrowIcon"/></ButtonSwitch>
            </Switch>
        </div>
        
    )
}

export default MonthPicker;