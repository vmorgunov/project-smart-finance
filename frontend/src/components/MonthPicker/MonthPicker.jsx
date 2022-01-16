import React from "react";

import {
    CurrentPeriodTitle,
    CurrentPickeredMonth ,
    ButtonSwitch,
    CurrentPeriodData,
    ArrowIcon
} from './MonthPicker.styled'

import prevArrowIcon from '../../images/prev-arrow.svg';
import nextArrowIcon from '../../images/next-arrow.svg';

function MonthPicker() {
    return (
        <div>
            <CurrentPeriodTitle>Текущий период:</CurrentPeriodTitle>
            <CurrentPickeredMonth>
                <ButtonSwitch type="button" ><ArrowIcon src={prevArrowIcon} alt="prevArrowIcon"/></ButtonSwitch>
                <CurrentPeriodData>ноябрь 2019</CurrentPeriodData>
                <ButtonSwitch type="button" ><ArrowIcon src={nextArrowIcon} alt="nextArrowIcon"/></ButtonSwitch>
            </CurrentPickeredMonth>
        </div>
        
    )
}

export default MonthPicker;