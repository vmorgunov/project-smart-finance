import { UserMenu } from '../UserMenu';

import logo from '../../images/logo.svg';
import { Container, Logo } from './AppBar.styled.jsx';

export const AppBar = () => {
    return (
        <Container>
            <Logo href="#">
                <img src={logo} alt="Логотип" />
            </Logo>
            <UserMenu />
        </Container>
    )
}