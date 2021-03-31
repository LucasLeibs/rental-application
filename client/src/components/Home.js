
import React, {Fragment, useState, useEffect} from 'react'
import SearchBar from './SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PlacesAutocomplete from 'react-places-autocomplete';
import logo from '../images/renttru6.png'
import home from '../images/renttru7.jpg'
import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
  } from 'react-places-autocomplete';

export default function Home({setAuth}) {
    const [name, setName] = useState("");
   
    
       async function getName() {
            try {
                const response = await fetch('http://localhost:5000/dashboard/', {
                    method: "GET",
                    headers: { token : localStorage.token }
                });

                const parseRes = await response.json()
                console.log(parseRes)
                
                setName(parseRes.user_name)
                greetingNotification(parseRes.user_name)
               
            } catch(err) {
                console.error(err.message)
            };
           
        }
    useEffect(() => {
        getName()
    }, [])
     const greetingNotification = (username) => {
   username ?
        toast.dark(`Logged in as ${username}`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            })
            : <h1></h1>

            
    }
    // useEffect(() => {
    //     greetingNotification()
    // }, [])
     const logout = (e) => {
         e.preventDefault()
         localStorage.removeItem("token")
         setAuth(false)
     }
    return (
        <div className="static min-h-screen flex items-center flex-col justify-center bg-gray-900
         px-4 sm:px-6 lg:px-8 dark:bg-gray-900 dark:text-white" >
            <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover={false}
/>  
<img
            className="mx-auto h-12 w-auto m-10"
            src={logo}
            alt="Workflow"
          />
             <div className="-mb-5 z-20">
      <SearchBar >

      </SearchBar>
      </div>
<div className="w-100 h-1/3">
<img src={home}></img>
</div>


       
            <h1>Homfe Pidiage</h1>
            <button onClick= {e => logout(e)} className="bg-indigo-500 p-2 m-1 rounded-md">Logodutd </button>
        </div>
    )
}



