import React, { Component } from 'react';
import Header from './Header/Header';
import Formulario from './Formulario/Formulario';

class Layout extends Component {

    cotizarSeguro = (datos) => {
        console.log(datos);     
    }

    render() {
        return (
            <div className="contenedor">
                <Header titulo="Cotizador de Seguro de Autos"/>
                <Formulario cotizarSeguro={this.cotizarSeguro}/>
            </div>
        );
    }
}

export default Layout;

