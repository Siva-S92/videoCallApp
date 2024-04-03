import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const [input, setInput] = useState('');

    const submitHandler = () => {
        navigate(`room/${input}`)
    }
  return (
    <div>
        <div className='w-[30%] mx-auto flex flex-col items-center gap-2 bg-gray-100 p-10 rounded-lg'>
            <input type="text" className='h-[30px] px-2 rounded border hover:border-slate-400' placeholder='Enter Your Name' onChange={(e)=> setInput(e.target.value)} />
            <button type="button" onClick={submitHandler} className='rounded bg-slate-400 px-5 py-0'>Join</button>
        </div>
    </div>
  )
}

export default Home