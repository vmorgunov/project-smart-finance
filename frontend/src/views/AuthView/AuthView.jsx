import React from "react";

import { AuthForm } from "../../components/AuthForm";

import cabagesIcon from '../../images/twoKapusta.svg';
import cabagesBg from '../../images/mnogoKapusta.svg';
import {
    Container,
    Title,
    UnderTitle,
    TitlesContainer,
    CabagesIcon,
    Background,
    BgImg
} from "./AuthView.styled";

const AuthView = () => {
    return (<>
        <Background>
            <BgImg src={cabagesBg} alt="Много капусты" />
        </Background>
        <Container>
            <TitlesContainer>
                <Title>Kapusta</Title>
                <UnderTitle>Smart Finance</UnderTitle>
                <CabagesIcon src={cabagesIcon} alt="Капуста" />
            </TitlesContainer>
            <AuthForm />
        </Container>
    </>
    )
}

export default AuthView;