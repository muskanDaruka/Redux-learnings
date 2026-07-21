import React, { useState } from 'react'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
return (
    <div className="grid place-items-center  mt-20 space-y-4">
      <h2 className="text-2xl font-bold">Login</h2>
      <form className="flex flex-col w-64" onSubmit={handleSubmit}>
        <input type="email" placeholder="email" className="border border-gray-300 rounded-md p-2 mb-2" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" className="border border-gray-300 rounded-md p-2 mb-2" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button className="bg-blue-500 text-white rounded-md p-2" type='submit'>Login</button>
      </form>
      <span className="text-gray-500 mt-4">Don't have an account? <a href="/register" className="text-blue-500">Sign up</a></span>
    </div>
  )
}

export default Login