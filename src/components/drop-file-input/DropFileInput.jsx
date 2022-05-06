import React, {useRef, useState} from 'react'
import PropTypes from 'prop-types'

import './DropFileInput.css'
import { ImageConfig } from "../../config/ImageConfig.jsx"
import uploadImg from  '../../assets/cloud-upload-regular-240.png'

export const DropFileInput = props => {

  const wrapperRef = useRef(null);

  const [fileList, setfileList] = useState([])

  const onDragEnter = () => wrapperRef.current.classList.add('dragover')

  const onDragLeave = () => wrapperRef.current.classList.remove('dragover')

  const onDrop = () => wrapperRef.current.classList.remove('dragover')

  const onFileDrop = (e) => {
    const newFile = e.target.files[0]
    if (newFile) {
      const updateList = [...fileList,newFile]
      setfileList(updateList)
      props.onFileChange(updateList)
    }
  }

  const fileRemove = (file) => {

    console.warn(file)
    const updateList = [...fileList]
    updateList.splice(fileList.indexOf(file),1)
      setfileList(updateList)
      props.onFileChange(updateList)

  }
  return (
    <>
    <div 
    ref={wrapperRef}
    className='drop-file-input'
    onDragEnter={onDragEnter}
    onDragLeave={onDragLeave}
    onDrop={onDrop}
    >
       <div className='drop-file-input__label'>
            <img src={uploadImg} alt="upload" />
            <p>Drag & Drop your files here</p>
       </div>
       <input type="file" value="" onChange={onFileDrop}/>
    </div>
    {
      fileList.length > 0  ? (
        <div className="drop-file-preview">
            <p className="drop-file-preview__title">
              Ready to upload
            </p>
            {
              fileList.map((item, index) => (
                <div key={index} className='drop-file-preview__item'>
                  <img src={ImageConfig[item.type.split('/')[1]] ||  ImageConfig['default']} alt="" />
                  <div className='drop-file-preview__item__info'>
                      <p>{item.name}</p>
                      <p>{item.size}</p>
                  </div>
                  <span className='drop-file-preview__item__del' onClick ={() => fileRemove(item) }>x</span>
                </div>
              ))
            }
        </div>
      ) : null
    }
    </>
  )
}

DropFileInput.propTypes = {

    onFileChange: PropTypes.func
}

export default DropFileInput