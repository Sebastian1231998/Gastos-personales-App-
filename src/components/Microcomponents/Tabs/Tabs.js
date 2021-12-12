import React, { useEffect } from "react";

const Tabs = ({ guardarCargando, cargando, tab, pagina, cambiarPagina }) => {
  useEffect(() => {
    cambiarTabs();

   // eslint-disable-next-line
  }, [pagina]);

  function cambiarTabs() {
    guardarCargando(true);

    setTimeout(() => {
      if (document.querySelector(".mostrar-seccion")) {
        document
          .querySelector(".mostrar-seccion")
          .classList.remove("mostrar-seccion");
      }

      guardarCargando(false);

      if (document.querySelector(`#paso-${pagina}`)) {
        const seccionActual = document.querySelector(`#paso-${pagina}`);
        seccionActual.classList.add("mostrar-seccion");
        seccionActual.classList.add("animate__fadeIn", "animate__animated");
      }
    }, 1000);

    if (document.querySelector(".tab-seleccionado")) {
      document
        .querySelector(".tab-seleccionado")
        .classList.remove("tab-seleccionado");
    }
    const tabActual = document.querySelector(`[data-paso="${pagina}"]`);

    if (document.querySelector(`[data-paso="${pagina}"]`)) {
      tabActual.classList.add("tab-seleccionado");
    }
  }

  const cambiarSeccion = (e) => {
    e.preventDefault();
    cambiarPagina(parseInt(e.target.dataset.paso));
  };
  return (
    <a
      href="!#"
      className="button btn waves-effect waves-teal"
      data-paso={tab.id}
      onClick={cambiarSeccion}
    >
      {tab.nombre}
    </a>
  );
};

export default Tabs;
