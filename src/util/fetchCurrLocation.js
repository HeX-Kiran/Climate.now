import { TOAST_STATUS, showToast } from "./toast"


export const getCurrLocation = (setLocation)=>{

  
   navigator.geolocation.getCurrentPosition((position)=>{
    
    //on success 
    setLocation(`${position.coords.latitude},${position.coords.longitude}`);
   },()=>{
    // on failure
    showToast(TOAST_STATUS.ERROR,"Please allow location permission")
   });

   
  

  
}

