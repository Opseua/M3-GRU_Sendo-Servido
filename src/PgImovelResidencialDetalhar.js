import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ImagemCasa from '../src/img/logo.jpg';



const PgImovelResidencialDetalhar = () => {
    const { Rota1id } = useParams();

    const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("https://server-1.onrender.com/rota_1/" + Rota1id).then((res) => {
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
               <br></br>
            <div className="card_row" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h2>Detalhe ROTA_1</h2>
                </div>
                
                <div className="card-body"></div>

                {empdata &&
                    <div>
                        
                        <img className="Imagemcasa" id="Imagemcasa" src={ImagemCasa} alt="Logo" />
                        <h5>ID: {empdata.id}</h5>
                        <h2>atributo_1: <b>{empdata.name}</b></h2>
                        <br></br>
                        <h3>INFORMAÇÕES ADICIONAIS</h3>
                        <br></br>
                        <h5>atributo_2: {empdata.email}</h5>
                        <h5>atributo_3: {empdata.phone}</h5>
                        <h5>atributo_3: {empdata.phone}</h5>
                        <h5>atributo_3: {empdata.phone}</h5>
                        <h5>atributo_3: {empdata.phone}</h5>
                        <h5>atributo_3: {empdata.phone}</h5>
                        <Link className="btn btn-danger" to="/">Voltar</Link>
                    </div>
                }
            </div>
            <br></br><br></br>
            </div>
            {/* </div>
            </div> */}
        </div >
    );
}

export default PgImovelResidencialDetalhar;