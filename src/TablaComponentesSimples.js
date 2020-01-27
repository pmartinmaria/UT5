import React, { Component } from 'react';
const TablaCabecera = () => {
    return (
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Email</th>
            </tr>
        </thead>
    )
}
const TablaCuerpo = () => {
    return (
        <tbody>
            <tr>
                <td>Pablo</td>
                <td>Martín María</td>
                <td>pablomartinmaria10@gmail.com</td>
            </tr>
        </tbody>
    )
}
class TablaComponentesSimples extends Component {
    render() {
        return (
            <table>
                <TablaCabecera />
                <TablaCuerpo />
            </table>
        )
    }
}
export default TablaComponentesSimples;