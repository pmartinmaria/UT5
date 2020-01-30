import React, { Component } from 'react';
import Tabla from'./Tabla';
import TablaComponentesSimples from'./TablaComponentesSimples';
import TablaComponentesSimplesProps from './TablaComponentesSimplesProps';
import TablaComponentesSimplesState from './TablaComponentesSimplesState';
class App extends Component {
    /*
     Objeto para utilizar en state
     */
    state={
        personajes:[
            {
                nombre: "Payton Hobart"
            },
            {
                nombre: "Wendy Carr"
            },
            {
                nombre: "Mina"
            },
            {
                nombre: "Jonathan Harker"
            },
            {
                nombre: "Drácula"
            }
        ]
    }
    /*Método de borrado de personajes */
    borrarPersonajes=indice=>{
        const {personajes}=this.state;
        this.setState({
            personajes: personajes.filter((personaje, i)=>{
                return i !==indice; /*Devuelve todos los que no tiene que borrar */
            })
        })
    }
    render() {
        /*Colección de objetos con nomenclatura Json para utilizar con props */
        const actoresActrices=[
            {
                nombre: "Joel",
                apellidos: "Edgerton"
            },
            {
                nombre: "Carmen",
                apellidos: "Maura"
            },
            {
                nombre: "Luis",
                apellidos: "Tosar"
            },
            {
                nombre: "Chloe",
                apellidos: "Grace Moretz"
            }
        ];
        //Inicializamos el objeto de personajes
        const {personajes}=this.state;
        return (
            <div className='App'>
                <h1>Funciona</h1>
                <h2>Tabla creada mediante un componente de clase</h2>
                <Tabla/>
                <h2>Tabla creada mediante un componente de clase que utiliza componentes simples</h2>
                <TablaComponentesSimples/>
                <h2>Tabla creada mediante un componente de clase que utiliza paso de parámetros con props</h2>
                <TablaComponentesSimplesProps datosActoresActrices={actoresActrices}/>
                <h2>Tabla creada con un componente simple (con state y que permite eliminar elementos) que utiliza
                    dos componentes simples
                </h2>
                <TablaComponentesSimplesState datosPersonaje={personajes} borrarPersonajes={this.borrarPersonajes}/>
            </div>);
    }
}
export default App;