import { getCurrLocation } from "../util/fetchCurrLocation";

import "./../styles/home.css"

import { createContext, useEffect, useState } from 'react'
import Loader from "../component/Loader";
import { fetchUrl } from "../util/fetchUrl";
import { TOAST_STATUS, showToast } from "../util/toast";
import Temperature from "../component/Temperature";

function Home() {



  const [loading, setLoading] = useState([]);

  const loadingContext = createContext();

  const [currLocationTemperature, setCurrLocationTemperature] = useState({});
  const [latitude, setLatitude] = useState(28.70405920)
  const [longitude, setLongitude] = useState(77.10249020)
  const [location, setLocation] = useState("delhi")





  const getRealTimeTemperature = async () => {
    // set loading to true
    setLoading(true)
    // get the user coords
    const coords = getCurrLocation(setLatitude, setLongitude);
    // fetch the real time temperature using the coords

    const response = await fetchUrl(`https://api.tomorrow.io/v4/weather/realtime?apikey=${import.meta.env.VITE_API_KEY}&location= ${latitude} ${longitude}`)
    // if the response is success then update the states else show an erorr
    if (response.status === 200) {
      console.log(response.data.data.values);
      setCurrLocationTemperature(response.data.data.values);
      // setCurrLocation(response.data.location);
    }
    else {
      showToast(TOAST_STATUS.ERROR, "something went wrong")
    }
    setLoading(false)
  }

  const getRealTimeTemperatureBasedOnSearchLocation = async (location) => {
    // set loading to true
    setLoading(true)
    const response = await fetchUrl(`https://api.tomorrow.io/v4/weather/realtime?location=toronto&apikey=${import.meta.env.VITE_API_KEY}`)
    // if the response is success then update the states else show an erorr
    if (response.status === 200) {
      console.log(response.data.location);
      setCurrLocationTemperature(response.data.data.values);
    }
    else {
      showToast(TOAST_STATUS.ERROR, "something went wrong")
    }
    setLoading(false)
  }



  useEffect(() => {
    getRealTimeTemperature()

  }, [latitude, longitude, location])


  // if (loading) return <Loader isLoading={loading} />

  return (
    <loadingContext.Provider value={{ loading, setLoading }}>


      <section className='section-home'>
        <main className='home-grid'>
          <Temperature />
          <Temperature />
        </main>
      </section>


    </loadingContext.Provider>
  )
}

export default Home