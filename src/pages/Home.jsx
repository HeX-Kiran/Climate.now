

import "./../styles/home.css"

import { useEffect, useState } from 'react'
import Loader from "../component/Loader";
import { fetchUrl } from "../util/fetchUrl";

import Temperature from "../component/Temperature";
import Forcast from "../component/Forcast";

function Home() {



  const [loading, setLoading] = useState(false);



  const [currLocationTemperature, setCurrLocationTemperature] = useState({});
  const [forcastClimate, setForcastClimate] = useState([])
  const [location, setLocation] = useState("12.971389,77.750130")






  //FUNCTION TO GET THE REAL TIME TEMPERATURE 
  // THIS API IS CALLED WHENEVER THERE IS CHANGE IN  LOCATION
  const getRealTimeTemperature = async () => {
    // set loading to true
    setLoading(true)
    const response = await fetchUrl(`https://api.tomorrow.io/v4/weather/realtime?apikey=${import.meta.env.VITE_API_KEY}&location=${location}`)


    // if the response is success then update the states else show an erorr
    if (response?.status === 200) {

      setCurrLocationTemperature(response.data);
    }
    else {
      // catch error
    }
    setLoading(false)
  }

  // FUNCTION TO GET THE CLIMATE FORCAST
  // THIS API IS CALLED WHENEVER THERE IS CHANGE IN  LOCATION

  const getForcastTemperature = async () => {

    // set loading to true
    setLoading(true)

    const response = await fetchUrl(`https://api.tomorrow.io/v4/weather/forecast?location=${location}&apikey=${import.meta.env.VITE_API_KEY}`)

    // if the response is success then update the states else show an erorr
    if (response?.status === 200) {

      setForcastClimate(response.data.timelines.daily);
    }
    else {
      //catch eroror
    }
    setLoading(false)

  };




  useEffect(() => {
    // getRealTimeTemperature();
    // getForcastTemperature();

  }, [location])





  if (loading) return <Loader isLoading={loading} />

  return (



    <section className='section-home'>
      <main className='home-grid'>

        <Temperature updateLocation={setLocation} currClimateInfo={currLocationTemperature} />
        <Forcast forcastClimate={forcastClimate} />
      </main>
    </section>



  )
}

export default Home