import { AuthForm } from "../../components/AuthForm";

import cabagesIcon from '../../images/twoKapusta.svg';
import {
    Container,
    Title,
    UnderTitle,
    TitlesContainer,
    CabagesIcon,
} from "./HomeView.styled";

const HomeView = () => {
    return (
        <Container>
            <TitlesContainer>
                <Title>Kapusta</Title>
                <UnderTitle>Smart Finance</UnderTitle>
                <CabagesIcon src={cabagesIcon} alt="Капуста" />
            </TitlesContainer>
            <AuthForm />
        </Container>
    )
}

export default HomeView;