// eslint-disable-next-line
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import swal from 'sweetalert';
import Footer from "../componentes/Footer/Footer";
import NavBar from "../componentes/NavBar/NavBar";
import '../css/style_server.css';

const CorretoresListar = () => {
  const [loading, setLoading] = useState(false);
  const [empdata, empdatachange] = useState(null);
  const navigate = useNavigate();

  const LoadDetail = (id) => {
    navigate("/corretor/detalhar/" + id);
  };
  const LoadEdit = (id) => {
    navigate("/corretor/editar/" + id);
  };

  const Removefunction = (id) => {

    swal({
      title: "Remover",
      text: "Tem certeza que deseja apagar?",
    }).then((value) => {
      if (!value == '') {
  
        setLoading(true);
        fetch("https://server-2.onrender.com/corretor/deletar/" + id, {
          method: "DELETE",
        })
          .then((res) => {
            setLoading(false);

            
            swal("Concluído", "Removido com sucesso", "success");

      


          })
          .catch((err) => {
            setLoading(false);
            console.log(err.message);
          });
      }
    });
  }

  useEffect(() => {
    setLoading(true);
    fetch("https://server-2.onrender.com/corretores/listar")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setLoading(false);
        empdatachange(resp);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
      });
  }, []);
  return (
    <div className="server_animacao">
      {loading ? (
        <ClipLoader
          className="server_animacao"
          color="#21d4fd"
          size={150}
          aria-label="Loading Spinner"
          data-
          testid="carregador"
        />
      ) : (
        <>
          <NavBar />
          <div className="server_container">
            <div className="server_card">
              <div className="server_card-title">
                <h2>Listar corretores</h2>
              </div>
              <div className="server_card-body">
                <div className="server_divbtn">
                  <Link to="/corretor/adicionar" className="btn btn-success_add">Adicionar (+)</Link>
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
                  <br></br>
                  <br></br>
                </div>
                <table className="table table-bordered">
                  <thead className="bg-dark text-white">
                    <tr>
                      <td>
                        <b>ID</b>
                      </td>

                      <td>
                        <b>Nome</b>
                      </td>
                      <td>
                        <b>CPF</b>
                      </td>
                      <td>
                        <b>Idade</b>
                      </td>

                      <td>
                        <b>Opções</b>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    {empdata &&
                      empdata.map((item) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.nome}</td>
                          <td>{item.cpf}</td>
                          <td>{item.idade}</td>

                          <td>
                            <button onClick={() => { LoadEdit(item.id); }} className="btn btn-success">Editar</button>
                            &nbsp;
                            <button onClick={() => { Removefunction(item.id); }} className="btn btn-danger">Remover</button>
                            &nbsp;
                            <button onClick={() => { LoadDetail(item.id); }} className="btn btn-primary">Detalhar</button>
                          </td>
                        </tr>
                      ))}
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
};

export default CorretoresListar;
