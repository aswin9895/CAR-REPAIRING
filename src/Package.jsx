import React from 'react'
import myStyle5 from "./css/package.module.css"

const Package = () => {
  return (
    <div id='packagess' className={myStyle5.topdiv}>
        <h1 className='text-center text-dark fw-bold fs-1'>SERVICE PACKAGES</h1>
        <p className='fs-4 text-center text-danger'>Regular Oil And Filter Changes Are Essential For Engine Health.</p>
        <div className={myStyle5.mdiv}>
          <div className={myStyle5.fdiv}>
            <div>
              <h1 className='text-danger mt-5 fs-3'>
                FREE SERVICES
              </h1>
              <ul className='text-secondary'>
                  <li >Wiper Blade Installation</li>
                  <li>Check Engine Light Code Retrieval</li>
                  <li>Air Filter Replacement Installation</li>
                  <li>Starting And Charging System Evaluation</li>
                </ul>
            </div>
            <div>
              <button className={myStyle5.pacbtn}>$ 25</button>
            </div>
          </div>
          <div className={myStyle5.fdiv}>
            <div>
              <h1 className='text-danger mt-5 fs-3'>
              FLUID SERVICES
              </h1>
              <ul className='text-secondary'>
                  <li >Engine Flush Service</li>
                  <li>Transmission Fluid Service</li>
                  <li>Brake Fluid Exchange</li>
                  <li>Power Steering Flush</li>
                </ul>
            </div>
            <div>
              <button className={myStyle5.pacbtn}>$ 25</button>
            </div>
          </div>
          <div className={myStyle5.fdiv}>
            <div>
              <h1 className='text-danger mt-5 fs-3'>
              MAINTENANCE SERVICES
              </h1>
              <ul className='text-secondary'>
                  <li >Headlight Restoration</li>
                  <li>Samll Bulb installation</li>
                  <li>Cabin Air Filter Install</li>
                  <li>Spring Maintenance Package</li>
                </ul>
            </div>
            <div>
              <button className={myStyle5.pacbtn}>$ 25</button>
            </div>
          </div>
          <div className={myStyle5.fdiv}>
            <div>
              <h1 className='text-danger mt-5 fs-3'>
              HOME WASH SERVICES
              </h1>
              <ul className='text-secondary'>
                  <li >Spring Maintenance Package</li>
                  <li>Summer Maintenance Package</li>
                  <li>Winter Maintenance Package</li>
                  <li>Smoke Test Diagnostic Service</li>
                </ul>
            </div>
            <div>
              <button className={myStyle5.pacbtn}>$ 25</button>
            </div>
          </div>
          <div className={myStyle5.fdiv}>
            <div>
              <h1 className='text-danger mt-5 fs-3'>
              SYSTEM EVALUATIONS
              </h1>
              <ul className='text-secondary'>
                  <li >A/C System Leak Evaluation</li>
                  <li>Steering And Suspension System Evaluation</li>
                  <li>Coolant System Evaluation</li>
                  <li>Cranks No Start Diagnostic Service</li>
                </ul>
            </div>
            <div>
              <button className={myStyle5.pacbtn}>$ 25</button>
            </div>
          </div>
          <div className={myStyle5.fdiv}>
            <div>
              <h1 className='text-danger mt-5 fs-3'>
              TUNE UPS
              </h1>
              <ul className='text-secondary'>
                  <li >Small Bulb Installation</li>
                  <li>Cranks No Start Diagnostic Service</li>
                  <li>Engine Cooling System Check</li>
                  <li>Headlight Restoration</li>
                </ul>
            </div>
            <div>
              <button className={myStyle5.pacbtn}>$ 25</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Package