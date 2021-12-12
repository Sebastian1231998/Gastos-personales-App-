import servicioAgua from "../static/img/servicio_agua.jpg";
import servicioLuz from "../static/img/servicio_luz.jpg";
import servicioGas from "../static/img/servicio_gas.jpg";
import servicioInternet from "../static/img/servicio_internet.jpg";

//COMPONENTS TABS PRESUPUESTO
import PresupuestoTab from "../components/Presupuesto/subcomponents/PresupuestoTab";
import ProductoFrecuentes from "../components/Presupuesto/subcomponents/ProductosFrecuentes";
import GraficaPresupuesto from "../components/Presupuesto/subcomponents/GraficaPresupuesto";
import Transacciones from "../components/Presupuesto/subcomponents/Transacciones";

//COMPONENTS TABS SERVICIOS PUBLICOS
import Formulario from "../components/Microcomponents/ServiciosPublicos/Formulario";
import TablaServicios from "../components/Microcomponents/ServiciosPublicos/TablaServicios";
import Resumen from "../components/Microcomponents/ServiciosPublicos/Resumen";

// SERVICIOS PUBLICOS
export const serviciosPublicos = [
  {
    id: 1,
    nombre: "Servicio Agua",
    valor_mes: "$600.000",
    img: servicioAgua,
    descripcion:"Este servicio es indispensable para vivir comodamente y hacer los que haceres de la casa",
    classImg: "hero-info-agua",
    empresa:'Acueducto'
  },
  {
    id: 2,
    nombre: "Servicio Luz",
    valor_mes: "$80.000",
    img: servicioLuz,
    descripcion:"Sin este servicio no podriamos estudiar ni siquiera realizar entreternos",
    classImg: "hero-info-luz",
    empresa:'Codensa'
  },

  {
    id: 3,
    nombre: "Servicio Gas",
    valor_mes: "$70.000",
    img: servicioGas,
    descripcion:"Sin este servicio no podriamos comer para tener la energia suficiente" ,
    classImg: "hero-info-gas",
    empresa:'Empresa Gas SAS'
  },

  {
    id: 4,
    nombre: "Servicio Internet",
    valor_mes: "$165.000",
    img: servicioInternet,
    descripcion:"Sin este servicio no podriamos estar conectados con el mundo de hoy en dia",
    classImg: "hero-info-internet",
    empresa:'Movistar'
  }
];

//TABS
export const tabsServiciosPublicos = [
  {
    id: 1,
    nombre: "INFORMACION CLIENTE",
    component: <Formulario />,
    nameComponent: "Formulario Gasto"
  },
  {
    id: 2,
    nombre: "RESUMEN",
    component: <Resumen />,
    nameComponent: "Resumen",
    classAlternative: "section-info"
  },
  {
    id: 3,
    nombre: "HISTORIAL DE FACTURA",
    component: <TablaServicios />,
    nameComponent: "Historial de Factura"
  }
];

export const tabsServiciosPerfil = [
  {
    id: 5,
    nombre: "PRESUPUESTO",
    component: <PresupuestoTab />,
    nameComponent: "Presupuesto"
  },
  {
    id: 6,
    nombre: "PRODUCTOS MAS COMPRADOS",
    component: <ProductoFrecuentes />,
    nameComponent: "Productos Mas Comprados"
  },
  {
    id: 7,
    nombre: "GRAFICA",
    component: <GraficaPresupuesto />,
    nameComponent: "Valor Presupuesto Al Mes"
  },
  {
    id: 8,
    nombre: "HISTORIAL DE TRANSACCIONES",
    component: <Transacciones />,
    nameComponent: "Historial de Transacciones"
  }
];

// SERVICE

export const opcionesSidebar = [
  {
    id: 1,
    name: "Presupuesto",
    route: "presupuesto",
    tooltip: "presupuesto-tooltip",
    icon: "attach_money"
  },
  {
    id: 2,
    name: "Servicios Públicos",
    route: "servicios-publicos",
    tooltip: "publicos-tooltip",
    icon: "filter_drama"
  },
  {
    id: 3,
    name: "Servicios Extras",
    route: "servicios-extras",
    tooltip: "extras-tooltip",
    icon: "add"
  },
  {
    id: 4,
    name: "Mercado",
    route: "",
    //PARA CARGAR SEGUNDAS OPCIONES ES NECESARIO DEFINIR ROUTE VACIO Y CARGAR UN ATRIBUTO OPTIONS
    options: [
      {
        cod: "MER-01",
        name: "Mis Mecardos",
        route: "mis-mercados",
        icon: "list"
      },
      {
        cod: "MER-02 ",
        name: "Crear Mercados",
        route: "crear-mercado",
        tooltip: "extras-tooltip",
        icon: "restaurant"
      }
    ],
    tooltip: "mercado-tooltip",
    icon: "arrow_downward",
    activeSubOptions: "mercado"
  }
];
