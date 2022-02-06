import { Grid, Paper, Typography } from "@mui/material";
import { Fragment } from "react";
import PragmaPower from "../atomos/PragmaPower";

function Seniority({ nombre, pragmaPowersValores, eventoActualizarSeniority, id }) {
    const functionChange = (e, pragmaPower) => {
        const valor = e.target.value;
        pragmaPowersValores.filter(x => x.id === pragmaPower.id)[0].valor = valor;
        eventoActualizarSeniority(pragmaPowersValores, id);
    };
    return (
        <Fragment>
            <Paper elevation={2} sx={{ p: 3 }}>
                <Typography align="center" variant="h6">
                    {nombre}
                </Typography>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} spacing={{ xs: 2, md: 3 }} >

                    {
                        pragmaPowersValores.map((pragmaPower, index) => {
                            return <Grid item md={3} key={index}>
                                <PragmaPower
                                    key={pragmaPower.id}
                                    nombre={pragmaPower.nombre}
                                    placeholder={pragmaPower.nombre}
                                    eventoChange={(e) => functionChange(e, pragmaPower)}
                                    minimo={pragmaPower.minimo}
                                    maximo={pragmaPower.maximo}
                                    valor={pragmaPower.valor}
                                >
                                </PragmaPower>
                            </Grid>
                        })
                    }
                </Grid>
            </Paper>
        </Fragment>
    );
}

export default Seniority;