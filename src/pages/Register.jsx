import React, { useState } from 'react'
const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 return (
    <div className="grid place-items-center  mt-20 space-y-4">
      <h2 className="text-2xl font-bold">Register</h2>
      <form className="flex flex-col w-64" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" className="border border-gray-300 rounded-md p-2 mb-2" value={name} onChange={(e)=> setName(e.target.value)}/>    
        <input type="email" placeholder="email" className="border border-gray-300 rounded-md p-2 mb-2" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" className="border border-gray-300 rounded-md p-2 mb-2" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button className="bg-blue-500 text-white rounded-md p-2" type='submit'>Register</button>
      </form>
      <span className="text-gray-500 mt-4">Don't have an account? <a href="/login" className="text-blue-500">Sign in</a></span>
    </div>
  )
}

export default Register