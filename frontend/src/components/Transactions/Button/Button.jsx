import { ButtonStyled } from "./Button.styled";

const Button = ({text, marginButton}) => {
    return (
        <ButtonStyled 
            marginButton={marginButton}
        >
            {text}
        </ButtonStyled>
    );
};

export default Button;