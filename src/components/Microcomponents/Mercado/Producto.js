import React , {Fragment} from 'react';
import styled from '@emotion/styled';

const SpanPrecio = styled.span`

font-size: 3rem;
font-weight: bold;
color: #70afe5!important;


`; 

const Producto = ({producto}) => {
    return ( 
        <Fragment>
        <a href="#!" style={{margin:'1rem', padding:'1rem', fontSize: '2rem'}} className="collection-item"><span style={{marginLeft:'2rem' }} class="badge">{producto.tipo}</span><span style={{marginLeft:'2rem' }} class="badge">Cantidad: {producto.cantidad}</span> <SpanPrecio className="badge">${producto.precio}</SpanPrecio>{producto.nombreProducto}</a>
    
      </Fragment>     );
}
 
export default Producto;