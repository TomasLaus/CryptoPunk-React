import './App.css';
import Header from './components/Header';
import {useEffect, useState} from 'react'
import axios from 'axios'
import PunkList from './components/PunkList';
import Main from './components/Main';
import Loader from './components/Loader'

function App() {


  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x8F43D6d8BCBAe65E803Df3944205eFca91c38ef3&order_direction=asc',  { crossdomain: true }
      )
      
      console.log(openSeaData.data.assets)
      setPunkListData(openSeaData.data.assets)
    }

    return getMyNfts()
  }, [])


  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 ? (
        <>
          <Main  punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
        </>
      )
    
    :

    <Loader />
    
    }
    </div>
  );
}

export default App;
