import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment } from "react";

function OtrasPreguntasDreyfus() {
    return (
        <Fragment>
            <Box>
                <Paper elevation={6} sx={{ p: 4 }}>
                    <Typography align="center" variant="h5">
                        Otras preguntas Dreyfus
                    </Typography>
                    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center" alignItems="center">

                    </Grid>
                </Paper>
            </Box>
        </Fragment>
    );
}

export default OtrasPreguntasDreyfus;