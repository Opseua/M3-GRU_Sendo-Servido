import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";



const Pgcorretordetalhar = () => {
    const { empid } = useParams();

    const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("https://server-2.onrender.com/corretor/detalhar/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>
            {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

               <div className="container">
                
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

                        {/* Botão VOLTAR */}
                        <Link to="/corretores/listar" className="btn btn-danger">Voltar</Link>
                    </div>
                }
            </div>
            </div>
            {/* </div>
            </div> */}
        </div >
    );
}

export default Pgcorretordetalhar;