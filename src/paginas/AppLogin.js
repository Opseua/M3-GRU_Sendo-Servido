// eslint-disable-next-line
import { useState } from "react";
import "../css/style_login.css";


function AppLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const validarEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");
  const validarSenha = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

  const validate = () => {
      if(!validarEmail.test(email)) {
          setEmailErr(true);
      } else {
          setEmailErr(false);
      }

      if(!validarSenha.test(password)) {
          setPasswordErr(true);
      } else {
          setPasswordErr(false);
      }
  }
  
  console.log({email, password});

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title"> Bem-vindo! </span>

            <span className="login-form-title">
            </span>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="E-mail"></span>
              {emailErr && <p>Por favor, digite um e-mail válido.</p>}
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} required
              />
              <span className="focus-input" data-placeholder="Senha"></span>
              {passwordErr && <p>Por favor, digite uma senha mais segura.</p>}
            </div>

            <div className="container-login-form-btn">
              <button onClick={validate} className="login-form-btn">Login</button>
            </div>

            <div className="text-center">
              <span className="txt1">Não possui conta? </span>
              <a className="txt2" href="#">
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
