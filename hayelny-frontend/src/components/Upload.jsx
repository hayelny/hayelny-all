import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const Upload = () => {
    const [formData, setFormData] = useState({
        image: null,
    });

    const [response , setResponse] = useState(null);

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const formData = new FormData();
          formData.append('image', e.target.image.files[0]);

          const res = await axios.post(
            "http://20.203.234.120:8080/images",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
            ).catch((err) => {
                console.log(err);
            });
            navigate(`/result/${res?.data?.id}`)
            
        } catch (error) {
          // Handle error
          console.log(error);
                   
        }
      };
      
  return (
        <div className="flex justify-center items-center bg-blue-400 py-36">
    <form onSubmit={handleSubmit} encType='multipart/form-data' className="bg-white border-gray-400 border-2 rounded-xl py-36 pl-16 w-[981px] ">
        <h2 className='text-center my-10 text-4xl font-semibold'>Upload Files</h2>
        <div className="flex flex-col justify-center items-center gap-4 w-[432px] border-4 border-dashed border-blue-300 rounded-xl p-10">
            <input type="file" name='image' className='text-[#50A9E3] bg-white rounded-full  p-6 text-2xl w-full ' placeholder='Email' />
            <p className='text-gray-400'>Supported Files: DICOM, JPG</p>
            <div className='flex self-center'>
                <button type='submit' className='px-10 py-4 my-10 bg-[#50A9E3] rounded-full text-white font-semibold text-3xl'>Upload</button>
            </div>
        </div>
        </form>
    </div>
  )
}

export default Upload