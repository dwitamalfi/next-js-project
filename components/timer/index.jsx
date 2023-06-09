"use client"

import { useEffect, useState } from "react";

const Timer = ({}) => {
    const [focusTime,setFocusTime] = useState({minutes: 25, seconds: 0})
    const handleStart = () =>{
       const countdown=  useInterval(() => {
            if(focusTime.seconds === 0) {
                setFocusTime({minutes: focusTime.minutes, seconds: 59})
            }
            if(focusTime.seconds > 0) {
                setFocusTime({minutes: focusTime.minutes, seconds: (focusTime.seconds-1)})
                
            }
        }, 1000);
    }
    return(
        <>
        <div className="content-box backdrop-brightness-50">
           <span className="timer">{focusTime.minutes} : {focusTime.seconds} </span>
        </div>
        <div className='flex space-between'>
            <button type="button" class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-1"
                onClick={()=>handleStart()}
            >
                Start
            </button>
            <button type="button" class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-1">
                Reset
            </button>
        </div>
        </>
    )
}

export default Timer;