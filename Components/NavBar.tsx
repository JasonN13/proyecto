import React from 'react'
import Link from 'next/link'


export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        
          <a className="navbar-brand d-flex align-items-center">
          <img
            src="/Logos/fanart.png" 
            alt="Logo Instituto Renacimiento" 
            className="me-2" 
            width={40} 
            height={40} 
          />Instituto Renacimiento</a>
        

        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link active" href="/Actividades">Actividades</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link active" href="/Calendario">Calendario </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link active" href="/Inicio">Inicio Sesion</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" href="/SobreNosotros">Historia</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
