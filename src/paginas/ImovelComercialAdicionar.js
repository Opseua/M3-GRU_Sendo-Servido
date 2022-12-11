// eslint-disable-next-line
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import Footer from "../componentes/Footer/Footer";
import NavBar from "../componentes/NavBar/NavBar";

const ImovelComercialAdicionar = () => {
    const [loading, setLoading] = useState(false);
    const [id, idchange] = useState("");
    const [tipo_de_imovel, tipo_de_imovelchange] = useState("");
    const [endereco, enderecochange] = useState("");
    const [salas, salaschange] = useState("");
    const [banheiros, banheiroschange] = useState("");
    const [garagens, garagenschange] = useState("");
    const [tipo_de_contrato, tipo_de_contratochange] = useState("");
    const [valor_do_imovel, valor_do_imovelchange] = useState("");
    const [valor_do_condominio, valor_do_condominiochange] = useState("");
    const [validation, valchange] = useState(false);

    const navigate = useNavigate();
    const handlesubmit = (e) => {
        e.preventDefault();
        const empdata = { tipo_de_imovel, endereco, salas, banheiros, garagens, tipo_de_contrato, valor_do_imovel, valor_do_condominio };

        setLoading(true);
        fetch("https://server-2.onrender.com/imovel_comercial/adicionar", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empdata)
        }).then((res) => {
            setLoading(false);
            alert('Adicionado com sucesso.')
            navigate('/imoveis_comerciais/listar');
        }).catch((err) => {
            setLoading(false);
            console.log(err.message)
        })

    }

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
                    <div className="row">
                        <div className="offset-lg-3 col-lg-6">
                            <form className="container" onSubmit={handlesubmit}>

                                <div className="card" style={{ "textAlign": "left" }}>
                                    <div className="card-title">
                                        <h2>Adicionar imóvel comercial</h2>
                                    </div>
                                    <div className="card-body">

                                        <div className="row">

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label><b>ID</b></label>
                                                    <input value={id} disabled="disabled" className="form-control"></input>
                                                </div>
                                            </div>

                                            {/* OPCAO: Tipo de imóvel */}
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label><b>Tipo de imóvel</b></label>
                                                    <input required value={tipo_de_imovel} onMouseDown={e => valchange(true)} onChange={e => tipo_de_imovelchange(e.target.value)} className="form-control"></input>
                                                </div>
                                            </div>

                                            {/* OPCAO: Endereço */}
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label><b>Endereço</b></label>
                                                    <input required value={endereco} onMouseDown={e => valchange(true)} onChange={e => enderecochange(e.target.value)} className="form-control"></input>
                                                </div>
                                            </div>

                                            {/* OPCAO: Salas */}
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label><b>Salas</b></label>
                                                    <input required value={salas} onMouseDown={e => valchange(true)} onChange={e => salaschange(e.target.value)} className="form-control"></input>
                                                </div>
                                            </div>

                                            {/* OPCAO: Banheiros */}
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label><b>Banheiros</b></label>
                                                    <input required value={banheiros} onMouseDown={e => valchange(true)} onChange={e => banheiroschange(e.target.value)} className="form-control"></input>
                                                </div>
                                            </div>

                                            {/* OPCAO: Garagens */}
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label><b>Garagens</b></label>
                                                    <input required value={garagens} onMouseDown={e => valchange(true)} onChange={e => garagenschange(e.target.value)} className="form-control"></input>
                                                </div>
                                            </div>


                                            {/* OPCAO: Tipo de contrato */}
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label><b>Tipo de contrato</b></label>
                                                    <input required value={tipo_de_contrato} onMouseDown={e => valchange(true)} onChange={e => tipo_de_contratochange(e.target.value)} className="form-control"></input>
                                                </div>
                                            </div>

                                            {/* OPCAO: Valor do imóvel */}
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label><b>Valor do imóvel</b></label>
                                                    <input required value={valor_do_imovel} onMouseDown={e => valchange(true)} onChange={e => valor_do_imovelchange(e.target.value)} className="form-control"></input>
                                                </div>
                                            </div>

                                            {/* OPCAO: Valor do condomínio */}
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label><b>Valor do condomínio</b></label>
                                                    <input required value={valor_do_condominio} onMouseDown={e => valchange(true)} onChange={e => valor_do_condominiochange(e.target.value)} className="form-control"></input>
                                                </div>
                                            </div>

                                            {/* Botão SALVAR e VOLTAR */}
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <br></br>
                                                    <button className="btn btn-success" type="submit">Salvar</button>
                                                    &nbsp;
                                                    <Link to="/imoveis_comerciais/listar" className="btn btn-danger">Voltar</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <Footer />
                </>
            )}
        </div>

    );
}

export default ImovelComercialAdicionar;