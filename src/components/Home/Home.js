import React from "react";
import { Switch, Route } from "react-router-dom";
import Matchs from "../Matchs"

import "./Home.scss";

export default function Home(props) {

  return (
    <div className="body2">

      <div className="sidebar">
        <a className="active" href="/">Partidos</a>
        {/* <a href="#home">Home</a> */}
        <a href="teams">Equipos</a>
        <a href="players">Jugadores</a>
        <a className="abajo1" href="match">Nuevo Partido</a>
        <a className="abajo2" href="team">Nuevo Equipo</a>
        <a className="abajo3" href="player">Nuevo Jugador</a>
      </div>
   
      <Switch>
        <Route path="/" exact>
          <Matchs /> 
        </Route>
        <Route path="/teams" exact>
          <div className="borrar"> <h1>teams</h1> </div>
        </Route>
        <Route path="/players" exact>
          <div className="borrar"> <h1>players</h1> </div>
        </Route>
        <Route path="/match" exact>
          <div className="borrar"> <h1>match</h1> </div>
        </Route>
        <Route path="/team" exact>
          <div className="borrar"> <h1>team</h1> </div>
        </Route>
        <Route path="/player" exact>
          <div className="borrar"> <h1>player</h1> </div>
        </Route>
      </Switch>

    </div>
    
  );
}
