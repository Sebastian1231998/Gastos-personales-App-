import React, { Fragment, useEffect, useState, useContext } from "react";
import CardServicioPublico from "../Microcomponents/ServiciosPublicos/CardServicioPublico";
import Tabs from "../Microcomponents/Tabs/Tabs"
import Paginador from "../Microcomponents/ServiciosPublicos/Paginador";
import serviciosPublicosContext from "../../context/servicios-publicos/serviciosPublicosContext";
import Spinner from "../Microcomponents/Spinner/Spinner";
import ComponentTab from "../Microcomponents/Tabs/ComponentTab";
/* Services */
import { serviciosPublicos, tabsServiciosPublicos } from "../../services";
/* Tabs Context */ 
import tabsContext from '../../context/tabs/tabsContext'



const ServiciosPublicos = () => {

  const [objetoActual, modificarObjetoActual] = useState(null);


  let servicios = useContext(serviciosPublicosContext)
  let { seleccionaServicio, servicio } = servicios;

  let tabs = useContext(tabsContext)
  let {pagina , cargando , cambiarPagina , guardarCargando} = tabs; 

  useEffect(() => {
    if (objetoActual !== null) {
      seleccionaServicio(objetoActual);
      return; 
    }

    cambiarPagina(1); 
    
    // eslint-disable-next-line
  }, [objetoActual], pagina);

  return (
    <Fragment>
      <div className="servicios">
        <div className="row ">
          <h3 className="bold padding-b-1r">Servicios Públicos</h3>

          {serviciosPublicos.map((servicio) => (
            <CardServicioPublico
              key={servicio.nombre}
              servicio={servicio}
              modificarObjetoActual={modificarObjetoActual}
              objetoActual={objetoActual}
            />
          ))}
        </div>

        <div className="table-information">
          <h4 className="text-center">
            Servicio Publico: <span className="servicio-head">{servicio}</span>
          </h4>
          <nav className="tabs-service">
          {tabsServiciosPublicos.map((tab) => (
          
            <Tabs 
            key={tab.id} 
            guardarCargando={guardarCargando} 
            tab={tab} 
            pagina={pagina}
            cambiarPagina={cambiarPagina} 
            />
          ))}
          </nav>

          {cargando ? (
            <Spinner />
          ) :  (
            tabsServiciosPublicos.map((tabContent) => (
              <ComponentTab content={tabContent} key={tabContent.id} />
            ))

         
          )}

          <Paginador />

        </div>
      </div>
    </Fragment>
  );
};

export default ServiciosPublicos;
