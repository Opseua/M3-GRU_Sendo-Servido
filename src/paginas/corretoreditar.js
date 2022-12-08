import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CorretorEditar = () => {

    const [loading, setLoading] = useState(false);
    const [color, setColor] = useState("#21d4fd");

    

    const { empid } = useParams();

    //const [empdata, empdatachange] = useState({});

    useEffect(() => {
        setLoading(true);
        fetch("https://server-2.onrender.com/corretor/editar/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            setLoading(false);
            idchange(resp.id);
            nomechange(resp.nome);
            cpfchange(resp.cpf);
            idadechange(resp.idade);
            salariochange(resp.salario);
        }).catch((err) => {
            setLoading(false);
            console.log(err.message);
        })
    }, []);

    const [id, idchange] = useState("");
    const [nome, nomechange] = useState("");
    const [cpf, cpfchange] = useState("");
    const [idade, idadechange] = useState("");
    const [salario, salariochange] = useState("");
    const [validation, valchange] = useState(false);


    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const empdata = { id, nome, cpf, idade, salario };

        setLoading(false);
        fetch("https://server-2.onrender.com/corretor/editar/" + empid, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empdata)
        }).then((res) => {
            setLoading(false);
            
            const notify = () => toast("Wow so easy!");
            
            alert('Editado com sucesso.')




            





            navigate('/corretores/listar/');
        }).catch((err) => {
            setLoading(false);
            console.log(err.message)
        })

    }
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

                    <div className="row">
                        <div className="offset-lg-3 col-lg-6">
                            <form className="container" onSubmit={handlesubmit}>

                                <div className="card" style={{ "textAlign": "left" }}>
                                    <div className="card-title">
                                        <h2>Editar corretor</h2>
                                    </div>
                                    <div className="card-body">

                                        <div className="row">

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label><b>ID</b></label>
                                                    <input value={id} disabled="disabled" className="form-control"></input>
                                                </div>
                                            </div>

                                            {/* OPCAO: Nome */}
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label><b>Nome</b></label>
                                                    <input required value={nome} onMouseDown={e => valchange(true)} onChange={e => nomechange(e.target.value)} className="form-control"></input>
                                                </div>
                                            </div>

                                            {/* OPCAO: CPF */}
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label><b>CPF</b></label>
                                                    <input required value={cpf} onMouseDown={e => valchange(true)} onChange={e => cpfchange(e.target.value)} className="form-control"></input>
                                                </div>
                                            </div>

                                            {/* OPCAO: Idade */}
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label><b>Idade</b></label>
                                                    <input required value={idade} onMouseDown={e => valchange(true)} onChange={e => idadechange(e.target.value)} className="form-control"></input>
                                                </div>
                                            </div>

                                            {/* OPCAO: Salário */}
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label><b>Salário</b></label>
                                                    <input required value={salario} onMouseDown={e => valchange(true)} onChange={e => salariochange(e.target.value)} className="form-control"></input>
                                                </div>
                                            </div>









                                            {/* Botão SALVAR e VOLTAR */}
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <br></br>
                                                    <button className="btn btn-success" type="submit">Salvar</button>
                                                    &nbsp;
                                                    <Link to="/corretores/listar" className="btn btn-danger">Voltar</Link>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </form>

                        </div>
                    </div>
                </div>


            }
        </div>
    );
}

export default CorretorEditar;