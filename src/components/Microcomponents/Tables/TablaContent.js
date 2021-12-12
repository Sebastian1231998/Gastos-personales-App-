import React, { Fragment, useEffect, useState, useContext} from "react";
import Paginador from "../ServiciosPublicos/Paginador";
import transaccionContext from "../../../context/transacciones/transaccionContext";

const TablaContent = ({
  validaModal,
  handleOpen,
  validaModalMercado,
  validaTransacciones
}) => {
  let [totalKeys, modificarTotalKeys] = useState([]);
  let [tablaState, modificarTablaState] = useState([]);

  let transaccionesLocal = useContext(transaccionContext);
  let { transacciones, obtenerTransacciones } = transaccionesLocal;

  useEffect(() => {
    if (validaModalMercado) {
      let productosMercado = JSON.parse(
        localStorage.getItem("productosMercado")
      );
      if (!productosMercado) {
        productosMercado = [];
      }
      if (productosMercado.length > 0) {
        extraeKey(productosMercado);
      }
    }

    if (validaTransacciones) {
      obtenerTransacciones();

      if (transacciones.length > 0) {
        extraeKey(transacciones);
      }
    }

    // eslint-disable-next-line
  }, [tablaState]);

  const extraeKey = (abstractContent) => {
    let keys = Object.keys(abstractContent[0]);
    modificarTotalKeys(keys.filter((key) => key !== "__v"));
    modificarTablaState(abstractContent);
  };

  return (
    <Fragment>
      <table>
        <thead className="tabla-publicos">
          <tr>
            {totalKeys.length > 0
              ? totalKeys.map((value) => {
                  return <th key={value}>{value}</th>;
                })
              : null}
          </tr>
        </thead>

        <tbody>
          {tablaState.map((item) => (
            <tr>
              {totalKeys.map((key) => (
                <td>{item[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {validaModal ? (
        <Paginador />
      ) : (
        <div className="ver-mas" data-tip data-for="add-information">
          <a
            href="#!"
            className="btn-floating btn-large waves-effect waves-light blue darken-1"
            onClick={handleOpen}
          >
            <i className="material-icons">add</i>
          </a>
        </div>
      )}
    </Fragment>
  );
};

export default TablaContent;
