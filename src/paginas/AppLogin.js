// eslint-disable-next-line

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/style_login.css";


function AppLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const AbrirLink = (link) => {
    navigate("/" + link);
  }

  return (
    <div className="login_container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title"> Bem vindo </span>

            <span className="login-form-title">
            </span>

            <div className="wrap-input">
              <input required
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
              <button href="/teste" className="login-form-btn">BOTAO 1</button>
              <button onClick={() => { AbrirLink('teste') }} className="login-form-btn">BOTAO 2</button>
              <Link to="/inquilinos/listar" className="login-form-btn">BOTAO 3</Link>
              <Link style={{ textDecoration: 'none', color: 'white' }} to="/inquilinos/listar" className="login-form-btn">BOTAO 4</Link>

              


            </div>

            <div className="text-center">
              <span className="txt1">Não possui conta? </span>
              <a className="txt2" href="/login">
                Criar conta
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AppLogin;