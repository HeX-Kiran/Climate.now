import cloudy from "../assets/images/clouds.webp";
import moonCloud from "../assets/images/moon-cloud.webp"
import raining from "../assets/images/raining.webp"
import rainDay from "../assets/images/rainy-day.webp"
import snow from "../assets/images/snow.webp"
import sun from "../assets/images/sun.webp"


// FUNCTION TO GET PROPER CLIMATE ICON ACCORDING TO THE TEMPERARTURE
const getProperTemperatureIcon = (temperature,hour)=>{
    
    if(hour > 16) return moonCloud
    if(temperature > 30) return sun;
    else if(temperature >=25 && temperature<30) return cloudy;
    else if(temperature >=20 && temperature <25) return rainDay;
    else if(temperature <20 & temperature>=15) return raining;
    else if(temperature <15) return snow;
}

export default getProperTemperatureIcon