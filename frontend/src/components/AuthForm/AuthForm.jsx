import googleIcon from '../../images/googleIcon.svg'
import {
    Container,
    Form,
    Note,
    GoogleButton,
    FormLabel,
    FormInput,
    GoogleIcon,
    ButtonsContainer,
    SignButton
} from './AuthForm.styled.jsx';

export const AuthForm = () => {
    return (
        <Container>
            <Note>Вы можете авторизоваться с помощью Google Account:</Note>
            <GoogleButton>
                <GoogleIcon src={googleIcon} />
                Google</GoogleButton>
            <Note>Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:</Note>
            <Form>
                <FormLabel>
                    Электронная почта:
                    <FormInput
                        type="email"
                        name="email"
                    />
                </FormLabel>
                <FormLabel>
                    Пароль:
                    <FormInput
                        type="password"
                        name="password"
                    />
                </FormLabel>
                <ButtonsContainer>
                    <SignButton type="submit">Войти</SignButton>
                    <SignButton type="submit">Регистрация</SignButton>
                </ButtonsContainer>
            </Form>
        </Container>
    )
};