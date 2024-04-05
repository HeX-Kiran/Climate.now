import React, { useState } from 'react'
import moment from 'moment';
import DetailCards from './DetailCards';

function Forcast({ forcastClimate }) {



    const [currDetails, setCurrDetails] = useState(0);

    const propertyNames = {
        temperatureApparentMax: ["temperature", "C"],
        humidityMax: ["humidity", "%"],
        pressureSurfaceLevelMax: ["pressure", "mb"],
        uvIndexMax: ["UV", ""],
        windSpeedMax: ["wind", "km/h"],
        visibilityMax: ["visibility", "%"],
        dewPointMax: ["dew", ""],
        cloudCoverAvg: ["cloud", ""],
        rainAccumulationLweMax: ["rain", "lt"]
    }

    let filteredProperty = []



    if (forcastClimate.length > 0) {

        filteredProperty = Object.keys(forcastClimate[currDetails].values).filter(val => val in propertyNames)


    }

    return (


        <div className='forcast bg-gray-100 p-8 '>
            {/* Date */}
            <div className='flex items-center justify-between'>
                {
                    forcastClimate.map((obj, index) => {

                        return <h1 className={index === currDetails ? `text-xl text-blue-800 font-bold cursor-pointer` : `text-lg text-blue-500 cursor-pointer`} onClick={() => setCurrDetails(index)}>{moment(obj?.time).format("DD MMMM")}</h1>
                    })
                }
            </div>
            {/* Weather details of selected date */}
            <div className='flex flex-wrap items-center justify-around'>
                {
                    filteredProperty.map(property => {
                        return <DetailCards property={propertyNames[property]} value={forcastClimate[currDetails]?.values[property]} />
                    })
                }
            </div>

        </div>


    )
}

export default Forcast