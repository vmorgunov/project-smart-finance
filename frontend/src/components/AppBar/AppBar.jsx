import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/auth/authSelectors";
import { UserMenu } from '../UserMenu';

import logo from '../../images/logo.svg';
import { Container, Logo } from './AppBar.styled.jsx';

export const AppBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        <Container>
            <Logo href="/">
                <img src={logo} alt="Логотип" />
            </Logo>
            {isLoggedIn && <UserMenu />}
        </Container>
    )
}