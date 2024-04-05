import { TOAST_STATUS, showToast } from "./toast"


export const getCurrLocation = ()=>{
    let coords = {
        lat:   28.70405920,
        long: 77.10249020    
    };

   navigator.geolocation.getCurrentPosition((position)=>{
    //on success 
    coords.lat = position.coords.latitude;
    coords.long = position.coords.longitude
   },()=>{
    // on failure
    showToast(TOAST_STATUS.ERROR,"Please allow location permission")
   });

   return coords;
}

