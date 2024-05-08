import React from 'react'
import Alert from 'react-bootstrap/Alert';
import { CiBellOff } from "react-icons/ci";
const TopBar = () => {
  return (
    <div>
      <Alert className='p-1 rounded-0 mb-0' style={{backgroundColor:"#1a1918",color:"white"}}>
      <CiBellOff  style={{fontSize:"22px"}} className=''/>
          Enjoy 30% off - shop Now and Save Big 
        </Alert>
    </div>
  )
}

export default TopBar
