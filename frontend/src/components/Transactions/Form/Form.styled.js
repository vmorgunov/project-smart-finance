import styled from "@emotion/styled";

export const FormStyle = styled.form`
    /* mobile
    display: flex;
    flex-direction: column;
    justify-content: center; */

    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const DivCalc = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: ${({height}) => `${height}px`};
    width: ${({width}) => `${width}px`};
    
    border: 2px solid var(--bg-color);
    border-top-right-radius: 22px;
    border-bottom-right-radius: 22px;
    border-left: 0;

    box-sizing: border-box;
`
export const TransactionValueWrrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin: ${({margin}) => margin};
`

export const DateWrrap = styled.div`
    width: 104px;
    height: 44px;

    margin: 0 20px 0 0;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
`

export const DateSend = styled.span`
    margin-left: 8px;
`
