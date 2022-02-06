import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../moleculas/Navbar";

function Menu({ elementos }) {

    return (
        <Fragment>
            <BrowserRouter>
                <Navbar elementos={elementos} />
                <Routes>
                    {
                        elementos.map(elemento =>
                            <Route
                                key={elemento}
                                path={elemento.url}
                                exact={elemento.exact}
                                element={elemento.componente}
                            >
                            </Route>
                        )
                    }
                </Routes>
            </BrowserRouter>
        </Fragment>
    );
}

export default Menu;