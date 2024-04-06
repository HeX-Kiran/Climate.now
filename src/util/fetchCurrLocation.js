import { TOAST_STATUS, showToast } from "./toast"

//FETCH CURRENT LOCATION CALCULATES THE LAT AND LONG OF THE USER USING GEOLOCATION API
//current location BUTTON IN THE UI TRIGGER THIS FUNCTION AND UPDATES LOCATION STATE BY USERS LAT AND LONG
//UPDATING THE LOCATION STATES TRIGGERS API CALLS FOR REAL TIME WEATHER AND FORCAST WEATHER
export const getCurrLocation = (setLocation)=>{
   showToast(TOAST_STATUS.INFO,"Please wait this may take time")
  
   navigator.geolocation.getCurrentPosition((position)=>{
    
    //on success 
    setLocation(`${position.coords.latitude},${position.coords.longitude}`);
   },()=>{
    // on failure
    showToast(TOAST_STATUS.ERROR,"Please allow location permission")
   });

   
  

  
}

