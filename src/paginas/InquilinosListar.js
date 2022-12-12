
// eslint-disable-next-line
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import Footer from "../componentes/Footer/Footer";
import NavBar from "../componentes/NavBar/NavBar";

const InquilinosListar = () => {
    const [loading, setLoading] = useState(false);
    const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/inquilino/detalhar/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/inquilino/editar/" + id);
    }

    const Removefunction = (id) => {
        if (window.confirm('Tem certeza que seja remover?')) {
            setLoading(true);
            fetch("https://server-2.onrender.com/inquilino/deletar/" + id, {
                method: "DELETE"
            }).then((res) => {
                setLoading(false);
                alert('Removido com sucesso.')
                window.location.reload();
            }).catch((err) => {
                setLoading(false);
                console.log(err.message)
            })
        }
    }



    useEffect(() => {
        setLoading(true);
        fetch("https://server-2.onrender.com/inquilinos/listar").then((res) => {
            return res.json();
        }).then((resp) => {
            setLoading(false);
            empdatachange(resp);
        }).catch((err) => {
            setLoading(false);
            console.log(err.message);
        })
    }, [])
    return (

        <div className="server_animacao">
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
                        <div className="server_card">
                            <div className="server_card-title">
                                <h2 className="server_h2">Listar inquilinos</h2>
                            </div>
                            <div className="server_card-body">
                                <div className="divserver_btn">

                                    <Link to="/inquilino/adicionar" className="server_btn server_btn-success_add">Adicionar (+)</Link>

                                    &nbsp;
                                    <Link to="/corretores/listar" className="server_btn server_btn-success_rotas_1">Corretores</Link>

                                    &nbsp;
                                    <Link to="/formas_de_pagamento/listar" className="server_btn server_btn-success_rotas_2">Formas de pagamento</Link>

                                    &nbsp;
                                    <Link to="/imoveis_comerciais/listar" className="server_btn server_btn-success_rotas_1">Imóveis comerciais</Link>

                                    &nbsp;
                                    <Link to="/imoveis_residenciais/listar" className="server_btn server_btn-success_rotas_2">Imóveis residenciais</Link>

                                    &nbsp;
                                    <Link to="/inquilinos/listar" className="server_btn server_btn-success_rotas_1">Inquilinos</Link>

                                    <br></br><br></br>
                                </div>
                                <table className="server_table-bordered">
                                    <thead className="bg-dark server_text-white">
                                        <tr className="server_tr">
                                            <td className="server_td"><b className="server_b">ID</b></td>

                                            <td className="server_td"><b className="server_b">Nome</b></td>
                                            <td className="server_td"><b className="server_b">Salário</b></td>
                                            <td className="server_td"><b className="server_b">CPF</b></td>

                                            <td className="server_td"><b className="server_b">Opções</b></td>
                                        </tr>
                                    </thead>
                                    <tbody className="server_tbody">

                                        {empdata &&
                                            empdata.map(item => (
                                                <tr key={item.id}>

                                                    <td className="server_td">{item.id}</td>
                                                    <td className="server_td">{item.nome}</td>
                                                    <td className="server_td">{item.salario}</td>
                                                    <td className="server_td">{item.cpf}</td>

                                                    <td className="server_td"><button onClick={() => { LoadEdit(item.id) }} className="server_btn server_btn-success">Editar</button>
                                                        &nbsp;
                                                        <button onClick={() => { Removefunction(item.id) }} className="server_btn server_btn-danger">Remover</button>
                                                        &nbsp;
                                                        <button onClick={() => { LoadDetail(item.id) }} className="server_btn server_btn-primary">Detalhar</button>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </>
            )}
        </div>

    );
}

export default InquilinosListar;