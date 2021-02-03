import React from "react";
import Matchs from "../Matchs"

import "./Home.scss";

export default function Home(props) {

  return (
    <div className="body2">

      <div className="sidebar">
        <a className="active" href="#home">Partidos</a>
        {/* <a href="#home">Home</a> */}
        <a href="#news">Equipos</a>
        <a href="#contact">Jugadores</a>
        <a href="#about">Nuevo Partido</a>
        <a href="#about">Nuevo Equipo</a>
        <a href="#about">Nuevo Jugador</a>
      </div>

      <Matchs />

    </div>
    
  );
}
