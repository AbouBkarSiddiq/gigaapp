import React,{useState} from 'react'
import Drop from './drop'
import Dropzone from './dropzone'
const Profile1 = () => {
  const [userName, setuserName] = useState('')
  React.useEffect(()=>{
    console.log(userName)
  },[userName])
  return (
    <div className='min-h-screen w-screen flex justify-center items-center flex-col p-2 content-center'>
      <form>
        <h1 className='font-bold text-xl'>Complete Your Profile</h1>
        <br />
        <h1 className='font-bold'>Personal Details</h1>
        <p className='border-gray-300 text-gray-500 border-b text-sm my-4 mb-3'>Please enter the following details to complete your profile</p>
        <input type='text' name='name' onChange={(e)=>setuserName(e.target.value)} placeholder='Your full name' className='bg-gray-100 my-2 text-sm w-full rounded h-12 p-4 placeholder-gray-500 outline-none'/>
        <input type='number' name='number' placeholder='Your phone number' className='bg-gray-100 my-2 text-sm w-full rounded h-12 p-4 placeholder-gray-500 outline-none'/>
        <input type='text' name='name' placeholder='What is your role at company' className='bg-gray-100 my-2 text-sm w-full rounded h-12 p-4 placeholder-gray-500 outline-none'/>
        <h1 className='text-sm font-medium'>Upload your profile photo</h1>
        <div>
          <Dropzone />
        </div>
          <div>
            <button className="bg-yellow-500 text-white float-right text-sm py-2 px-4 mt-4 rounded inline-flex items-center">
              <span>Create Profile</span>
            </button>
            <p className='text-sm mt-8 font-light'>Step 1 of 2</p>
          </div>
        </form>
    </div>
    )
}
export default Profile1
