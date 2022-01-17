import { InputStyle } from "./Input.styled";

const Input = ({ type,
    border,
    borderRadius,
    placeholder,
    widthInput,
    marginInput,
    paddingInput,
    textAlignInput,
    value, onChange }) => {
    return (
        <InputStyle
            type={type}
            placeholder = {placeholder}
            border = {border}
            borderRadius={borderRadius}
            widthInput={widthInput}
            marginInput={marginInput}
            paddingInput={paddingInput}
            textAlignInput={textAlignInput}

            value={value}
            onChange={onChange}
        />
    );
};

export default Input;