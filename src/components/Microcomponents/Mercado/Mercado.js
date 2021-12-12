import React, { Fragment, useContext, useState } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import styled from "@emotion/styled";
import TablaContent from "../Tables/TablaContent";
import productosContext from "../../../context/productos/productosContext";


const TituloResumenMercado = styled.h2`
  font-size: 1.8rem;
  margin: 2rem 0 1rem 0;
  text-align: center;

  span {
    font-weight: bold;
  }
`;

function getModalStyle() {
  const top = 15;
  const left = 15;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%),`,
    overflowY: `scroll`,
    height: `70vh`
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 1500,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const Mercado = ({ mercado }) => {
  const contextProductos = useContext(productosContext);
  let { obtenerProductos } = contextProductos;

  let [validaModalMercado] = useState(true);

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();
  const handleOpen = () => {
    obtenerProductos(mercado._id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let nuevafecha = new Date(mercado.registro);
  return (
    <Fragment>
      <div className="card" style={{ width: "90%" }} onClick={handleOpen}>
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={mercado.urlFile} alt="url-file" />
        </div>
        <div className="card-content" style={{ border: "1px solid #efeded" }}>
          <span className="card-title activator grey-text text-darken-4">
            {mercado.NombreMercado}
            <i className="material-icons right">more_vert</i>
          </span>
          <p>
            <a href="!#">
              {" "}
              {`${nuevafecha.getDate()}/${
                nuevafecha.getMonth() + 1
              }/${nuevafecha.getFullYear()}  ${nuevafecha.getHours()}:${nuevafecha.getMinutes()}:${nuevafecha.getSeconds()}`}
            </a>
          </p>
        </div>
      </div>
      <Modal
        open={open}
        onClose={() => {
          handleClose();
        }}
      >
        <div style={modalStyle} className={`${classes.paper} modal-mercado`}>
          <TituloResumenMercado>
            <span>Id Mercado:</span> {mercado._id} <br />{" "}
            <span>Nombre Mercado:</span> {mercado.NombreMercado} <br />{" "}
            <span>Fecha Registro:</span>
            {`${nuevafecha.getDate()}/${
              nuevafecha.getMonth() + 1
            }/${nuevafecha.getFullYear()}  ${nuevafecha.getHours()}:${nuevafecha.getMinutes()}:${nuevafecha.getSeconds()}`}
          </TituloResumenMercado>

          <div className="text-center">
            <h3>Factura Indexada</h3>
            <img
              className="activator"
              style={{ width: "900px", height: "auto" }}
              src={mercado.urlFile}
              alt="url-file"
            />
          </div>

          <h2 className="text-center"> Productos </h2>
          <TablaContent validaModalMercado={validaModalMercado} />
        </div>
      </Modal>
    </Fragment>
  );
};

export default Mercado;
