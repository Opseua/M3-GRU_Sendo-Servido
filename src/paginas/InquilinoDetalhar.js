import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ImagemCasa from '../img/logo.jpg';
import ClipLoader from "react-spinners/ClipLoader";


const InquilinoDetalhar = () => {

    const [loading, setLoading] = useState(false);
    const [color, setColor] = useState("#21d4fd");

    const { empid } = useParams();
    const [empdata, empdatachange] = useState({});

    useEffect(() => {
        setLoading(true);
        fetch("https://server-2.onrender.com/inquilino/detalhar/" + empid).then((res) => {
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
                    color={color}
                    size={150}
                    aria-label="Loading Spinner"
                    data- testid="carregador"
                /> :


                <div>
                    {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

                    <div className="container">

                        <div className="card row" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2>Detalhe inquilino</h2>
                            </div>
                            <div className="card-body"></div>

                            {empdata &&
                                <div>
                                    <h5>ID: {empdata.id}</h5>
                                    <h2>Nome: <b>{empdata.nome}</b></h2>
                                    <br></br>

                                    <h5>Salário: {empdata.salario}</h5>
                                    <h5>CPF: {empdata.cpf}</h5>
                                    <h5>Idade: {empdata.idade}</h5>
                                    <h5>Profissão: {empdata.profissao}</h5>
                                    <h5>Contato: {empdata.contato}</h5>
                                    <h5>Tempo como inquino: {empdata.tempo_como_inquilino}</h5>
                                    <br></br>

                                    {/* Botão VOLTAR */}
                                    <Link to="/inquilinos/listar" className="btn btn-danger">Voltar</Link>
                                </div>
                            }
                        </div>
                    </div>
                    {/* </div>
            </div> */}
                </div >


            }
        </div>

    );
}

export default InquilinoDetalhar;
