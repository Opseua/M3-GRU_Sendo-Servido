import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Pgcorretoradicionar = () => {

    const [id, idchange] = useState("");
    const [nome, nomechange] = useState("");
    const [cpf, cpfchange] = useState("");
    const [idade, idadechange] = useState("");
    const [salario, salariochange] = useState("");
    const [validation, valchange] = useState(false);


    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const empdata = { nome, cpf, idade, salario };


        fetch("https://server-2.onrender.com/corretores", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empdata)
        }).then((res) => {
            alert('Corretor adicionado.')
            navigate('/');
        }).catch((err) => {
            console.log(err.message)
        })

    }

    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>
                        <br></br>
                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2>Adicionar Corretor</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                    {/* Formulário opção: ID */}
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>

                                    {/* Formulário opção: NOME */}
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Nome</label>
                                            <input required value={nome} onMouseDown={e => valchange(true)} onChange={e => nomechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    {/* Formulário opção: CPF */}
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>CPF</label>
                                            <input type="number" required value={cpf} onMouseDown={e => valchange(true)} onChange={e => cpfchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    {/* Formulário opção: IDADE */}
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Idade</label>
                                            <input type="number" required value={idade} onMouseDown={e => valchange(true)} onChange={e => idadechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    {/* Formulário opção: SALÁRIO */}
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Salário</label>
                                            <input type="number" required value={salario} onMouseDown={e => valchange(true)} onChange={e => salariochange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>




                                    {/* Formulário botão: SALVAR e VOLTAR */}
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <br></br>
                                            <button className="btn btn-success" type="submit">Salvar</button>
                                            &nbsp;
                                            <Link to="/" className="btn btn-danger">Voltar</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default Pgcorretoradicionar;