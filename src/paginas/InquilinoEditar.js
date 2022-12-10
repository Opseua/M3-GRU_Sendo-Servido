// eslint-disable-next-line

import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const InquilinoEditar = () => {

    const [loading, setLoading] = useState(false);
    const { empid } = useParams();

    useEffect(() => {
        setLoading(true);
        fetch("https://server-2.onrender.com/inquilino/editar/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            setLoading(false);
            idchange(resp.id);
            nomechange(resp.nome);
            salariochange(resp.salario);
            cpfchange(resp.cpf);
            idadechange(resp.idade);
            profissaochange(resp.profissao);
            contatochange(resp.contato);
            tempo_como_inquilinochange(resp.tempo_como_inquilino);
        }).catch((err) => {
            setLoading(false);
            console.log(err.message);
        })
    }, [empid]);

    const [id, idchange] = useState("");
    const [nome, nomechange] = useState("");
    const [salario, salariochange] = useState("");
    const [cpf, cpfchange] = useState("");
    const [idade, idadechange] = useState("");
    const [profissao, profissaochange] = useState("");
    const [contato, contatochange] = useState("");
    const [tempo_como_inquilino, tempo_como_inquilinochange] = useState("");
    const [validation, valchange] = useState(false);

    console.log(validation);

    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const empdata = { id, nome, salario, cpf, idade, profissao, contato, tempo_como_inquilino };

        setLoading(true);
        fetch("https://server-2.onrender.com/inquilino/editar/" + empid, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empdata)
        }).then((res) => {
            setLoading(false);
            alert('Editado com sucesso.')
            navigate('/inquilinos/listar/');
        }).catch((err) => {
            setLoading(false);
            console.log(err.message)
        })

    }
    return (

        <div className="animacao">
            {loading ?
                <  ClipLoader
                    color="#21d4fd"
                    size={150}
                    aria-label="Loading Spinner"
                    data- testid="carregador"
                /> :

                <div>

                    <div className="row">
                        <div className="offset-lg-3 col-lg-6">
                            <form className="container" onSubmit={handlesubmit}>
                            <h1 id="titulo" className="titulo">DREAMS IMOBILIÁRIA</h1>
                                <div className="card" style={{ "textAlign": "left" }}>
                                    <div className="card-title">
                                        <h2>Editar inquilino</h2>
                                    </div>
                                    <div className="card-body">

                                        <div className="row">

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label><b>ID</b></label>
                                                    <input value={id} disabled="disabled" className="form-control"></input>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label><b>Nome</b></label>
                                                    <input required value={nome} onMouseDown={e => valchange(true)} onChange={e => nomechange(e.target.value)} className="form-control"></input>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label><b>Salário</b></label>
                                                    <input required value={salario} onMouseDown={e => valchange(true)} onChange={e => salariochange(e.target.value)} className="form-control"></input>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label><b>CPF</b></label>
                                                    <input required value={cpf} onMouseDown={e => valchange(true)} onChange={e => cpfchange(e.target.value)} className="form-control"></input>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label><b>Idade</b></label>
                                                    <input required value={idade} onMouseDown={e => valchange(true)} onChange={e => idadechange(e.target.value)} className="form-control"></input>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label><b>Profissão</b></label>
                                                    <input required value={profissao} onMouseDown={e => valchange(true)} onChange={e => profissaochange(e.target.value)} className="form-control"></input>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label><b>Contato</b></label>
                                                    <input required value={contato} onMouseDown={e => valchange(true)} onChange={e => contatochange(e.target.value)} className="form-control"></input>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label><b>Tempo como inquilino</b></label>
                                                    <input required value={tempo_como_inquilino} onMouseDown={e => valchange(true)} onChange={e => tempo_como_inquilinochange(e.target.value)} className="form-control"></input>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <br></br>
                                                    <button className="btn btn-success" type="submit">Salvar</button>
                                                    &nbsp;
                                                    <Link to="/inquilinos/listar" className="btn btn-danger">Voltar</Link>
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

export default InquilinoEditar;
