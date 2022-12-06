import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.jpg";
import style from "./NavBar.module.css";
import NavLinks from "./NavLinks";

export default function Navigation() {
  return (
    <>
      <nav className={style.navigation}>
        <div className={style.logo}>
          <Link to="/">
            <img
              className={style.logotipo}
              src={Logo}
              alt="logo imobiliaria"
            ></img>
          </Link>
          <p>Realizando sonhos desde 2005</p>
        </div>
        <NavLinks />
      </nav>
    </>
  );
}
