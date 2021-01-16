import React, {useState} from 'react'
import { useDropzone } from 'react-dropzone'
import upload from '../assests/upload.png'
const  Dropzone = () => {
  const [files, setFiles] = useState([])
  const [imgName, setimgName] = useState('')
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setimgName(acceptedFiles[0].name)
      setFiles(
      acceptedFiles.map((file) => Object.assign(file,{
      preview: URL.createObjectURL(file)
        }))
      )
    },
  })
  const images = files.map((file) =>(
    <div key={file}>
      <div>
        <img src={file.preview} alt='preview' className='w-60 h-60'/>
        <h1>{imgName}</h1>
      </div>
    </div>
  ))

  return (
    <div>
      <div {...getRootProps()} className='flex'>
      <input {...getInputProps()} />
      <div className={`flex w-full p-4 items-center text-sm text-gray-500 rounded outline-none border border-dashed border-gray-500 ${isDragActive && 'border-blue-500'} bg-gray-100`}>
        <img src={upload} alt='' className='w-8 h-8 mx-2'/>
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag here or <span className='text-blue-500 cursor-pointer'>browse</span> to upload</p>
      }
      </div>
      </div>
      <div>{images}</div>
    </div>
  )
}
export default Dropzone