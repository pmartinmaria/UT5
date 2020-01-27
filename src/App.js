import React, { Component } from 'react';
import Tabla from'./Tabla';
import TablaComponentesSimples from'./TablaComponentesSimples';
class App extends Component {
    render() {
        return (
            <div className='App'>
                <h1>Funciona</h1>
                <h2>Tabla creada mediante un componente de clase</h2>
                <Tabla/>
                <h2>Tabla creada mediante un componente de clase que utiliza componentes simples</h2>
                <TablaComponentesSimples/>
            </div>);
    }
}
export default App;