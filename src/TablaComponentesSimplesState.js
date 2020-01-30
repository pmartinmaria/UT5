import React from "react";
import TablaComponentesSimples from "./TablaComponentesSimples";
const TablaCabecera = () => {
    return (
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Borrar</th>
            </tr>
        </thead>
    )
}
const TablaCuerpo= props=>{
    const filaDeDatos=props.datosPersonaje.map((fila, indice)=>{
        return(
            <tr key={indice}>
                <td>{fila.nombre}</td>
                <td><button onClick={()=>props.borrarPersonajes(indice)}>Borrar</button></td>
            </tr>
        )
    })
    return(
        <tbody>
            {filaDeDatos}
        </tbody>
    )
}
const TablaComponentesSimplesState=(props)=>{
    const {datosPersonaje, borrarPersonajes}=props;
    return(
        <table>
            <TablaCabecera/>
            <TablaCuerpo datosPersonaje={datosPersonaje} borrarPersonajes={borrarPersonajes}/>
        </table>
    )
}
export default TablaComponentesSimplesState