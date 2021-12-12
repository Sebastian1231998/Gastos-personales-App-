import React, { Fragment, useContext, useEffect } from "react";
import mercadoContext from "../../context/mercado/mercadoContext";
import Alerta from "../Microcomponents/Alerta/Alerta";
import Mercado from "../Microcomponents/Mercado/Mercado";

const MisMercados = () => {
  let localMercado = useContext(mercadoContext);

  let { mercados, muestraExitoMercado, obtenerMercados } = localMercado;

  useEffect(() => {
    obtenerMercados();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {muestraExitoMercado ? (
        <div className="container">
          ¿
          <Alerta
            mensaje="Has Creado un nuevo mercado con exito"
            tipo="exito"
          />
        </div>
      ) : null}
      <h2 className="text-center">Mis Mercados</h2>

      <div
        className="container"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}
      >
        {mercados.map((mercadoList) => (
          <Mercado mercado={mercadoList} key={mercadoList._id} />
        ))}
      </div>
    </Fragment>
  );
};

export default MisMercados;
