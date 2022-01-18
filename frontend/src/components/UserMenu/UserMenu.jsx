import { useDispatch, useSelector } from "react-redux"
import { logOut } from "../../redux/auth/authOperations"
import { getUsermail } from "../../redux/auth/authSelectors";

import {
    Container, Avatar, Name, Button
} from "./UserMenu.styled.jsx";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const email = useSelector(getUsermail);

    return (
        <Container>
            <Avatar><span>U</span></Avatar>
            <Name>{email}</Name>
            <Button type="button" onClick={() => dispatch(logOut())}>Выйти</Button>
        </Container>
    )
}