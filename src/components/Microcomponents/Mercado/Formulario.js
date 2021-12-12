import React, { useState, Fragment, useEffect } from "react";
import styled from "@emotion/styled";
import Alerta from "../Alerta/Alerta";

const Form = styled.form`
  padding: 5rem !important;
  background-color: #eff8ff;
  border-radius: 5rem;
`;

const Formulario = ({ agregaProducto, productos }) => {
  const [producto, modificaProducto] = useState({
    nombreProducto: "",
    cantidad: "",
    precio: "",
    tipo: ""
  });

  const [error, muestraError] = useState(false);
  const [exito, muestraExito] = useState(false);

  useEffect(() => {
    if (exito) {
      setTimeout(() => {
        muestraExito(false);
      }, 2000);
    }
  }, [exito]);
  
  const changeInput = (e) => {
    parseInt(cantidad);
    parseInt(precio);

    modificaProducto({
      ...producto,
      [e.target.name]: e.target.value
    });
  };

  let { nombreProducto, cantidad, precio, tipo } = producto;

  const sumbitFormulario = (e) => {
    e.preventDefault();

    if (
      nombreProducto.trim() === "" ||
      cantidad <= 0 ||
      precio <= 0 ||
      tipo.trim() === ""
    ) {
      muestraError(true);
      return;
    }

    muestraError(false);

    agregaProducto([...productos, producto]);

    muestraExito(true);

    modificaProducto({
      nombreProducto: "",
      cantidad: "",
      precio: "",
      tipo: ""
    });
  };

  return (
    <Fragment>
      {error ? (
        <Alerta mensaje="Todos los campos son obligatorios" tipo="error" />
      ) : null}
      {exito ? <Alerta mensaje="Se Agrego Correctamente" tipo="exito" /> : null}
      <Form className="col s12 form-registro" onSubmit={sumbitFormulario}>
        <div className="row">
          <label htmlFor="Nombre Producto"></label>
          <input
            id="producto"
            placeholder="Nombre Producto"
            name="nombreProducto"
            type="text"
            className="validate"
            onChange={changeInput}
            value={nombreProducto}
          />
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="Cantidad"
              id="cantidad"
              type="number"
              className="validate"
              name="cantidad"
              onChange={changeInput}
              value={cantidad}
            />
            <label htmlFor="Mes En Curso"></label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="Precio Producto"
              id="precio"
              name="precio"
              type="number"
              className="validate"
              value={precio}
              onChange={changeInput}
            />
            <label htmlFor="precio"></label>
          </div>
        </div>

        <label>Tipo Producto</label>
        <select name="tipo" onChange={changeInput} value={tipo}>
          <option value=""> -- Seleccione --</option>
          <option value="Frutas y verduras">Frutas y verduras</option>
          <option value="Carnes">Carnes</option>
          <option value="Aseo">Aseo</option>
          <option value="Granos">Granos</option>
          <option value="Canasta Familiar">Canasta Familiar</option>
        </select>

        <div className="button-submit-servicio">
          <input
            type="submit"
            className="button_form text-white"
            value="registro"
          />
        </div>
      </Form>
    </Fragment>
  );
};

export default Formulario;
