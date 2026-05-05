import { useState } from "react";
import './Listagem.css'

export default function Listagem() {


return(
    <>
    <main>
        <h1>Tabela de Carros</h1>

        <table border="1">
            <tr>
                <td>Editar</td>
                <td>Excluir</td>
                <td>Ano</td>
            </tr>

            <tr>
                <td>Gol</td>
                <td>volkswagen</td>
                <td>1995</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>
            <tr>
                <td>Montana</td>
                <td>Chevrolet</td>
                <td>2023</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>
              <tr>
                <td>city</td>
                <td>honda</td>
                <td>2015</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>
  <tr>
                <td>Hb20</td>
                <td>hyudai</td>
                <td>2013</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>
  <tr>
                <td>maverick</td>
                <td>ford</td>
                <td>2025</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>


        </table>

    </main>    
    </>
)
}