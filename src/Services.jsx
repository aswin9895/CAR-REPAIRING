import React from 'react'
import myStyle3 from './css/service.module.css'

const Services = () => {
    return (
        <div id='servicess'>
            <div>
                <h1 className='text-center fs-1 text-dark fw-bold mt-5'>
                    AUTO REPAIR SERVICES
                </h1>
                <p className='text-center fs-4 text-danger'>
                    We Offer A Wide Range Of Services To Help You get Back On The Road Quickly And Safely.
                </p>
            </div>


            <div className={myStyle3.divflex}>
                <div>
                    <a className={myStyle3.ac} href=""><img className={myStyle3.imgg} src="./img/oil.svg" alt="" /></a>
                    <h5 className={myStyle3.h5c}>
                        OIL CAHNGES
                    </h5>
                    <p className='text-secondary'>
                        Regular oil and filter changes help your <br /> engine run smoothly and efficiently.
                    </p>
                </div>
                <div>
                    <a className={myStyle3.ac} href=""><img className={myStyle3.imgg} src="./img/brakes.svg" alt="" /></a>
                    <h5 className={myStyle3.h5c}>
                        ABS BRAKES
                    </h5>
                    <p className='text-secondary'>
                        Brake maintainance is essential for safe <br /> vehicle operation and longetivity.
                    </p>
                </div>
                <div>
                    <a className={myStyle3.ac} href=""><img className={myStyle3.imgg} src="./img/transmission.svg" alt="" /></a>
                    <h5 className={myStyle3.h5c}>
                        TRANSMISSION SERVICE
                    </h5>
                    <p className='text-secondary'>
                        A well-maintained transmission can <br /> extend your vechile life and save <br /> money.
                    </p>
                </div>
            </div>
            <div className={myStyle3.divflex}>
                <div>
                    <a className={myStyle3.ac} href=""><img className={myStyle3.imgg} src="./img/tire.svg" alt="" /></a>
                    <h5 className={myStyle3.h5c}>
                        TIRES & WHEELS
                    </h5>
                    <p className='text-secondary'>
                        Regular tire inspections and service can <br /> prevent accidents and save you money.
                    </p>
                </div>
                <div>
                    <a className={myStyle3.ac} href=""><img className={myStyle3.imgg} src="./img/carwash.svg" alt="" /></a>
                    <h5 className={myStyle3.h5c}>
                        WASH AND CLEAN
                    </h5>
                    <p className='text-secondary'>
                        Keeping your car clean, washing <br /> regularly can improve gas mileage, <br /> extend paint life.
                    </p>
                </div>
                <div>
                    <a className={myStyle3.ac} href=""><img className={myStyle3.imgg} src="./img/engine.svg" alt="" />
                    </a>
                    <h5 className={myStyle3.h5c}>
                        ENGINE PERFORMANCE
                    </h5>
                    <p className='text-secondary'>
                        A well-tuned engine delivers optimal <br />performance and fuel efficiency
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Services
