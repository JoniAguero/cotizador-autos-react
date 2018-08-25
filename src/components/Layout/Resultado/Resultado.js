import React, { Component } from 'react';

class Resultado extends Component {
    render() {
        return (
            
            <div>
                <p className=""> { this.props.resultado } </p>
            </div>
    
        );
    }
}

export default Resultado;