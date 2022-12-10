import React from "react";
import Footer from "../componentes/Footer/Footer";
import NavBar from "../componentes/NavBar/NavBar";
import style from "./Main.module.css";

export default function Main() {
  return (
    <>
        <NavBar />
        <div className={style.main}>
          
        </div>
        <Footer />
    </>
  );
}
