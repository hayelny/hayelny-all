import React from 'react'

const Register = () => {
  return (
<div className="flex justify-center items-center my-32">
    <div className="bg-[#50A9E3] rounded-xl py-36 pl-16 w-[981px] ">
        <div className="flex flex-col justify-start items-start gap-16 w-[824px]">
            <div className='flex flex-col gap-5 items-start w-full'>
            <label htmlFor="name" className='text-2xl text-white text-end font-bold  m-2'>Name</label>
            <input type="text" className='text-[#50A9E3] bg-white rounded-xl  p-6 text-2xl w-full ' placeholder='Name' />
            </div>
            <div className='flex flex-col gap-5 items-start w-full'>
            <label htmlFor="date" className='text-2xl text-white text-end font-bold  m-2'>Date of Birth</label>
            <input type="date" className='text-[#50A9E3] bg-white rounded-xl  p-6 text-2xl w-full ' placeholder='date' />
            </div>
            <div className='flex flex-col gap-5 items-start w-full'>
            <label htmlFor="gender" className='text-2xl text-white text-end font-bold  m-2'>Gender</label>
            <input type="text" className='text-[#50A9E3] bg-white rounded-xl  p-6 text-2xl w-full ' placeholder='gender' />
            </div>
            <div className='flex flex-col gap-5 items-start w-full'>
            <label htmlFor="email" className='text-2xl text-white text-end font-bold  m-2'>Email Address</label>
            <input type="email" className='text-[#50A9E3] bg-white rounded-xl  p-6 text-2xl w-full ' placeholder='Email' />
            </div>
            
            <div className='flex flex-col gap-5 items-start w-full'>
            <label htmlFor="password" className='text-2xl text-white text-end font-bold  m-2'>Password</label>
            <input type="password" className='text-[#50A9E3] bg-white rounded-xl  p-6 text-2xl w-full ' placeholder='Password' />
            </div>
            <div className='flex self-center'>
                <button className='px-10 py-4 bg-white rounded-full text-[#50A9E3] font-semibold text-3xl'>Sign up</button>
            </div>
        </div>
        </div>
    </div>  )
}

export default Register