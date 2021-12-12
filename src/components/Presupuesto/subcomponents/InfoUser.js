import React from "react";
import styled from "../presupuesto.module.css";
import ImagenPerfil from "../../../static/img/lorena.jpg";


const InfoUser = () => {
  return (
    <div className="sidebar-perfil">
      <div className={styled["flex-header-perfil"]}>
        <img
          className={styled["foto-perfil"]}
          src={ImagenPerfil}
          alt="foto-perfil"
        />
        <div className={styled["content-info-perfil"]}>
          <h3>Lorena Suarez</h3>

          <p>
            <span>Empresa:</span> Quirurgicos Lord Sua SAS
          </p>

          <p>
            <span>Titular:</span> Lorena Suarez
          </p>
          <p>
            <span>Estrato:</span>3
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoUser;
