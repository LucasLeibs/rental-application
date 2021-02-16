import React, {useState} from 'react'
import { Link } from 'react-router-dom'
export default function Register({setAuth}) {
const [userInfo, setUserInfo] = useState({ 
    first_name: "",
    last_name: "",
    user_name: "", 
    email: "",
    password: ""
})
const {first_name, last_name, user_name, email, password} = userInfo;

const onChange = (e) => {
    setUserInfo({...userInfo, [e.target.name]: e.target.value});
}

const onSubmitForm = async (e) => {
    e.preventDefault()
    try {
        const body = {first_name, last_name, user_name, email, password }
        const response = await fetch('http://localhost:5000/authentication/register', {
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(body)
        });
        const parseRes = await response.json()
        console.log(parseRes)
        localStorage.setItem("token", parseRes.token)
        setAuth(true)
    
    } catch (err) {
        console.error(err.message)
    }
}
console.log(userInfo)
    return   (
       
           <div className="min-h-screen flex items-center justify-center 0bg-gray-5 py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-900">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Register your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-500">
           
           
            <Link  className="font-medium text-indigo-600 hover:text-indigo-100 dark:text-indigo-" to="/login">Back to login</Link>
          </p>
       
        </div>
        <form onSubmit={onSubmitForm}className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true"/>
          <div className="rounded-md shadow-sm -space-y-px">
          <div>
              <label className="sr-only">
                First Name
              </label>
              <input
              onChange={e => onChange(e)}
              value={first_name}
                id="first_name"
                name="first_name"
                type="text"
               
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="First Name"
              />
            </div>
            <div>
              <label className="sr-only">
                Last Name
              </label>
              <input
                 onChange={e => onChange(e)}
                 value={last_name}
                id="last_name"
                name="last_name"
                type="text"
               
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Last Name"
              />
            </div>
            <div>
              <label  className="sr-only">
                User Name
              </label>
              <input
                id="user-name"
                name="user_name"
                type="text"
                onChange={e => onChange(e)}
                value={user_name}
                required
                className="mt-3 mb-3 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label className="sr-only">
                
              </label>
              <input
                 onChange={e => onChange(e)}
                 value={email}
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label className="sr-only">
                Password
              </label>
              <input
                 onChange={e => onChange(e)}
                 value={password}
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label for="remember_me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {/* <!-- Heroicon name: solid/lock-closed --> */}
                <svg
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
    
    )
}
