import React, { Component } from 'react';
import Header from './Header/Header';
import Formulario from './Formulario/Formulario';

class Layout extends Component {
    render() {
        return (
            <div className="contenedor">
                <Header titulo="Cotizador de Seguro de Autos"/>
                <Formulario />
            </div>
        );
    }
}

export default Layout;

