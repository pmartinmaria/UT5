import React, { Component } from 'react';
import Tabla from './Tabla';
import TablaComponentesSimples from './TablaComponentesSimples';
import TablaComponentesSimplesProps from './TablaComponentesSimplesProps';
import TablaComponentesSimplesState from './TablaComponentesSimplesState';
import Formulario from './Formulario';
//import personajes from './personajes.json';
const actoresactrices = [
  {
    nombre: 'Joel',
    apellidos: 'Edgerton'
  },
  {
    nombre: 'Carmen',
    apellidos: 'Maura'
  },
  {
    nombre: 'Luis',
    apellidos: 'Tosar'
  },
  {
    nombre: 'Chloe',
    apellidos: 'Grace Moretz'
  }
]

class App extends Component {
  /*Objeto para utilizar en state*/
  /*state = {
    personajes: [
      {
        name: 'Payton Hobart',
      },
      {
        name: 'Wendy Carr',
      },
      {
        name: 'Mina',
      },
      {
        name: 'Jonathan Harker',
      },
      {
        name: 'Drácula',
      },
      {
        name: 'Once',
      },
      {
        name: 'Jim Hopper',
      }
    ]
  }*/
  /*Otra forma de hacerlo mediante un archivo Json externo */
  //state = { personajes }

  state = { personajes: [] }
  /*Para manejar los datos del formulario*/
  manejarEnvio = personaje => {
    this.setState({ personajes: [...this.state.personajes, personaje] });
  }
  /*Método para borrar personajes*/
  borrarPersonaje = indice => {
    const { personajes } = this.state;
    this.setState({
      personajes: personajes.filter((personaje, i) => {
        return i !== indice;

      })
    });
  }
  render() {
    /*Para utilizar en state*/
    const { personajes } = this.state
    return (
      <div className="App">
        <h1>¡Funciona!</h1>
        <Tabla />
        <TablaComponentesSimples />
        <TablaComponentesSimplesProps datosActoresActrices={actoresactrices}/>
        <h1>Tabla creada con un componente simple (con state y que permite eliminar elementos) que utiliza dos componentes simples</h1>
        <TablaComponentesSimplesState datosPersonaje={personajes} borrarPersonaje={this.borrarPersonaje} />
        <h2>Añadir nuevo</h2> 
        <Formulario manejarEnvio={this.manejarEnvio}/>
      </div>
    )
  }

}
export default App;
