import React, { useState } from "react";
import DatePicker from "react-datepicker";
import './style.css';

import "react-datepicker/dist/react-datepicker.css";

import { DateSend, DateWrrap, DivCalc, FormStyle, TransactionValueWrrap } from "./Form.styled";
import srcCalc from '../../../images/calculator.svg';
import srcCalendar from '../../../images/calendar.svg';
import Input from '../Input/Input';
import Button from '../Button/Button';

const Form = () => {
    const [cost, setCost] = useState('')
    const [startDate, setStartDate] = useState(new Date());

    // console.log(startDate.getDate(), startDate.getMonth(), startDate.getFullYear());
    return (
        <FormStyle >
            <DateWrrap>
                <img
                    src={srcCalendar}
                    alt="Календарь"
                    width={20}
                    height={20}
                />
                <DateSend>{
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="dd.MM.yyyy"
                        maxDate={new Date()}/>}
                    </DateSend>
            </DateWrrap>
            <Input
                placeholder="Описание товара"
                border={{top: 2, right: 0, bottom: 2, left: 2}}
                borderRadius={{ topLeft: 16, topRight: 0, bottomRight: 0, bottomLeft: 0 }}
                widthInput="287"
                paddingInput={'0px 17px 0px 20px'}
            />
            <Input
                placeholder="Категория товара"
                border={{top: 2, right: 0, bottom: 2, left: 2}}
                borderRadius={{ topLeft: 0, topRight: 0, bottomRight: 0, bottomLeft: 0 }}
                widthInput="188"
                paddingInput={'0px 17px 0px 20px'}
            />
            <TransactionValueWrrap
                margin={'0 27px 0 0'}/* desctop */
            >
                <Input
                    type="text"
                    placeholder="00.00"
                    border={{top: 2, right: 0, bottom: 2, left: 2}}
                    borderRadius={{ topLeft: 0, topRight: 0, bottomRight: 0, bottomLeft: 0 }}
                    widthInput={"75"}
                    paddingInput={'2px'}
                    textAlignInput={'right'}

                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                />
                <DivCalc
                    width={'50'}
                    height={'44'}
                >
                    <img
                        src={srcCalc}
                        alt="Калькулятор"
                        width={20}
                        height={20}
                    />
                </DivCalc> 
            </TransactionValueWrrap>
            <Button
                text={'Ввод'}
                marginButton={'0 15px 0 0'}
            />
            <Button
                text={'Очистить'}
                marginButton={'0'}
            />
        </FormStyle>
        );
};

export default Form;