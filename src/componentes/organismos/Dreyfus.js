import { Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment, useEffect, useState } from "react";
import SeniorityService from "../../servicio/SeniorityService";
import Seniority from "../moleculas/Seniority";

function Dreyfus({ chapterId, eventoActualizarDreyfus }) {
    const [senioritys, setSenioritys] = useState([]);

    useEffect(() => {
        SeniorityService.CargarDataSenioritysByChapterId()
            .then(response => {
                eventoActualizarDreyfus(response.data);
                setSenioritys(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [setSenioritys]);

    const functionActualizarSeniority = (data, seniorityId) => {
        let senioritysLocal = senioritys;
        senioritysLocal.filter(x => x.id === seniorityId)[0].pragmaPowers = data;
        setSenioritys(senioritysLocal);
        eventoActualizarDreyfus(senioritysLocal);
    };

    return (
        <Fragment>
            <Box>
                <Paper elevation={6} sx={{ p: 3 }}>
                    <Typography align="center" variant="h5">
                        Dreyfus
                    </Typography>
                    <Stack spacing={1}>
                        {
                            senioritys.map(seniority =>
                                <Seniority
                                    key={seniority.id}
                                    id={seniority.id}
                                    nombre={seniority.nombre}
                                    pragmaPowersValores={seniority.pragmaPowers}
                                    eventoActualizarSeniority={functionActualizarSeniority}>
                                </Seniority>
                            )
                        }
                    </Stack>
                </Paper>
            </Box>
        </Fragment>
    );
}

export default Dreyfus;