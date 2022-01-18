import { useState } from 'react';
import { useDispatch } from "react-redux";
import { register, logIn } from '../../redux/auth/authOperations.js';

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
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegister, setIsRegister] = useState(false);

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
        const user = { email, password };
        userSubmit(user);
        resetForm();
    }

    const resetForm = () => {
        setEmail('');
        setPassword('');
    }

    const userSubmit = ({ email, password }) => {
        switch (isRegister) {
            case false:
                return dispatch(logIn({ email, password }));
            case true:
                return dispatch(register({ email, password }));
            default:
                return;
        }
    }

    const handleRegister = () => {
        setIsRegister(!isRegister);
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
                    <FormSubmitBtn type="submit" onClick={handleRegister}>Регистрация</FormSubmitBtn>
                </ButtonsContainer>
            </Form>
        </Container>
    )
};