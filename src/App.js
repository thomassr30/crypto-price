import {useState, useEffect} from 'react'
import axios from 'axios'
import TableCoins from './component/TableCoins'

const App = () => {

  const [datos, setdatos] = useState([])
  const [search, setsearch] = useState('')

  const getData =  async() => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=clp&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    setdatos(res.data)
  }

  useEffect(() => {
    getData()
  },[])

  return (
    <div className='container'>
      <input type="text" placeholder="Buscar Criptomoneda"
        className=' form-control bg-dark text-white mt-3 text-center'
        onChange={e => setsearch(e.target.value)}
      />
      <TableCoins datos={datos} search={search} />
    </div>
  )
}

export default App