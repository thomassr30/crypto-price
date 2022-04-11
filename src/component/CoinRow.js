import React from 'react'

const CoinRow = ({coin, index}) => {

    const formatearFecha = fecha => {
        const fechaNueva =  new Date(fecha);
        const opciones = {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
        }
    
        return fechaNueva.toLocaleDateString('es-Es', opciones)
    }
    const {last_updated} = coin; 

  return (
    <tr>
        <td className='text-center'>{index}</td>
        <td className='text-center'>
            <img src={coin.image} style={{width: '3%'}} className="img-fluid me-2" />
            <span>
            {coin.name}
            </span>
            <span className='ms-2 text-muted'>
                {coin.symbol}
            </span>
        </td>
        <td className='text-center'>{coin.current_price}</td>
        <td className='text-success text-center'>{coin.high_24h}</td>
        <td className='text-danger text-center'>{coin.low_24h}</td>
        <td className='text-center'>{formatearFecha(last_updated)}</td>
    </tr>
  )
}

export default CoinRow