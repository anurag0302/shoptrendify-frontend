import { Card } from 'antd'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Signup = () => {
  const [fieldErrors, setFieldErrors] = useState<boolean[]>([false, false, false, false, false])

  const handleSignup=()=>{

  }


  return (
    <div className='w-full  min-h-[93vh] bg-slate-200 flex justify-center items-start'>
      <Card className="flex flex-col bg-cuBgWhite my-10 w-[90%] md:w-[400px]">
        <h1 className='text-lg font-bold'>Signup</h1>
        <div className='mt-4'>
          <label htmlFor="name">Name</label>
          <input className='w-full p-2 mt-1 focus:outline-none' type='name' />
          {fieldErrors[0] && <span className='font-light text-xs text-red-600'>Name required</span>}
        </div>
        <div >
          <label htmlFor="email">Email</label>
          <input className='w-full p-2 mt-1 focus:outline-none' type='email' />
          {fieldErrors[1] && <span className='font-light text-xs text-red-600'>Email required</span>}
        </div>
        <div>
          <label htmlFor="phone_number">Mobile</label>
         <div className="flex items-center">
          <p className='p-2'>+91</p>
         <input className='w-full p-2 mt-1 focus:outline-none' type='phone_number' />
         </div>
          {fieldErrors[2] && <span className='font-light text-xs text-red-600'>Mobile required</span>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input className='w-full p-2 mt-1 focus:outline-none' type='password' />
          {fieldErrors[3] && <span className='font-light text-xs text-red-600'>Password required</span>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input className='w-full p-2 mt-1 focus:outline-none' type='password' />
          {fieldErrors[4] && <span className='font-light text-xs text-red-600'>Password required</span>}
        </div>
        <div className="flex justify-between items-center">
          <button className='bg-cuGreen px-4 py-2 my-4 hover:bg-cuTeal hover:text-cuWhiteSmoke '>Login</button>
          <NavLink className='mx-1 text-cuTeal' to={'/'}>Forget Password?</NavLink>
        </div>
        <div className='flex justify-center'>
          <p>Not a Member?</p>
          <NavLink className='mx-1 text-cuTeal' to={'/signup'}>Signup</NavLink>
        </div>
      </Card>
    </div>
  )
}

export default Signup