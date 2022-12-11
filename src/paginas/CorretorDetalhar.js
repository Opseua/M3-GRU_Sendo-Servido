// eslint-disable-next-line
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import Footer from "../componentes/Footer/Footer";
import NavBar from "../componentes/NavBar/NavBar";

const CorretorDetalhar = () => {
  const [loading, setLoading] = useState(false);
  const { empid } = useParams();
  const [empdata, empdatachange] = useState({});

  useEffect(() => {
    setLoading(true);
    fetch("https://server-2.onrender.com/corretor/detalhar/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setLoading(false);
        empdatachange(resp);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
      });
  }, [empid]);
  return (
    <div className="animacao">
      {loading ? (
        <ClipLoader
          className="animacaooo"
          color="#21d4fd"
          size={150}
          aria-label="Loading Spinner"
          data-
          testid="carregador"
        />
      ) : (
        <>
          <NavBar />
          <div className="container">
            <div className="card row" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2>Detalhe corretor</h2>
              </div>
              <div className="card-body"></div>

              {empdata && (
                <div>
                  <h5>ID: {empdata.id}</h5>
                  <h2>
                    Nome: <b>{empdata.nome}</b>
                  </h2>
                  <br></br>

                  <h5>CPF: {empdata.cpf}</h5>
                  <h5>Idade: {empdata.idade}</h5>
                  <h5>Salário: {empdata.salario}</h5>
                  <br></br>
                  
                  <Link to="/corretores/listar" className="btn btn-danger">Voltar</Link>
                </div>
              )}
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default CorretorDetalhar;
