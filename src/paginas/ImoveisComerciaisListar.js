// eslint-disable-next-line
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import Footer from "../componentes/Footer/Footer";
import NavBar from "../componentes/NavBar/NavBar";

const ImoveisComerciaisListar = () => {
    const [loading, setLoading] = useState(false);
    const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/imovel_comercial/detalhar/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/imovel_comercial/editar/" + id);
    }

    const Removefunction = (id) => {
        if (window.confirm('Tem certeza que seja remover?')) {
            setLoading(true);
            fetch("https://server-2.onrender.com/imovel_comercial/deletar/" + id, {
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
        fetch("https://server-2.onrender.com/imoveis_comerciais/listar").then((res) => {
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
                        <div className="card">
                            <div className="card-title">
                                <h2>Listar imóveis comerciais</h2>
                            </div>
                            <div className="card-body">
                                <div className="divbtn">

                                    <Link to="/imovel_comercial/adicionar" className="btn btn-success_add">Adicionar (+)</Link>

                                    &nbsp;
                                    <Link to="/corretores/listar" className="btn btn-success_rotas_1">Corretores</Link>

                                    &nbsp;
                                    <Link to="/formas_de_pagamento/listar" className="btn btn-success_rotas_2">Formas de pagamento</Link>

                                    &nbsp;
                                    <Link to="/imoveis_comerciais/listar" className="btn btn-success_rotas_1">Imóveis comerciais</Link>

                                    &nbsp;
                                    <Link to="/imoveis_residenciais/listar" className="btn btn-success_rotas_2">Imóveis residenciais</Link>

                                    &nbsp;
                                    <Link to="/inquilinos/listar" className="btn btn-success_rotas_1">Inquilinos</Link>

                                    <br></br><br></br>
                                </div>
                                <table className="table table-bordered">
                                    <thead className="bg-dark text-white">
                                        <tr>
                                            <td><b>ID</b></td>

                                            <td><b>Tipo de imóvel</b></td>
                                            <td><b>Endereço</b></td>
                                            <td><b>Salas</b></td>

                                            <td><b>Opções</b></td>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {empdata &&
                                            empdata.map(item => (
                                                <tr key={item.id}>

                                                    <td>{item.id}</td>
                                                    <td>{item.tipo_de_imovel}</td>
                                                    <td>{item.endereco}</td>
                                                    <td>{item.salas}</td>

                                                    <td><button onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Editar</button>
                                                        &nbsp;
                                                        <button onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remover</button>
                                                        &nbsp;
                                                        <button onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Detalhar</button>
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

export default ImoveisComerciaisListar;