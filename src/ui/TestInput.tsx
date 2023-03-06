import React, {forwardRef} from 'react';
import {FormControl, InputAdornment, InputLabel, OutlinedInput} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {Visibility, VisibilityOff} from "@mui/icons-material";

type TestInputType = "email" | "password"

interface TestInputProps {
    id: string;
    label: string;
    type: TestInputType;
}

const TestInput = forwardRef<HTMLInputElement, TestInputProps>((props, ref) => {
    const { id, label, type } = props;
    let formType = 'text'
    let inputAdornment = <></>

    if (type === 'password') {
        const [showPassword, setShowPassword] = React.useState(false);
        const handleClickShowPassword = () => setShowPassword((show) => !show);

        const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();
        };

        formType = showPassword ? 'text' : 'password';

        inputAdornment =
            <InputAdornment position="end" >
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                >
                    {showPassword ? <VisibilityOff/> : <Visibility/>}
                </IconButton>
            </InputAdornment>
    }



    return (
        <FormControl sx={{marginTop: '16px'}} variant="outlined" fullWidth margin="normal">
            <InputLabel htmlFor={id}>{label}</InputLabel>
            <OutlinedInput
                id={id}
                type={formType}
                endAdornment={inputAdornment}
                label={label}
                inputRef={ref}
                color={"primary"}
            />
        </FormControl>
    );
});

export default TestInput;