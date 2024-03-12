import { useState,useEffect } from 'react';
import Header from '../Component/Header'
import Tabs from '../Component/Dashboard/Tab';
import axios from 'axios';
import Search from '../Component/Dashboard/serach';
import Loader from '../Component/common/Loader';

function Dashboard() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [loader, setLoader] = useState(false);

   useEffect(()=>{
         getData();
   },[])

   function getData() {
    setLoader(true)
      axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
      .then((response) => {
          setCoins(response.data);
          setLoader(false)
          console.log("response => ",response.data)
      })
      .catch((error) => {
        setLoader(false);
        console.log(error);
      })
      
   }
     function handleChange(e){
       setSearch(e.target.value);
       console.log(e.target.value);
   }
   const  filteredCoins = coins.filter((coin) => (
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
   ))
  return (
    <div>
        <Header />
        <Search search={search} handleChange={handleChange}/>
        {
          loader ? ( <Loader /> ) : 
          
          ( <Tabs coins={ search ? filteredCoins : coins} setSearch={setSearch}/>)
        }
      
    </div>
  )
}

export default Dashboard