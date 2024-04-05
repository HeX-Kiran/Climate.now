import { getCurrLocation } from "../util/fetchCurrLocation";

import "./../styles/home.css"

import { createContext, useEffect, useState } from 'react'
import Loader from "../component/Loader";
import { fetchUrl } from "../util/fetchUrl";
import { TOAST_STATUS, showToast } from "../util/toast";

function Home() {



  const [loading, setLoading] = useState([]);

  const loadingContext = createContext();

  const [currLocationTemperature, setCurrLocationTemperature] = useState({});
  const [currLocation, setCurrLocation] = useState({})



  const getRealTimeTemperature = async () => {
    // set loading to true
    setLoading(true)
    // get the user coords
    const coords = getCurrLocation();
    // fetch the real time temperature using the coords

    const response = await fetchUrl(`https://api.tomorrow.io/v4/weather/realtime?location=toronto&apikey=${import.meta.env.VITE_API_KEY}&location= ${coords.lat} ${coords.long}`)
    if (response.status === 200) {
      setCurrLocationTemperature(response.data.data.values);
      setCurrLocation(response.data.location);
    }
    else {
      showToast(TOAST_STATUS.ERROR, "something went wrong")
    }
    setLoading(false)
  }



  useEffect(() => {
    // getRealTimeTemperature()

  }, [])


  // if (loading) return <Loader isLoading={loading} />

  return (
    <loadingContext.Provider value={{ loading, setLoading }}>


      <section className='section-home'>
        <main className='home-grid'>
          <Temperature/>
          <TemperatureDetails/>
        </main>
      </section>


    </loadingContext.Provider>
  )
}

export default Home