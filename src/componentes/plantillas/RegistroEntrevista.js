import { Container, Stack } from "@mui/material";
import { Fragment, useState } from "react";
import SeniorityService from "../../servicio/SeniorityService";
import Boton from "../atomos/Boton";
import Dreyfus from "../organismos/Dreyfus";
import InformacionEntrevistado from "../organismos/InformacionEntrevistado";
import OtrasPreguntasDreyfus from "../organismos/OtrasPreguntasDreyfus";


function RegistroEntrevista() {
    const chapterId = "backend";
    const [correo, setCorreo] = useState("");
    const [nombre, setNombre] = useState("");
    const [dreyfus, setDreyfus] = useState([]);


    const changeCorreo = (correoData) => {
        setCorreo(correoData);
    }

    const changeNombre = (nombreData) => {
        setNombre(nombreData);
    }

    const funcionActualizarDreyfus = (data) => {
        setDreyfus(data);
    }

    const funcionEnviar = () => {
        SeniorityService.GuardarDataSeniority(nombre, correo, dreyfus);
    }



    return (
        <Fragment>
            <Container
                fixed
            >
                <Stack spacing={10}>
                    <InformacionEntrevistado changeCorreo={changeCorreo} changeNombre={changeNombre}></InformacionEntrevistado>
                    <Dreyfus chapter={chapterId} eventoActualizarDreyfus={funcionActualizarDreyfus}></Dreyfus>
                    <OtrasPreguntasDreyfus></OtrasPreguntasDreyfus>
                    <Boton texto="Enviar" funcionClick={funcionEnviar} color="success"></Boton>
                </Stack>
            </Container>
        </Fragment>
    );
}
export default RegistroEntrevista;