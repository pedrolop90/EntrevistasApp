import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment } from "react";
import TextFieldAtomo from "../atomos/TextFieldAtomo";

function InformacionEntrevistado({ changeCorreo, changeNombre }) {

    const functionKeyUpCorreo = (e) => {
        const valor = e.nativeEvent.srcElement.value;
        changeCorreo(valor)
    }

    const functionKeyUpNombre = (e) => {
        const valor = e.nativeEvent.srcElement.value;
        changeNombre(valor)
    }

    return (
        <Fragment>
            <Box>
                <Paper elevation={6} sx={{ p: 2 }}>
                    <Typography align="center" variant="h5">
                        Información entrevistado
                    </Typography>
                    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center"
                        alignItems="center">
                        <Grid item md={3}>
                            <TextFieldAtomo
                                nombre="correo"
                                placeholder="Correo"
                                eventoKeyUp={functionKeyUpCorreo}
                                valor=''
                                tipo="text"
                            >
                            </TextFieldAtomo>
                        </Grid>
                        <Grid item md={3}>
                            <TextFieldAtomo
                                nombre="nombre"
                                placeholder="Nombre"
                                eventoKeyUp={functionKeyUpNombre}
                                valor=''
                                tipo="text"
                            >
                            </TextFieldAtomo>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </Fragment>
    );

}
export default InformacionEntrevistado;