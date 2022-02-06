import { Fragment } from "react";
import Rango from "./Rango";

function PragmaPower(
    {
        nombre,
        placeholder,
        eventoChange,
        minimo,
        maximo,
        valor,
        disabled = false,
    }
) {
    return (
        <Fragment>
            <label>{nombre}</label>
            <Rango
                nombre={nombre}
                placeholder={placeholder}
                eventoChange={eventoChange}
                minimo={minimo}
                maximo={maximo}
                valor={valor}
                disabled={disabled}
            />
        </Fragment>
    );
}

export default PragmaPower;