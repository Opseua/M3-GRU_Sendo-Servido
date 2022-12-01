import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Rota_1_Listar = () => {
    const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/rota_1/detalhar/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/rota_1/editar/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Tem certeza que deseja deletar?')) {
            fetch("https://server-1.onrender.com/rota_1/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removido com sucesso.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }




    useEffect(() => {
        fetch("https://server-1.onrender.com/rota_1/").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="container">
            <br></br>
            <div className="card">
                <div id="card-title" className="card-title">
                    <h2>Listar: ROTA_1</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="rota_1/adicionar" className="btn btn-success_add">Adicionar ROTA_1 (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>atributo_1</td>
                                <td>atributo_2</td>
                                <td>atributo_3</td>
                                <td>Opções</td>
                            </tr>
                        </thead>
                        <tbody>

                            {empdata &&
                                empdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td><a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Editar</a>
                                            &nbsp;
                                            <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Deletar</a>
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

export default Rota_1_Listar;