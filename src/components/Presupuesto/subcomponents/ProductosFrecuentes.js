import React from 'react';
import servicioAgua from "../../../static/img/servicio_agua.jpg";


const ProductoFrecuentes = () => {
    return ( 

        <ul className="collection">
        <li className="collection-item avatar">
          <img src={servicioAgua} alt="" className="circle"/>
 
          <p style={{ textAlign: 'initial', marginLeft:'1rem'}}>First Line <br />
             Second Line
          </p>
          <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
        </li>
        <li className="collection-item avatar">
          <i className="material-icons circle">folder</i>

          <p style={{ textAlign: 'initial', marginLeft:'1rem'}}>First Line <br />
             Second Line
          </p>
          <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
        </li>
        <li className="collection-item avatar">
          <i className="material-icons circle green">insert_chart</i>
      
          <p style={{ textAlign: 'initial', marginLeft:'1rem'}}>First Line <br />
             Second Line
          </p>
          <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
        </li>
        <li className="collection-item avatar">
          <i className="material-icons circle red">play_arrow</i>
      
          <p style={{ textAlign: 'initial', marginLeft:'1rem'}}>First Line <br />
             Second Line
          </p>
          <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
        </li>
      </ul>
             
     );
}
 
export default ProductoFrecuentes;