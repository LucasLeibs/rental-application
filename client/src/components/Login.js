import React from 'react'

export default function Login({setAuth}) {
    return (
        <div>
            <h1>login</h1>
            <button onClick={() => setAuth(true)}>Login</button>
        </div>
    )
}
