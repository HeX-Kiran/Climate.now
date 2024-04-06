import React from "react"
import { useRef } from "react"
import "./../styles/temperature.css"
import getProperTemperatureIcon from "../util/getTemperatureIcon"
import moment from "moment"
import { getCurrLocation } from "../util/fetchCurrLocation";

function Temperature({ updateLocation, currClimateInfo }) {

    //extract place and weather info from api response
    const placeInfo = currClimateInfo?.location;
    const weatherInfo = currClimateInfo?.data?.values;


    // A reference for search box
    const searchText = useRef()

    return (
        <div className='temperature flex items-center justify-between flex-col p-8 h-[100%]'>
            {/* Search box and search Button */}
            <div className='relative w-[100%]'>

                <input type='text' placeholder='Search any city' className='p-4 rounded-xl  bg-gray-200 w-[100%]' ref={searchText}></input>
                <button onClick={() => updateLocation(searchText.current.value)}><i className="ri-search-line search-btn"></i></button>
            </div>

            {/* Temperature and Icon */}
            <div className="temperature-img-box flex items-center justify-center gap-16 flex-col temp-border mx-20 py-8">
                
                 
                    
                    <img src={getProperTemperatureIcon(weatherInfo?.temperature || 20) } alt="temperature icon" className="w-[70%] icon "></img>
                    <h1 className="text-8xl uppercase font-bold">{Math.ceil(weatherInfo?.temperature) || 20}<i className="ri-celsius-line temperature-title"></i></h1>
                  

                
                
            </div>

            {/* Place and date */}
            <div className="flex items-center justify-center gap-8 flex-col">
                <p className="font-bold text-lg date">{moment(currClimateInfo?.time).format("DD-MM-YYYY")}</p>
                <p className="text-xl italic time">{moment(currClimateInfo?.time).format("LLL")}</p>
                <h1 className="text-2xl font-bold uppercase temperature-name ">{placeInfo?.name }</h1>
            </div>

            {/* Curr location */}
            <button className="rounded-xl bg-gray-800 text-white flex gap-2 p-4 button-hover" onClick={() => getCurrLocation(updateLocation)}>
                <p>Current Location</p>
                <i className="ri-map-pin-line"></i>
            </button>



        </div >
    )
}

export default React.memo(Temperature)