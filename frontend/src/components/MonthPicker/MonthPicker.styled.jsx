import styled from '@emotion/styled';

export const CurrentPeriodTitle = styled.div`
margin-bottom: 5px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 1.2;

text-align: center;
letter-spacing: 0.04em;

color: rgba(82, 85, 95, 0.7);
`;

export const CurrentPickeredMonth = styled.div`
display: flex;
justify-content: space-between;
`;

export const ButtonSwitch = styled.button`
display: flex;
align-items: center;
text-align: center;
/* padding: 0; */
border: none;
background-color: #fff;
cursor: pointer;

`;

export const ArrowIcon = styled.img`
position: absolute;
width: 4px;
height: 10px;
&:hover {
    width: 6px;
    height: 12px;
}
`;

export const CurrentPeriodData = styled.span`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 1.14;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.02em;
text-transform: uppercase;

margin-left: 15px;
margin-right: 15px;
`;