// eslint-disable-next-line

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import '../css/style_server.css';


const CorretoresListar = () => {

    const [loading, setLoading] = useState(false);

    const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/corretor/detalhar/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/corretor/editar/" + id);
    }



    // Função REMOVER INFORMAÇÃO //
    const Removefunction = (id) => {
        if (window.confirm('Tem certeza que seja remover?')) {
            setLoading(true);
            fetch("https://server-2.onrender.com/corretor/deletar/" + id, {
                method: "DELETE"
            }).then((res) => {
                setLoading(false);
            }).catch((err) => {
                setLoading(false);
                console.log(err.message)
            })
        }
    }



    // Função LISTAR INFORMAÇÃO //
    useEffect(() => {

        setLoading(true);
        fetch("https://server-2.onrender.com/corretores/listar").then((res) => {
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


        <div className="animacao">
            {loading ?
                <  ClipLoader
                    color="#21d4fd"
                    size={150}
                    aria-label="Loading Spinner"
                    data- testid="carregador"
                /> :


                <div className="container">
                    <h1 id="titulo" className="titulo">DREAMS IMOBILIÁRIA</h1>
                    <div className="card">
                        <div className="card-title">
                            <h2>Listar corretores</h2>

                        </div>
                        <div className="card-body">
                            <div className="divbtn">

                                {/* Botão ADICIONAR (+) */}
                                <Link to="/corretor/adicionar" className="btn btn-success_add">Adicionar (+)</Link>

                                &nbsp;
                                {/* Botão para rota CORRETORES */}
                                <Link to="/corretores/listar" className="btn btn-success_rotas_1">Corretores</Link>

                                &nbsp;
                                {/* Botão para rota FORMAS DE PAGAMENTO */}
                                <Link to="/formas_de_pagamento/listar" className="btn btn-success_rotas_2">Formas de pagamento</Link>

                                &nbsp;
                                {/* Botão para rota IMÓVEIS COMERCIAIS */}
                                <Link to="/imoveis_comerciais/listar" className="btn btn-success_rotas_1">Imóveis comerciais</Link>

                                &nbsp;
                                {/* Botão para rota IMÓVEIS RESIDENCIAIS */}
                                <Link to="/imoveis_residenciais/listar" className="btn btn-success_rotas_2">Imóveis residenciais</Link>

                                &nbsp;
                                {/* Botão para rota INQUILINOS */}
                                <Link to="/inquilinos/listar" className="btn btn-success_rotas_1">Inquilinos</Link>

                                <br></br><br></br>
                            </div>
                            <table className="table table-bordered">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <td><b>ID</b></td>

                                        {/* Nome das colunas */}
                                        <td><b>Nome</b></td>
                                        <td><b>CPF</b></td>
                                        <td><b>Idade</b></td>

                                        {/* Coluna padrao */}
                                        <td><b>Opções</b></td>
                                    </tr>
                                </thead>
                                <tbody>

                                    {empdata &&
                                        empdata.map(item => (
                                            <tr key={item.id}>


                                                {/* Informação das colunas */}
                                                <td>{item.id}</td>
                                                <td>{item.nome}</td>
                                                <td>{item.cpf}</td>
                                                <td>{item.idade}</td>

                                                {/* Botão EDITAR, REMOVER e DETALHAR */}
                                                <td><a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Editar</a>
                                                    &nbsp;
                                                    <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger" >Remover</a>
                                                    &nbsp;
                                                    <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Detalhar</a>
                                                </td>
                                            </tr>
                                        ))
                                    }

                                </tbody>

                            </table>
                        </div>
                    </div>

                </div>


            }
        </div>
    );
}

export default CorretoresListar;
