import {
    Container, Avatar, Name, Button
} from "./UserMenu.styled.jsx";

export const UserMenu = () => {
    return (
        <Container>
            <Avatar><span>U</span></Avatar>
            <Name>User Name</Name>
            <Button type="button">Выйти</Button>
        </Container>
    )
}