import React from 'react'
import myStyle4 from './css/products.module.css'

const Products = () => {
  return (
    <div id='productss' className={myStyle4.divp}>
        <div>
            <h1 className='text-center fs-1 fw-bolder text-light'>
                OUR PRODUCTS
            </h1>
            <p className='text-danger fs-5 text-center'>
                Limited-Time Discounts
            </p>
        </div>

        <div className='d-flex justify-content-center align-items-top flex-wrap'>
            <div className={myStyle4.prddiv}>
                <a href=""><img className={myStyle4.prdimg} src="./img/p1.jpg" alt="" /></a>
                <h1 className='text-light text-center fw-normal fs-2 mt-4'>
                    Doors and Paint
                </h1>
                <h1 className='text-danger text-center fw-normal fs-1 mt-3'>
                    $120
                </h1>
                <p className='text-secondary text-center fw-normal mt-3 mb-5'>
                    Order any color paint for your <br />doors or you can buy new doors
                </p>
                <button className={myStyle4.prdbtn}>
                    Order Now
                </button>
            </div>
            <div className={myStyle4.prddiv}>
                <a href=""><img className={myStyle4.prdimg} src="./img/p2.jpg" alt="" /></a>
                <h1 className='text-light text-center fw-normal fs-2 mt-4'>
                    Custom Interior
                </h1>
                <h1 className='text-danger text-center fw-normal fs-1 mt-3'>
                    $120
                </h1>
                <p className='text-secondary text-center fw-normal mt-3 mb-5'>
                    Order leather custom interior <br />designs for your cars any color
                </p>
                <button className={myStyle4.prdbtn}>
                    Order Now
                </button>
            </div>
            <div className={myStyle4.prddiv}>
                <a href=""><img className={myStyle4.prdimg} src="./img/p1.jpg" alt="" /></a>
                <h1 className='text-light text-center fw-normal fs-2 mt-4'>
                    Leather Stearing
                </h1>
                <h1 className='text-danger text-center fw-normal fs-1 mt-3'>
                    $120
                </h1>
                <p className='text-secondary text-center fw-normal mt-3 mb-5'>
                    Make your car beautiful with <br /> leather stearing cover 
                </p>
                <button className={myStyle4.prdbtn}>
                    Order Now
                </button>
            </div>
        </div>
    </div>
  )
}

export default Products