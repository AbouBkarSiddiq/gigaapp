import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

export default function MyDropzone() {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    accept: 'image/*'
  })

  return (
    <div {...getRootProps()} className='flex justify-center items-center border border-gray-400 border-dashed p-4 mt-8 w-full'>
      <input {...getInputProps()}  />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag here or <span>browse</span> to upload</p>
      }
    </div>
  )
}