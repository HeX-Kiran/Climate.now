import { TOAST_STATUS, showToast } from "./toast"


export const getCurrLocation = (setLatitude,setLongitude)=>{
    

   navigator.geolocation.getCurrentPosition((position)=>{
    //on success 
    setLatitude(position.coords.latitude);
    setLongitude( position.coords.longitude);
   },()=>{
    // on failure
    showToast(TOAST_STATUS.ERROR,"Please allow location permission")
   });

  
}

