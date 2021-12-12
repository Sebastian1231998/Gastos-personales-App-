import React from "react";

const CardServicioPublico = ({
  servicio,
  modificarObjetoActual

}) => {
  const seleccionaServicioPublico = (e,nombre,empresa,classImg) => {
    e.preventDefault();

      modificarObjetoActual({
        nombre_servicio: nombre,
        empresa: empresa,
        classImg: classImg
      });

    //document.querySelector('.eigth-serviciopub-card').classList.add('animate__fadeIn', 'animate__animated')
  };
  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img
          className="activator heigth-serviciopub-card"
          src={servicio.img}
          alt="img"
        />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {servicio.nombre}
          <i className="material-icons right">more_vert</i>
        </span>
        <p>
          <a href="!#">Valor Recibo: {servicio.valor_mes}</a>
        </p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          {servicio.nombre}
          <i className="material-icons right">close</i>
        </span>
        <p>{servicio.descripcion}</p>

        <p
          type="text"
          id={servicio.nombre}
          className="button-servicio"
          onClick={ (e)=> seleccionaServicioPublico(e, servicio.nombre, servicio.empresa, servicio.classImg)}
        >
          {" "}
          Selecciona Servicio
        </p>
      </div>
    </div>
  );
};

export default CardServicioPublico;
