import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const FormasDePagamentoListar = () => {
    const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/forma_de_pagamento/detalhar/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/forma_de_pagamento/editar/" + id);
    }

    {/* Função REMOVER INFORMAÇÃO */ }
    const Removefunction = (id) => {
        if (window.confirm('Tem certeza que seja remover?')) {
            fetch("https://server-2.onrender.com/forma_de_pagamento/deletar/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removido com sucesso.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }



    {/* Função LISTAR INFORMAÇÃO */ }
    useEffect(() => {
        fetch("https://server-2.onrender.com/formas_de_pagamento/listar").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Listar formas de pagamento</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">

                        {/* Botão ADICIONAR (+) */}
                        <Link to="/forma_de_pagamento/adicionar" className="btn btn-success_add">Adicionar (+)</Link>

                        &nbsp;
                        {/* Botão para rota CORRETORES */}
                        <Link to="/corretores/listar" className="btn btn-success_rotas">Corretores</Link>

                        &nbsp;
                        {/* Botão para rota FORMAS DE PAGAMENTO */}
                        <Link to="/formas_de_pagamento/listar" className="btn btn-success_rotas">Formas de pagamento</Link>

                        &nbsp;
                        {/* Botão para rota IMÓVEIS COMERCIAIS */}
                        <Link to="/imoveis_comerciais/listar" className="btn btn-success_rotas">Imóveis comerciais</Link>

                        &nbsp;
                        {/* Botão para rota IMÓVEIS RESIDENCIAIS */}
                        <Link to="/imoveis_residenciais/listar" className="btn btn-success_rotas">Imóveis residenciais</Link>

                        &nbsp;
                        {/* Botão para rota INQUILINOS */}
                        <Link to="/inquilinos/listar" className="btn btn-success_rotas">Inquilinos</Link>
                        
                        <br></br><br></br>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td><b>ID</b></td>

                                {/* Nome das colunas */}
                                <td><b>Método</b></td>
                                <td><b>Conta</b></td>
                                <td><b>Limite de depósito</b></td>

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
                                        <td>{item.metodo}</td>
                                        <td>{item.conta}</td>
                                        <td>{item.limite_de_deposito}</td>

                                        {/* Botão EDITAR, REMOVER e DETALHAR */}
                                        <td><a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Editar</a>
                                            &nbsp;
                                            <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remover</a>
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
    );
}

export default FormasDePagamentoListar;