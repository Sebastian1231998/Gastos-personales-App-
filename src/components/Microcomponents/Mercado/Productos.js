import React, { useContext, useState, useEffect, Fragment } from "react";

import Producto from "./Producto";
import Alerta from "../Alerta/Alerta";
import styled from "@emotion/styled";
import productosContext from "../../../context/productos/productosContext";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import mercadoContext from "../../../context/mercado/mercadoContext";
import transaccionContext from "../../../context/transacciones/transaccionContext";
import presupuestoContext from "../../../context/presupuesto/presupuestoContext";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 800,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const CollectionInfo = styled.div`
  max-width: 47%;
  margin-top: 4.5rem;
  border: none;
`;

const DivResumen = styled.div`
  padding: 0rem 1rem;
`;
const Presumen = styled.p`
  font-size: 1.5rem;
  color: #931dff;
  font-weight: bold;

  span {
    color: black;
  }

  .precio-final {
    font-size: 2rem;
  }
`;

const Productos = ({ productos, id_mercado }) => {
  let precio_final = 0;
  let cantidad_frutas = 0;
  let cantidad_items = 0;
  let cantidad_carnes = 0;
  let cantidad_aseo = 0;
  let cantidad_granos = 0;
  let cantidad_familiar = 0;

  let productosLocal = useContext(productosContext);
  let { estado, agregarProductos, limpiarEstado } = productosLocal;
  let [muestraError, actualizaError] = useState(false);

  const mercadoData = useContext(mercadoContext);
  let { limpiarDataMercado } = mercadoData;

  const transaccion = useContext(transaccionContext);
  let { crearTransaccion } = transaccion;

  const presupuestoLocal = useContext(presupuestoContext);
  let { id, presupuesto, obtenerPresupuesto, actualizarPresupuesto } = presupuestoLocal;

  // MODAL

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const 
  classes = useStyles();
  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (estado === "correcto") {
      handleOpen();
    }

    if (JSON.parse(localStorage.getItem("estado"))) {
      let estadoStorage = JSON.parse(localStorage.getItem("estado"));

      if (estadoStorage.estado === "correcto") {
        handleOpen();
      }
    }

    obtenerPresupuesto();
 
  }, [estado]);

  const agregarProductosLocal = (e) => {
    e.preventDefault();

    let mercadoLocal = JSON.parse(localStorage.getItem("mercado"));
    let productosLocal = JSON.parse(localStorage.getItem("productos"));

    if (!mercadoLocal || !productosLocal) {
      actualizaError(true);
      return;
    }
    actualizaError(false);
    agregarProductos(productosLocal, mercadoLocal.mercado._id);

    localStorage.setItem("estado", JSON.stringify({ estado: "correcto" }));
  };

  const limpiarData = () => {
    let mercadoLocal = JSON.parse(localStorage.getItem("mercado"));

    let productosLocal = JSON.parse(localStorage.getItem("productos"));
    if (mercadoLocal || productosLocal) {
      localStorage.setItem("mercado", JSON.stringify({}));
      localStorage.setItem("productos", JSON.stringify([]));
      localStorage.setItem("estado", JSON.stringify({}));
    }

    limpiarEstado();
    limpiarDataMercado();
    crearMercadoTransaccion();
  };

  const crearMercadoTransaccion = () => {


    
    let transaccion = {
      valor_transaccion: precio_final,
      tipo_transaccion: "Gasto",
      servicio: "Mercado",
      presupuesto_antes: presupuesto,
      presupuesto_actualizado: presupuesto - precio_final,
      referencia_transaccion: id_mercado
    };

    crearTransaccion(transaccion);

    actualizarPresupuesto(id, transaccion.presupuesto_actualizado)

  };

  if (productos.length === 0)
    return (
      <CollectionInfo className="collection" style={{ marginTop: "4.5rem" }}>
        <Alerta mensaje="No hay Productos Agregados" tipo="info" />
      </CollectionInfo>
    );

  return (
    <Fragment>
      <div className="collection" style={{ marginTop: "4.5rem" }}>
        {muestraError ? (
          <Alerta mensaje="Ha ocurrido un error" tipo="error" />
        ) : null}
        {productos.map((producto) => {
          precio_final += parseInt(producto.precio);
          cantidad_items += parseInt(producto.cantidad);

          switch (producto.tipo) {
            case "Frutas y verduras":
              cantidad_frutas++;
              break;

            case "Carnes":
              cantidad_carnes++;
              break;

            case "Aseo":
              cantidad_aseo++;
              break;

            case "Granos":
              cantidad_granos++;
              break;

            case "Canasta Familiar":
              cantidad_familiar++;
              break;

            default:
              break;
          }

          return <Producto producto={producto} />;
        })}

        <DivResumen>
          <h3 className="text-center negrilla">Resumen</h3>

          <Presumen>
            Cantidad Items: <span>{cantidad_items}</span>
          </Presumen>

          <hr className="resumen-mercado" />
          <Presumen>
            Cantidad Items Frutas: <span>{cantidad_frutas}</span>
          </Presumen>
          <hr className="resumen-mercado" />
          <Presumen>
            Cantidad Items Carnes: <span>{cantidad_carnes}</span>
          </Presumen>
          <hr className="resumen-mercado" />
          <Presumen>
            Cantidad Items Aseo: <span>{cantidad_aseo}</span>
          </Presumen>
          <hr className="resumen-mercado" />
          <Presumen>
            Cantidad Items Granos: <span>{cantidad_granos}</span>
          </Presumen>
          <hr className="resumen-mercado" />
          <Presumen>
            Cantidad Items Canasta Familiar: <span>{cantidad_familiar}</span>
          </Presumen>
          <hr className="resumen-mercado" />
          <Presumen>
            Cantidad Items: <span>{cantidad_items}</span>
          </Presumen>
          <hr className="resumen-mercado" />
          <Presumen style={{ textAlign: "right" }}>
            Precio Final: <span className="precio-final">${precio_final}</span>
          </Presumen>
        </DivResumen>

        <input
          type="submit"
          className="button_form text-white"
          value="Agregar Productos"
          onClick={agregarProductosLocal}
        />
      </div>

      <Modal open={open}>
        <div style={modalStyle} className={classes.paper}>
          <h2 className="text-center" style={{ fontSize: "2rem" }}>
            Modificacion Presupuesto
          </h2>

          <p style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
            <span style={{ fontSize: "1.5rem", margin: "1rem", color: "blue" }}>
              Valor Presupuesto:
            </span>
            ${presupuesto}
          </p>
          <hr className="resumen-mercado" />
          <p style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
            <span style={{ fontSize: "1.5rem", margin: "1rem", color: "blue" }}>
              Valor Gasto Mercado:
            </span>
            ${precio_final}
          </p>
          <hr className="resumen-mercado" />
          <p style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
            <span style={{ fontSize: "1.5rem", margin: "1rem", color: "blue" }}>
              Valor Presupuesto con descuento:
            </span>
            ${presupuesto - precio_final}
          </p>
          <hr className="resumen-mercado" />
          <p
            style={{
              fontSize: "1.8rem",
              fontWeight: "bold",
              textAlign: "right"
            }}
          >
            <span style={{ fontSize: "1.5rem", margin: "1rem", color: "blue" }}>
              Valor final Presupuesto:{" "}
            </span>
            ${presupuesto - precio_final}
          </p>

          <Link
            className="button"
            onClick={limpiarData}
            to="../mis-mercados"
            style={{ padding: "1rem" }}
          >
            Ir a Mis Mercados
          </Link>
        </div>
      </Modal>
    </Fragment>
  );
};

export default Productos;
