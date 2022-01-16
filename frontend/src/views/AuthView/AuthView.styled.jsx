import styled from '@emotion/styled';

export const Container = styled.div`
    padding: 117px 110px 50px 230px;
    display: flex;
`;

export const TitlesContainer = styled.div`
`;


export const Title = styled.h1`
    font-weight: 900;
    font-size: 83px;
    line-height: 120px;
    position: relative;
    width: 377px;
    margin-top: 191px;
    &::before {
        content: "";
        display: block;
        background-color: #000;
        height: 13px;
        width: 8px;
        position: absolute;
        top: 35px;
        right: 112px;
    }
    &::after {
        content: "";
        display: block;
        background-color: #000;
        height: 13px;
        width: 8px;
        position: absolute;
        bottom: 14px;
        right: 112px;
    }
`;

export const UnderTitle = styled.h2`
    margin-left: 72px;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #52555F;
`;

export const CabagesIcon = styled.img`
    margin-top: 155px;
`;

export const Background = styled.div`
    position: absolute;
    height: 526px;
    background: #F5F6FB;
    border-bottom-left-radius: 100px;
    z-index: -1;
`;

export const BgImg = styled.img`
    margin: 26px 0 0 10px;
`;