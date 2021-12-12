import React, { useState , useContext } from "react";
import mercadoContext from "../../../context/mercado/mercadoContext";
const FormMercado = ({modificarPreloadImage, muestraError, preloadImage}) => {


  //context mercado


  const [urlFileLocal, ModificaMercadoUrlFile] = useState("");
  const [NombreMercadoLocal, modificarNombreMercado] = useState("");


  const mercadoData = useContext(mercadoContext);

  let {
    creaMercado
  } = mercadoData;


  const changeCrearMercado = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      if (file.type.includes("image")) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function load() {
          modificarPreloadImage(reader.result);
        };
      }
      ModificaMercadoUrlFile(file);
    }
  };

  const sumbitCrearMercado = (e) => {
    e.preventDefault();

    if (NombreMercadoLocal.trim() === "" || urlFileLocal === "") {
      muestraError(true);
      return;
    }
    muestraError(false);

    let mercado = {
      NombreMercado: NombreMercadoLocal,
      urlFile: urlFileLocal
    };

    creaMercado(mercado);

    modificarNombreMercado("");
    ModificaMercadoUrlFile("");
  };
  return (
    <form action="#" onSubmit={sumbitCrearMercado}>
      <div className="input-field col s6">
        <input
          id="nombreMercado"
          type="text"
          className="validate"
          onChange={(e) => {
            modificarNombreMercado(e.target.value);
          }}
          name="NombreMercado"
          value={NombreMercadoLocal}
        />
        <label htmlFor="first_name">First Name</label>
      </div>
      <div className="file-field input-field">
        <div
          className="button_form text-white"
          style={{ backgroundColor: "#223ae9" }}
        >
          <span>Agregar Factura</span>
          <input type="file" name="urlFile" onChange={changeCrearMercado} />
        </div>

        <div
          className="pre-imagen"
          style={{ textAlign: "center", margin: "2rem" }}
        >
          <img src={preloadImage} style={{ width: "800px" }} alt="preload" />
        </div>
      </div>
      <div className="button-submit-servicio">
        <input
          type="submit"
          className="button_form text-white"
          value="Crear Mercado"
        />
      </div>
    </form>
  );
};

export default FormMercado;
