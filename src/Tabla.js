import React, { Component } from "react";
class Tabla extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Pablo</td>
                        <td>Martín María</td>
                        <td>pablomartinmaria10@gmail.com</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}
export default Tabla;