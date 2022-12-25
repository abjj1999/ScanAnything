import React, {useRef, useState} from 'react'
import QrReader  from 'react-qr-reader'
const ScanByFile = () => {
    const qrRef = useRef(null);
    const [scanFile , setScanFile] = useState("")

    const handleError = (err) => {
        console.log(err)
    }
    const handleScan = (res) => {
        if (res) {
            setScanFile(res)
            console.log(res)
        }
    }
    const onScanFile = () => {
        qrRef.current.openImageDialog();
    }
  return (
    <div className=' p-1 flex justify-content-center align-items-center flex-column'>
        <h3 className='text-center'>Scan QR Code</h3>
      
        <QrReader 
        ref={qrRef}
        delay={300}
        style={{width: '100%'}}
        
        onError= {handleError}
        onScan={handleScan}
        legacyMode
        />
        <div className='d-flex justify-content-center flex-column align-items-center mt-2'>
        <button className='btn btn-danger m-2' onClick={onScanFile}>
        Import QR Code
      </button>
        <h3>scanned code will be:</h3>
        <a className='text-center' href={scanFile} target="_blank" rel="noopener noreferrer">
            {scanFile}
        </a>
        </div>
    </div>
  )
}

export default ScanByFile
