import React from "react";


const Formulario = () => {
  return (
    <form className="col s12 form-registro">
      <div className="row">
        <div className="input-field col s6">
          <label htmlFor="nombre"></label>
          <input
            id="nombre"
            placeholder="Nombre"
            name="nombre"
            type="text"
            className="validate"
          />
        </div>
        <div className="input-field col s6">
          <input
            id="apellido"
            placeholder="Apellido"
            name="apellido"
            type="text"
            className="validate"
          />
          <label htmlFor="apellido"></label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="fecha-pago"
            type="date"
            className="validate"
            name="fecha_pago"
          />
          <label htmlFor="fecha pago">Fecha de Pago</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <input
            id="fecha-facturacion"
            type="date"
            className="validate"
            name="fecha_facturacion"
          />
          <label htmlFor="fecha factura">Fecha de Facturacion</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input
            placeholder="Mes En Curso"
            id="Mes"
            type="text"
            className="validate"
            name="mes_curso"
          />
          <label htmlFor="Mes En Curso"></label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input
            placeholder="Valor Pagado "
            id="pagado"
            name="pagado"
            type="email"
            className="validate"
          />
          <label htmlFor="pagado"></label>
        </div>
      </div>

      <label>Estado</label>
        <select >
          <option value="">--Seleccione --</option>
          <option value="1">Pendiente</option>
          <option value="2">Pagado</option>
        </select>
        
 
     
     <div className="button-submit-servicio">

      <input
        type="submit"
        className="btn waves-effect w-100 wd-100 button_form text-white"
        value="registro"
      />
</div>
    </form>
  );
};

export default Formulario;
