import { NumericFormat } from 'react-number-format';
import PropTypes from 'prop-types';
import { TextField } from "@mui/material";
import { forwardRef } from 'react';

// import { Container } from './styles';

const NumericFormatCustom = forwardRef(function NumericFormatCustom(
    props,
    ref,
) {
    const { onChange, ...other } = props;

    return (
        <NumericFormat
            {...other}
            getInputRef={ref}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            thousandSeparator=''
            decimalSeparator=','
            decimalScale={2}
            valueIsNumericString
            prefix="R$ "
        />
    );
});
NumericFormatCustom.propTypes = {
    name: PropTypes.string.isRequired,
};

function InputCurrency({ label, value, handlerChange }) {

    return <TextField
        label={label}
        value={value}
        onChange={handlerChange}
        name="numberformat"
        id="formatted-numberformat-input"
        InputProps={{
            inputComponent: NumericFormatCustom,
        }}
        variant="standard"
    />;
}

export default InputCurrency;