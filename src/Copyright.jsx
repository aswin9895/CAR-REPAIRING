import React from 'react'
import myStyle8 from "./css/copyright.module.css"

const Copyright = () => {
    return (
        <div className='pt-2 bg-dark d-flex justify-content-evenly align-items-center'>
            <div className='text-light'>
                <p>Kar - Car Wash © 2023 - Designed by Aswin.</p>
            </div>
            <div>
                <ul>
                    
                        <li className={myStyle8.copylist}><a className={myStyle8.copylink} href="">Terms & Conditions</a></li>
                        <li className={myStyle8.copylist}><a className={myStyle8.copylink} href="">Privacy Policy</a></li>
                        <li className={myStyle8.copylist}><a className={myStyle8.copylink} href="">Contact</a></li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Copyright