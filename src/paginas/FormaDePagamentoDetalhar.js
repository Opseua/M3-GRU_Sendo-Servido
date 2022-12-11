import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import Footer from "../componentes/Footer/Footer";
import NavBar from "../componentes/NavBar/NavBar";

const FormaDePagamentoDetalhar = () => {
    const [loading, setLoading] = useState(false);
    const { empid } = useParams();
    const [empdata, empdatachange] = useState({});

    useEffect(() => {
        setLoading(true);
        fetch("https://server-2.onrender.com/forma_de_pagamento/detalhar/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            setLoading(false);
            empdatachange(resp);
        }).catch((err) => {
            setLoading(false);
            console.log(err.message);
        })
    }, []);
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

                        <div className="card row" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2>Detalhe forma de pagamento</h2>
                            </div>
                            <div className="card-body"></div>

                            {empdata &&
                                <div>
                                    <h5>ID: {empdata.id}</h5>
                                    <h2>Método: <b>{empdata.metodo}</b></h2>
                                    <br></br>

                                    <h5>Conta: {empdata.conta}</h5>
                                    <h5>Limite de depósito: {empdata.limite_de_deposito}</h5>
                                    <br></br>

                                    <Link to="/formas_de_pagamento/listar" className="btn btn-danger">Voltar</Link>
                                </div>
                            }
                        </div>
                    </div>
                    <Footer />
                </>
            )}
        </div>

    );
}

export default FormaDePagamentoDetalhar;