import React from 'react'
import Dropzone from './dropzone'
const Profile2 = () => {
  return (
    <div className='min-h-screen w-screen flex justify-center items-center p-2 content-center flex-col'>
      <form className='md:w-6/12 lg:w-6/12'>
        <h1 className='font-bold text-xl mt-8'>Provide your company details</h1>
        <h3 className='border-b my-4 font-semibold'>Company details</h3>
        <h1 className='font-semibold my-2'>Enter Company Name</h1>
        <input type='text' name='' className='border rounded bg-gray-100 w-full h-12 p-4 outline-none' />
        <h1 className='font-semibold my-3'>Upload Company Logo</h1>
        <Dropzone />
        <h1 className='font-semibold my-3'>Company Description</h1>
        <textarea placeholder='Enter your company description here' className='border rounded bg-gray-100 w-full h-32 outline-none text-sm p-2'></textarea>
        <h1 className='font-semibold my-3'>Company Address</h1>
        <textarea placeholder='Enter your company address here'  className='border rounded bg-gray-100 w-full h-32 outline-none text-sm p-2'></textarea>
        <h1 className='font-semibold my-3'>Company Website</h1>
        <input type='url' placeholder='Enter your company`s website URL here' className='border rounded bg-gray-100 w-full h-12 outline-none text-sm p-2' />
        <h1 className='font-semibold my-3'>Company Email id</h1>
        <input type='url' placeholder='Enter your company`s Email id here' className='border rounded bg-gray-100 w-full h-12 outline-none text-sm p-2' />
        <div>
          <h1 className='font-semibold my-3'>Company Contact Number</h1>
          <input type='number' placeholder='Enter your company`s email id here' className='border rounded bg-gray-100 w-full h-12 outline-none text-sm p-2' />
          <p className='border-b-2 my-8'></p>
        </div>
        <button className='float-right bg-yellow-500 h-12 w-1/2 md:w-2/5 lg:w-2/5 text-xs rounded text-white'>Save & Continue</button>
      </form>
    </div>
  )
}
export default Profile2;
