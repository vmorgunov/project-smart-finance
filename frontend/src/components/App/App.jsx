import { AppBar } from "../AppBar";
import HomeView from "../../views/HomeView/HomeView.jsx";
import ReportView from "../../views/ReportView/ReportView.jsx";

import cabages from '../../images/mnogoKapusta.svg'
import {
    Container,
    Background,
    BgImg
} from "./App.styled.jsx";

export const App = () => {
    return (
        <Container>
            <AppBar />
            <Background>
                <BgImg src={cabages} alt="Много капусты" />
            </Background>
            <HomeView />
            <ReportView />
        </Container>
    );
}