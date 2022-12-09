import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const ImovelResidencialEditar = () => {

    const [loading, setLoading] = useState(false);
    const [color, setColor] = useState("#21d4fd");

    const { empid } = useParams();

    //const [empdata, empdatachange] = useState({});

    useEffect(() => {
        setLoading(true);
        fetch("https://server-2.onrender.com/imovel_residencial/editar/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            setLoading(false);
            idchange(resp.id);
            tipo_de_imovelchange(resp.tipo_de_imovel);
            areachange(resp.area);
            quartoschange(resp.quartos);
            banheiroschange(resp.banheiros);
            garagenschange(resp.garagens);
            enderecochange(resp.endereco);
            tipo_de_contratochange(resp.tipo_de_contrato);
            valor_do_imovelchange(resp.valor_do_imovel);
            valor_do_condominiochange(resp.valor_do_condominio);
        }).catch((err) => {
            setLoading(false);
            console.log(err.message);
        })
    }, []);

    const [id, idchange] = useState("");
    const [tipo_de_imovel, tipo_de_imovelchange] = useState("");
    const [area, areachange] = useState("");
    const [quartos, quartoschange] = useState("");
    const [banheiros, banheiroschange] = useState("");
    const [garagens, garagenschange] = useState("");
    const [endereco, enderecochange] = useState("");
    const [tipo_de_contrato, tipo_de_contratochange] = useState("");
    const [valor_do_imovel, valor_do_imovelchange] = useState("");
    const [valor_do_condominio, valor_do_condominiochange] = useState("");
    const [validation, valchange] = useState(false);


    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const empdata = { id, tipo_de_imovel, area, quartos, banheiros, garagens, endereco, tipo_de_contrato, valor_do_imovel, valor_do_condominio };

        setLoading(true);
        fetch("https://server-2.onrender.com/imovel_residencial/editar/" + empid, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empdata)
        }).then((res) => {
            setLoading(false);
            alert('Editado com sucesso.')
            navigate('/imoveis_residenciais/listar/');
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
                                        <h2>Editar imóvel residencial</h2>
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

                                            {/* OPCAO: Área */}
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label><b>Área</b></label>
                                                    <input required value={area} onMouseDown={e => valchange(true)} onChange={e => areachange(e.target.value)} className="form-control"></input>
                                                </div>
                                            </div>

                                            {/* OPCAO: Quartos */}
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label><b>Quartos</b></label>
                                                    <input required value={quartos} onMouseDown={e => valchange(true)} onChange={e => quartoschange(e.target.value)} className="form-control"></input>
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

                                            {/* OPCAO: Endereço */}
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label><b>Endereco</b></label>
                                                    <input required value={endereco} onMouseDown={e => valchange(true)} onChange={e => enderecochange(e.target.value)} className="form-control"></input>
                                                </div>
                                            </div>

                                            {/* OPCAO: Tipo de contrato */}
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label><b>Tipo de contrato</b></label>
                                                    <input required value={tipo_de_contrato} onMouseDown={e => valchange(true)} onChange={e => tipo_de_contratochange(e.target.value)} className="form-control"></input>
                                                </div>
                                            </div>

                                            {/* OPCAO: Tipo de imóvel */}
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label><b>Tipo de imóvel</b></label>
                                                    <input required value={tipo_de_imovel} onMouseDown={e => valchange(true)} onChange={e => tipo_de_imovelchange(e.target.value)} className="form-control"></input>
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
                                                    <Link to="/imoveis_residenciais/listar" className="btn btn-danger">Voltar</Link>
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

export default ImovelResidencialEditar;