import React from "react";
import { useMediaQuery } from "react-responsive";
import {
    Title,
    TitleMobile,
    Switch ,
    ButtonSwitch,
    SwitchData,
    ArrowIcon,
    Container
} from './MonthPicker.styled'

import prevArrowIcon from '../../images/prev-arrow.svg';
import nextArrowIcon from '../../images/next-arrow.svg';

export const MonthPicker = () => {
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 767 });
    const isTabletOrDesktop = useMediaQuery({minWidth: 768})
    return (
        <>
        
            {isMobile &&
            <Container>
            <TitleMobile>Текущий период:</TitleMobile>
            <Switch>
                <ButtonSwitch type="button" ><ArrowIcon src={prevArrowIcon} alt="prevArrowIcon" /></ButtonSwitch>
                <SwitchData>ноябрь 2019</SwitchData>
                <ButtonSwitch type="button" ><ArrowIcon src={nextArrowIcon} alt="nextArrowIcon" /></ButtonSwitch>
            </Switch>
           </Container>}
            {isTabletOrDesktop &&
            <Container>
                <Title>Текущий период:</Title>
            <Switch>
                <ButtonSwitch type="button" ><ArrowIcon src={prevArrowIcon} alt="prevArrowIcon" /></ButtonSwitch>
                <SwitchData>ноябрь 2019</SwitchData>
                <ButtonSwitch type="button" ><ArrowIcon src={nextArrowIcon} alt="nextArrowIcon" /></ButtonSwitch>
                </Switch>
                </Container>
            }
        
    </>
    )
}

