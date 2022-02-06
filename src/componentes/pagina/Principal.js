
import React from 'react';
import MenuService from '../../servicio/MenuService';
import Menu from '../organismos/Menu';


function Principal() {
    const elementos = MenuService.cargarMenu();

    return (
        <Menu elementos={elementos} />
    );
}
export default Principal;