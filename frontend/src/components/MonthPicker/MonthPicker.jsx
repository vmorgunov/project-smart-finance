import React from "react";

import {
    CurrentPeriodTitle,
    Switch ,
    ButtonSwitch,
    SwitchData,
    ArrowIcon,
    Container
} from './MonthPicker.styled'

import prevArrowIcon from '../../images/prev-arrow.svg';
import nextArrowIcon from '../../images/next-arrow.svg';

export const MonthPicker = () => {
    return (
        <Container>       
            <CurrentPeriodTitle>Текущий период:</CurrentPeriodTitle>
            <Switch>
                <ButtonSwitch type="button" ><ArrowIcon src={prevArrowIcon} alt="prevArrowIcon"/></ButtonSwitch>
                <SwitchData>ноябрь 2019</SwitchData>
                <ButtonSwitch type="button" ><ArrowIcon src={nextArrowIcon} alt="nextArrowIcon"/></ButtonSwitch>
            </Switch>       
        </Container>
    )
}

