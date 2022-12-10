// eslint-disable-next-line

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";


const CorretorDetalhar = () => {

    const [loading, setLoading] = useState(false);

    const { empid } = useParams();
    const [empdata, empdatachange] = useState({});

    setLoading(true);
    useEffect(() => {
        
        fetch("https://server-2.onrender.com/corretor/detalhar/" + empid).then((res) => {
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
                                <h2>Detalhe corretor</h2>
                            </div>
                            <div className="card-body"></div>

                            {empdata &&
                                <div>
                                    <h5>ID: {empdata.id}</h5>
                                    <h2>Nome: <b>{empdata.nome}</b></h2>
                                    <br></br>

                                    <h5>CPF: {empdata.cpf}</h5>
                                    <h5>Idade: {empdata.idade}</h5>
                                    <h5>Salário: {empdata.salario}</h5>
                                    <br></br>

                                    <Link to="/corretores/listar" className="btn btn-danger">Voltar</Link>
                                </div>
                            }
                        </div>
                    </div>
                </div >

            }
        </div>
    );
}

export default CorretorDetalhar;
