import React from 'react'
import myStyle6 from "./css/review.module.css"

const Review = () => {
    return (
        <div id='reviewss' className={myStyle6.maindiv}>
            <h1 className='text-center fs-1 fw-bold text-dark'>TESTIMONIALS</h1>
            <h5 className='text-center text-danger fs-3 pt-2 pb-5'>People Love Us</h5>

            {/* profile */}
            <div className='d-flex justify-content-evenly align-items-center flex-wrap mt-5'>
                <div className='text-center w-25 me-5'>
                    <img className={myStyle6.imgprofile} src="./img/t1.jpg" alt="" />
                    <h1 className='fs-1 fw-bold pt-2'>Imaan Butt</h1>
                    <h5 className='text-warning pt-1'>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                    </h5>
                    <h1 className='text-danger text-start pt-4'>
                        <i className="fa-solid fa-quote-left"></i>
                    </h1>
                    <p className='text-center text-secondary fs-4'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius laboriosam accusantium illum, atque reprehenderit odit.
                    </p>
                    <h1 className='text-danger text-end pt-4'>
                        <i className="fa-solid fa-quote-right"></i>
                    </h1>
                </div>


                <div className='text-center w-25 me-5'>
                    <img className={myStyle6.imgprofile} src="./img/t3.jpg" alt="" />
                    <h1 className='fs-1 fw-bold pt-2'>William Hoyy</h1>
                    <h5 className='text-warning pt-1'>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                    </h5>
                    <h1 className='text-danger text-start pt-4'>
                        <i className="fa-solid fa-quote-left"></i>
                    </h1>
                    <p className='text-center text-secondary fs-4'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius laboriosam accusantium illum, atque reprehenderit odit.
                    </p>
                    <h1 className='text-danger text-end pt-4'>
                        <i className="fa-solid fa-quote-right"></i>
                    </h1>
                </div>


                <div className='text-center w-25 me-5'>
                    <img className={myStyle6.imgprofile} src="./img/t2.jpg" alt="" />
                    <h1 className='fs-1 fw-bold pt-2'>Sanam Doe</h1>
                    <h5 className='text-warning pt-1'>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </h5>
                    <h1 className='text-danger text-start pt-4'>
                        <i className="fa-solid fa-quote-left"></i>
                    </h1>
                    <p className='text-center text-secondary fs-4'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius laboriosam accusantium illum, atque reprehenderit odit.
                    </p>
                    <h1 className='text-danger text-end pt-4'>
                        <i className="fa-solid fa-quote-right"></i>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Review