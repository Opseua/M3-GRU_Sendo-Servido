// eslint-disable-next-line

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";


const FormaDePagamentoDetalhar = () => {

    const [loading, setLoading] = useState(false);
    const { empid } = useParams();
    const [empdata, empdatachange] = useState({});

    setLoading(true);
    useEffect(() => {
        fetch("https://server-2.onrender.com/forma_de_pagamento/detalhar/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            setLoading(false);
            empdatachange(resp);
        }).catch((err) => {
            setLoading(false);
            console.log(err.message);
        })
    }, [empid]);
    return (

        <div className="animacao">
            {loading ?
                <  ClipLoader
                    color="#21d4fd"
                    size={150}
                    aria-label="Loading Spinner"
                    data- testid="carregador"
                /> :


                <div>
                    <div className="container">
                    <h1 id="titulo" className="titulo">DREAMS IMOBILIÁRIA</h1>
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
                </div >

            }
        </div>

    );
}

export default FormaDePagamentoDetalhar;
