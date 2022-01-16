import { useState } from 'react';

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
    FormSubmitBtn
} from './AuthForm.styled.jsx';

export const AuthForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;

        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                return;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        resetForm();
    }

    const resetForm = () => {
        setEmail('');
        setPassword('');
    }

    return (
        <Container>
            <Note>Вы можете авторизоваться с помощью Google Account:</Note>
            <GoogleButton>
                <GoogleIcon src={googleIcon} />Google
            </GoogleButton>
            <Note>Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:</Note>

            <Form onSubmit={handleSubmit} autoComplete='off'>
                <FormLabel>
                    Электронная почта:
                    <FormInput type="email" name="email" value={email} onChange={handleChange}
                    />
                </FormLabel>
                <FormLabel>
                    Пароль:
                    <FormInput type="password" name="password" value={password} onChange={handleChange}
                    />
                </FormLabel>

                <ButtonsContainer>
                    <FormSubmitBtn type="submit">Войти</FormSubmitBtn>
                    <FormSubmitBtn type="submit">Регистрация</FormSubmitBtn>
                </ButtonsContainer>
            </Form>
        </Container>
    )
};