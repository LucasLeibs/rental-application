
import React, {Fragment} from 'react'

export default function Home({setAuth}) {
    return (
        <div>
                <h1>Home</h1>
                <button onClick={() => setAuth(false)}>logout</button>
        </div>
    )
}
