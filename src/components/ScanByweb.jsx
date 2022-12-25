import React, {useState} from 'react'
import QrReader  from 'react-qr-reader'
const ScanByweb = () => {
    const [result, setResult] = useState('')
    const handleErrorScanweb = (err) => {
        console.log(err)
    }
    const handleScanweb = (res) => {
        if (res) {
            console.log(res)
            setResult(res)
        }
    }
  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
        <h3 className='m-2 text-center'>Scan QR Code using Camera </h3>
        <QrReader 
        className='m-2'
        delay={300}
        style={{width: '100%'}}
        onError={handleErrorScanweb}
        onScan={handleScanweb}
        />
        <div className='m-2 d-flex justify-content-center align-items-center flex-column'>
        <h3 className='text-center'>scanned code will be: <br />
            <a href={result} target="_blank">
                {result}
            </a>
        </h3>

        </div>
    </div>
  )
}

export default ScanByweb
