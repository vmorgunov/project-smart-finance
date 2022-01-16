import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const Avatar = styled.div`
    width: 32px;
    height: 32px;
    background-color: #F5F6FA;
    border-radius: 50%;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    > span {
        font-size: 12px;
        line-height: 14px;
        font-weight: 700;
        color: #52555F;
    }
`;

export const Name = styled.span`
    font-size: 12px;
    line-height: 14px;
    color: #52555F;
    margin-right: 20px;
`;

export const Button = styled.button`
    height: 36px;
    border: none;
    border-left: 2px solid #E0E5EB;
    padding: 11px 20px 11px 20px;
    padding-left: 20px;
    background-color: transparent;
    font-size: 12px;
    line-height: 14px;
    color: #52555F;
    text-decoration-line: underline;
`;