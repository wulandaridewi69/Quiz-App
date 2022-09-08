// import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom"
// import StarOutlineIcon from '@mui/icons-material/StarOutline';

import { TokenContext } from "../utils/Context";
import Table from "../component/Table";
import Layout from "../component/Layout";
import "../styles/App.css";


const Row = ({ item, index }) => {

  const navigate = useNavigate()

  return (
      <tr onClick={() => navigate(`../detail/${item.id}`)} >
          {/* <td>
              <StarOutlineIcon />
          </td> */}
          <td>
              <span>{index}</span>
          </td>
          <td>
              <img src={item.image} alt={item.name} style={{ width: '5%' }} className='me-4' />
              <span>{item.name}</span>
              <span className='ms-3 text-muted text-uppercase text-center'>{item.symbol}</span>
          </td>
          <td>IDR {item.current_price}</td>
          <td>IDR {item.total_volume}</td>
          <td>IDR {item.market_cap}</td>
      </tr>
  )
}

const App = () => {
  const { setLogout } = useContext(TokenContext);
  const [data, setData] = useState([])
  const [titles, setTitles] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    setTitles(['', '#', 'Coin', 'Price', '24h Volume', 'Market Cap'])
    getData();
  }, []);

  const getData = (p) => {
    // axios.get(
    //   `https://api.coingecko.com/api/v3/coins/markets?vs_currency=IDR&order=market_cap_desc&per_page=25&page=${p}`
    // )
    //   .then((res) => {
    //     setData(res.data)
    //     console.log("data", res.data)
    //   })
    //   .catch((error) => {
    //     console.log('error', error)
    //   })
    //   .finally(() => setLoading(false));
  }

  // if (loading) {
  //   return (loading)
  // } else {
    return (
      <Layout>
        <div className="container">
          <div className="row">
            <button onClick={() => navigate("/login")}> LOGIN </button>
            <button onClick={() => setLogout()}> LOGOUT </button>
          </div>
          <div className="row">
            <input 
              type='text' placeholder='Search a Coin' 
              className='form-control bg-dark text-center text-light border-0 mt-4' 
              onChange={e => setSearch(e.target.value)}
            />
            <Table
              data={data}
              search={search}
              titles={titles}
              onChange={getData}
              Row={Row}
            />
          </div>
        </div>
      </Layout>
    );
  // }
}

export default App;
