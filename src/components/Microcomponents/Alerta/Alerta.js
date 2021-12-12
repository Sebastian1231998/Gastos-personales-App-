import React from 'react';



const Alerta = ({tipo, mensaje}) => {
    return (  
        <div className={`mensaje ${tipo}`} ><span>{mensaje}</span></div>
    );
}
 
export default Alerta;