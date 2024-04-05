
import { useRef } from "react"
import "./../styles/temperature.css"

function Temperature() {
    const searchText = useRef()
    return (
        <div className='temperature flex items-center justify-between flex-col p-8'>
            {/* Search box and search Button */}
            <div className='relative w-[100%]'>

                <input type='text' placeholder='Search any city' className='p-4 rounded-xl  bg-gray-200 w-[100%]'></input>
                <button onClick={""}><i className="ri-search-line search-btn"></i></button>
            </div>

        </div >
    )
}

export default Temperature