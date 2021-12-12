import React from "react";

import { opcionesSidebar } from "../../services/";
import Options from "./Options";

const ListOptions = () => {


  return (
    <ul className="menu-collapse">
      {opcionesSidebar.map( opcion => (

        <li data-tip data-for={opcion.tooltip}  key={opcion.tooltip}>
          <Options 
              opcion={opcion}
             
          />
        </li>
     ))}
    </ul>
  );
};

export default ListOptions;
