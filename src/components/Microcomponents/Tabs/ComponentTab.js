import React from "react";
import styled from "../../Presupuesto/presupuesto.module.css";

const ComponentTab = ({ content }) => {
  return (
    <div
      id={`paso-${content.id}`}
      className={`seccion ${
        content.classAlternative !== undefined ? content.classAlternative : ""
      }`}
    >
      <h3 className={`text-center ${styled.texto_grafica} `}>
        {content.nameComponent}
      </h3>

      {content.component}
    </div>
  );
};

export default ComponentTab;
