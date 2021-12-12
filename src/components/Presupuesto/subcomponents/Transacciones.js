import React from 'react';
import TablaContent from '../../Microcomponents/Tables/TablaContent';
import styled from "@emotion/styled";

const ContentTransacciones = styled.div`
    overflow: auto;
    border: 1px solid #e1e1e1;
`;



const Transacciones = () => {
    return ( 

       
        <ContentTransacciones className='modal-mercado'>
          <TablaContent 
             validaTransacciones={true}
             validaModal={true}
          />
        </ContentTransacciones>

     );
}
 
export default Transacciones;