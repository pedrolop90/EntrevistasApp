import BuscarEntrevistado from "../componentes/plantillas/BuscarEntrevistado";
import RegistroEntrevista from "../componentes/plantillas/RegistroEntrevista";

const elementos = [
    {
        texto: "Buscar Entrevistado",
        url: "/",
        exact: true,
        componente: <BuscarEntrevistado />
    }
    ,
    {
        texto: "Registrar Entrevistado",
        url: "/registrar-entrevistado",
        exact: true,
        componente: <RegistroEntrevista />
    }
];

class MenuService {
    cargarMenu() {
        return elementos;
    }
}
export default new MenuService();