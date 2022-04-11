import React from 'react'
import CoinRow from './CoinRow'

const TableCoins = ({datos, search}) => {

    const title = ["#", "Nombre", "Precio", "Más alto 24H","Más bajo 24H", "Ultimas actualización"]

    const filterCoins = datos.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <table className='table table-dark table-hover mt-5'>
        <thead>
            <tr>
                {
                    title.map((item, index) =>(
                        <th key={index} className="text-center">{item}</th>
                    ))
                }
            </tr>
        </thead>
        <tbody>
            {
                filterCoins.map((coin, index) => (
                    <CoinRow key={index} coin={coin} index={index + 1} />
                ))
            }
        </tbody>
    </table>
  )
}

export default TableCoins