import React from 'react'
import { useHistory } from 'react-router-dom'
import image from '../assests/image.png'
const  Signin = () => {
  let history = useHistory()
    return (
        <div className='min-h-screen w-screen flex justify-center items-center flex-col lg:flex-row lg:space-around'>
        <div className=''>
        <img src={image} alt='' className='h-screen w-full'/>
        </div>
        <div className='mt-4 flex flex-col lg:w-full lg:mx-8'>
          <h1 className='font-bold'>Hi! Welcome</h1>
          <p>Enter your email and password to login</p>
          <form className='mt-4'>
            <div className='flex'>
              <input type="email" name="email" placeholder="Enter your email ID" className='bg-gray-200 placeholder-gray-800 p-4 rounded w-full h-12'/>
            </div>
            <div>
            <input type="password" name="password" placeholder="Enter your password" className='bg-gray-200  placeholder-gray-800 p-4 rounded mt-4 w-full h-12'/>
            </div>
            <p className='float-right text-sm text-blue-400'>Forgot password?</p>
            <div>
              <input type="submit" value="Sign In" className='font-bold bg-yellow-500 w-full rounded mt-4 text-white h-12 ' />
            </div>
            <div className='float-right text-xs'>Didn't have account?<span onClick={()=>history.push('/register')} className='text-blue-500 cursor-pointer'> Sign up</span></div>
            <br />
            <br />
            <br />
            <br />
            <div className='text-center'>
              <div className='text-xs'>By procceding, you agree to our<span className='text-blue-500'> Terms and conditions,</span></div>
              <div className='text-xs'>and confirm you have read our<span className='text-blue-500'> privacy policy.</span></div>
            </div>
          </form>
        </div>
      </div>
    )
}
export default Signin