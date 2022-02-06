import { Button } from "@mui/material";


function Boton(
    {
        texto,
        color,
        funcionClick
    }
) {
    return (
        <Button
            variant="contained"
            color="success"
            onClick={funcionClick}
        >
            {texto}
        </Button>
    );
}

export default Boton;