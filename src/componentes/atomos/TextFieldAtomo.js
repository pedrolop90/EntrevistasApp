
import { TextField } from "@mui/material";
import { Fragment } from "react";

function TextFieldAtomo(
    {
        nombre,
        placeholder,
        eventoChange,
        minimo,
        maximo,
        valor,
        tipo = "standar",
        disabled = false,
        eventoKeyUp
    }
) {
    return (
        <Fragment>
            <TextField
                id={nombre}
                label={placeholder}
                variant="standard"
                onKeyUp={eventoKeyUp}
                disabled={disabled}
                fullWidth
            />
        </Fragment>
    );
}

export default TextFieldAtomo;