// eslint-disable-next-line
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import Footer from "../componentes/Footer/Footer";
import NavBar from "../componentes/NavBar/NavBar";

const InquilinoDetalhar = () => {
    const [loading, setLoading] = useState(false);
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
                    <div className="server_container">

                        <div className="server_card server_row" style={{ "textAlign": "left" }}>
                            <div className="server_card-title">
                                <h2 className="server_h2">Detalhe inquilino</h2>
                            </div>
                            <div className="server_card-body"></div>

                            {empdata &&
                                <div>
                                    <h5 className="server_h5">ID: {empdata.id}</h5>
                                    <h2 className="server_h2">Nome: <b className="server_b">{empdata.nome}</b></h2>
                                    <br></br>

                                    <h5 className="server_h5">Salário: {empdata.salario}</h5>
                                    <h5 className="server_h5">CPF: {empdata.cpf}</h5>
                                    <h5 className="server_h5">Idade: {empdata.idade}</h5>
                                    <h5 className="server_h5">Profissão: {empdata.profissao}</h5>
                                    <h5 className="server_h5">Contato: {empdata.contato}</h5>
                                    <h5 className="server_h5">Tempo como inquino: {empdata.tempo_como_inquilino}</h5>
                                    <br></br>

                                    <Link to="/inquilinos/listar" className="server_btn server_btn-danger">Voltar</Link>
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

export default InquilinoDetalhar;