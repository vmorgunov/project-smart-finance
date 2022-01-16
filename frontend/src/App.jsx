import { Routes, Route } from 'react-router-dom';
import { AppBar } from "./components/AppBar";

import AuthView from "./views/AuthView/AuthView.jsx";
import ReportView from "./views/ReportView/ReportView.jsx";

import {
    Container
} from "./App.styled.jsx";

export const App = () => {
    return (
        <Container>
            <AppBar />

            <Routes>
                <Route exact path="/" element={<AuthView />} />
                <Route exact path="/report" element={<ReportView />} />
            </Routes>

        </Container>
    );
}