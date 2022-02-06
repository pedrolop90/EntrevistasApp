import { Slider } from "@mui/material";
import { Fragment } from "react";

function Rango(
    {
        nombre,
        placeholder,
        eventoChange,
        minimo,
        maximo,
        valor,
        disabled = false,
        step = 1
    }
) {
    return (
        <Fragment>
            <Slider
                defaultValue={valor}
                step={step}
                min={minimo}
                max={maximo}
                valueLabelDisplay="auto"
                onChange={eventoChange}
                disabled={disabled}
            />
        </Fragment>
    );
}

export default Rango;