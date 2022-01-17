import styled from "@emotion/styled";

export const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index:-1;

    background-color: var(--bg-color);

    border-bottom-left-radius: ${({matches}) => matches.small ? '100px' : matches.medium ? '100px' : matches.large && '160px'};
    width: ${({ matches }) => matches.small ? '320px' : matches.medium ? '768px' : matches.large && '1280px'};
    height: ${({ matches }) => matches.small ? '257px' : matches.medium ? '527px' : matches.large && '527px'};
`
export const TransactionWrrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const BalanceWrrap = styled.div`
    margin-top:40px;
`

