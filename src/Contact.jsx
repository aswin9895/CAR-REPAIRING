import React from 'react'
import myStyle7 from "./css/contact.module.css"
import {TextField, Button} from '@mui/material';

const Contact = () => {
  return (
    <div id='contactt' className={myStyle7.maindiv}>
        <h1 className='text-center fs-1 fw-bold text-dark'>CONTACT US</h1>
        <h5 className='text-center text-danger fs-3 pt-2 pb-5'>Get In Touch With Us 24/7</h5>

         <div className='container text-center pt-4'>
         <TextField style={{width: "40%"}} className='m-5' id="outlined-basic" label="Name" variant="outlined" />
         <TextField style={{width: "40%"}} className='m-5' id="outlined-basic" label="Email" variant="outlined" />
         <TextField style={{width: "85%"}} className='ms-5 me-5' id="outlined-basic" label="Subject" variant="outlined" />
         <TextField style={{width: "85%"}} className='m-5' multiline rows={4} id="outlined-multiline" label="Write Your Message" variant="outlined" />
         <Button style={{ width: "25%", height: "70px" }} className='bg-secondary text-light fw-bold' variant="contained">SEND MESSAGE</Button>
          </div>   
    </div>
  )
}

export default Contact