import React from 'react';


const Paginador = () => {
    return ( 

        <ul className="pagination">
        <li className="disabled">
          <a href="#!">
            <i className="material-icons">chevron_left</i>
          </a>
        </li>
        <li className="active blue lighten-1">
          <a href="#!">1</a>
        </li>
        <li className="waves-effect">
          <a href="#!">2</a>
        </li>
        <li className="waves-effect">
          <a href="#!">3</a>
        </li>
    
        <li className="waves-effect">
          <a href="#!">
            <i className="material-icons">chevron_right</i>
          </a>
        </li>
      </ul>
     );
}
 
export default Paginador;