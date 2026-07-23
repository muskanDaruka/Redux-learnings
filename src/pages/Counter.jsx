import React from 'react'
import Count from '../components/Count'
import { useDispatch } from 'react-redux'

const Counter = () => {
  const dispatch = useDispatch()
  return (
    <div className='flex flex-col items-center justify-center gap-2 mt-10'>
        <button onClick={(e) => dispatch({type:"INCREMENT"})} className="border border-1 rounded-md p-1 text-white bg-blue-500 hover:bg-blue-600">Increment</button>
        <Count />
        <button onClick={(e) => dispatch({type: "DECREMENT"})} className="border border-1 rounded-md p-1 text-white bg-red-500 hover:bg-red-600">Decrement</button>
    </div>
  )
}

export default Counter