import React, { Fragment, useState, useEffect, useContext } from "react";
import Formulario from "../Microcomponents/Mercado/Formulario";
import Productos from "../Microcomponents/Mercado/Productos";
import styled from "@emotion/styled";
import Alerta from "../Microcomponents/Alerta/Alerta";
import mercadoContext from "../../context/mercado/mercadoContext";
import FormMercado from "../Microcomponents/Mercado/FormMercado";


const FlexProductos = styled.div`

display:flex

`;
const ContentProducto = styled.div`
  padding: 0rem 2rem;
`;

const ContentFormulario = styled.div`
  margin-right: 2rem !important;
`;

const TituloResumenMercado = styled.h2`
  font-size: 1.8rem;
  margin: 2rem 0 1rem 0;
  text-align: center;

  span {
    font-weight: bold;
  }
`;
const CrearMercado = () => {
  let productosActuales = JSON.parse(localStorage.getItem("productos"));

  if (!productosActuales) {
    productosActuales = [];
  }

  const [productos, agregaProducto] = useState(productosActuales);
  const [preloadImage, modificarPreloadImage] = useState("");

  const [error, muestraError] = useState(false);
  const [info, mercadoInfo] = useState(false);
  //context mercado
  const mercadoData = useContext(mercadoContext);

  let { id, NombreMercado, registro, valStateMercado, validaMercado } =
    mercadoData;

  useEffect(() => {
    let getMercadoLocal = JSON.parse(localStorage.getItem("mercado"));

    if (!getMercadoLocal) {
      getMercadoLocal = {};
    }
    if (Object.keys(getMercadoLocal).length > 0) {
      validaMercado(getMercadoLocal);
      mercadoInfo(true);
    }

    if (productosActuales) {
      localStorage.setItem("productos", JSON.stringify(productos));
    } else {
      localStorage.setItem("productos", JSON.stringify([]));
    }
    // eslint-disable-next-line

    
  }, [productos]);

  return (
    <Fragment>
      {!valStateMercado ? (
        <Fragment>
          <h2 className="text-center">Mercado</h2>
          <div className="container">
            {error ? (
              <Alerta
                mensaje="Todos los campos son obligatorios"
                tipo="error"
              />
            ) : null}

            <FormMercado
              modificarPreloadImage={modificarPreloadImage}
              muestraError={muestraError}
              preloadImage={preloadImage}
            />
          </div>
        </Fragment>
      ) : (
        <div className="container">
          <div className="contenedorResumen">
            <TituloResumenMercado>
              <span>Id Mercado:</span> {id} <br /> <span>Nombre Mercado:</span>{" "}
              {NombreMercado} <br /> <span>Fecha Registro:</span> {registro}{" "}
            </TituloResumenMercado>
          </div>

          <div
            className="pre-imagen"
            style={{ textAlign: "center", margin: "2rem" }}
          >
            <h4> Facturada Indexada: </h4>
            <img src={preloadImage} style={{ width: "800px" }} alt="preload" />
          </div>

          {info ? (
            <Alerta
              mensaje={`No has agregado productos al Mercado con id: ${id}`}
              tipo="info"
            />
          ) : null}

          <FlexProductos className="row">
            <ContentFormulario className="col s6">
              <h2 className="text-center">Formulario</h2>
              <div className="row">
                <Formulario
                  agregaProducto={agregaProducto}
                  productos={productos}
                />
              </div>
              </ContentFormulario>

              <ContentProducto className="col s6">
                <h2 className="text-center">Productos</h2>
                <Productos
                 productos={productos}
                 id_mercado={id}
                  />
              </ContentProducto>
         
          </FlexProductos>
        </div>
      )}
    </Fragment>
  );
};

export default CrearMercado;
