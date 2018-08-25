import React, { Component } from 'react';
import Header from './Header/Header';
import Formulario from './Formulario/Formulario';
import Resumen from './Resumen/Resumen';

import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from "../helper";

class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resultado: '',
            datos: {}
        }
    }

    cotizarSeguro = (datos) => {

        const { marca, year, plan } = datos;

        // precio base
        let resultado = 2000;

        //Tipo de Plan
        resultado = resultado * obtenerPlan(plan); 

        // Años del vehículo
        let antiguedad = obtenerDiferenciaAnio(year);
        resultado -= (antiguedad * 3) * resultado / 100;

        // Marca
        let porcentajeMarca = calcularMarca(marca);
        resultado = parseFloat ( resultado * porcentajeMarca ).toFixed(2);

        const datosAuto = {
            resultado: resultado,
            datos: datos
        }

        this.setState(datosAuto)
        
    }

    render() {
        return (
            <div className="contenedor">
                <Header titulo="Cotizador de Seguro de Autos"/>
                <div className="contenedor-formulario">
                    <Formulario cotizarSeguro = { this.cotizarSeguro }/>
                    <Resumen datos = { this.state.datos } resultado = { this.state.resultado } />
                </div>
            </div>
        );
    }
}

export default Layout;

