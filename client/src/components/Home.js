
import React, {Fragment, useState, useEffect} from 'react'

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
            } catch(err) {
                console.error(err.message)
            }
        }
    useEffect(() => {
        getName()
    })
    return (
        <div>
                <h1>Home</h1>
                
        </div>
    )
}
