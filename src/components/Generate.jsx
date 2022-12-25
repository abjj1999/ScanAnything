import React, {useState} from 'react'
import QRCode from 'qrcode'

const Generate = () => {
    const [text, setText] = useState('')
    const [imageurl, setImageurl] = useState('')
    const generateCode = async() => {
        try {
            const res = await QRCode.toDataURL(text)
            console.log(res)
            setImageurl(res)
        } catch (error) {
            
        }
    }
  return (
    <div className='row d-flex justify-content-center align-items-center'>
        <h3 className='text-center col-12'>Generate QR Code</h3>
      <input className="form-control mb-3 m-2 w-50
       col-6" placeholder='Enter a URL' type="text" onChange={e => setText(e.target.value)}  />
        <button  onClick={() => generateCode()}  className="btn btn-primary col-4 m-2">Generate</button>
        <div className='mt-3 d-flex justify-content-center align-items-center flex-column'>
            <h3>QR Code will be: </h3>
        {imageurl && (
        <a href={imageurl} download>
            <img src={imageurl} className = "img-fluid "  width={300} height={300} /> 

        </a>
        )}

        </div>
        
    </div>
  )
}

export default Generate
