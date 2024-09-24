import myStyle from './css/nav.module.css'
import myStyle2 from './css/home.module.css'
import myStyle3 from './css/service.module.css'
import myStyle4 from './css/products.module.css'
import myStyle5 from "./css/package.module.css"
import myStyle6 from "./css/review.module.css"
import myStyle7 from "./css/contact.module.css"
import { TextField, Button } from '@mui/material';
import myStyle8 from "./css/copyright.module.css"

import './css/App.css'

function App() {

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">

            <div className='d-flex align-items-center'>
              <div>
                <a href=""><img className={myStyle.navimg1} src="./img/img1.png" alt="" /></a>
              </div>
              <div>
                <p className={myStyle.p}><a className={myStyle.navkar} href="">Kar <br /><span className={myStyle.navrepair}>Car Repairing</span></a></p>
              </div>
            </div>

            <button className="navbar-toggler border-light bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active text-light" aria-current="page" href="#homee">Home</a>
                </li>
                <li className="nav-item">
                  <a className="text-light nav-link active" aria-current="page" href="#servicess">Services</a>
                </li>
                <li className="nav-item">
                  <a className="text-light nav-link active" aria-current="page" href="#productss">Products</a>
                </li>
                <li className="nav-item">
                  <a className="text-light nav-link active" aria-current="page" href="#packagess">Packages</a>
                </li>
                <li className="nav-item">
                  <a className="text-light nav-link active" aria-current="page" href="#reviewss">Review</a>
                </li>
                <li className="nav-item">
                  <a className="text-light nav-link active" aria-current="page" href="#contactt">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <div id='homee' className={myStyle2.homediv1}>
          <h1 className={myStyle2.homefh1}>
            BEST CAR MAINTENANCE SERVICES
          </h1>
          <h1 className={myStyle2.homefh2}>
            Services & Repair
          </h1>
          <p className={myStyle2.homep1}>
            At Kar Repair, we're commited to earning your trust by providing the highest <br />quality car repair services at a fair price.
          </p>
          <h1 className={myStyle2.homefh3}>
            Phone: 123 456 786
          </h1>
          <button className={myStyle2.homebtn}>
            Contact Us
          </button>
        </div>
      </div>
      <div id='servicess'>
        <div>
          <h1 className='text-center fs-1 text-dark fw-bold mt-5'>
            AUTO REPAIR SERVICES
          </h1>
          <p className='text-center fs-4 text-danger'>
            We Offer A Wide Range Of Services To Help You get Back On The Road Quickly And Safely.
          </p>
        </div>


        <div className={myStyle3.servdivflex}>
          <div>
            <a className={myStyle3.servac} href=""><img className={myStyle3.servimgg} src="./img/oil.svg" alt="" /></a>
            <h5 className={myStyle3.servh5c}>
              OIL CAHNGES
            </h5>
            <p className='text-secondary'>
              Regular oil and filter changes help your <br /> engine run smoothly and efficiently.
            </p>
          </div>
          <div>
            <a className={myStyle3.servac} href=""><img className={myStyle3.servimgg} src="./img/brakes.svg" alt="" /></a>
            <h5 className={myStyle3.servh5c}>
              ABS BRAKES
            </h5>
            <p className='text-secondary'>
              Brake maintainance is essential for safe <br /> vehicle operation and longetivity.
            </p>
          </div>
          <div>
            <a className={myStyle3.servac} href=""><img className={myStyle3.servimgg} src="./img/transmission.svg" alt="" /></a>
            <h5 className={myStyle3.servh5c}>
              TRANSMISSION SERVICE
            </h5>
            <p className='text-secondary'>
              A well-maintained transmission can <br /> extend your vechile life and save <br /> money.
            </p>
          </div>
        </div>
        <div className={myStyle3.servdivflex}>
          <div>
            <a className={myStyle3.servac} href=""><img className={myStyle3.servimgg} src="./img/tire.svg" alt="" /></a>
            <h5 className={myStyle3.servh5c}>
              TIRES & WHEELS
            </h5>
            <p className='text-secondary'>
              Regular tire inspections and service can <br /> prevent accidents and save you money.
            </p>
          </div>
          <div>
            <a className={myStyle3.servac} href=""><img className={myStyle3.servimgg} src="./img/carwash.svg" alt="" /></a>
            <h5 className={myStyle3.servh5c}>
              WASH AND CLEAN
            </h5>
            <p className='text-secondary'>
              Keeping your car clean, washing <br /> regularly can improve gas mileage, <br /> extend paint life.
            </p>
          </div>
          <div>
            <a className={myStyle3.servac} href=""><img className={myStyle3.servimgg} src="./img/engine.svg" alt="" />
            </a>
            <h5 className={myStyle3.servh5c}>
              ENGINE PERFORMANCE
            </h5>
            <p className='text-secondary'>
              A well-tuned engine delivers optimal <br />performance and fuel efficiency
            </p>
          </div>
        </div>
      </div>
      <div id='productss' className={myStyle4.prddivp}>
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
      <div id='packagess' className={myStyle5.packtopdiv}>
        <h1 className='text-center text-dark fw-bold fs-1'>SERVICE PACKAGES</h1>
        <p className='fs-4 text-center text-danger'>Regular Oil And Filter Changes Are Essential For Engine Health.</p>
        <div className={myStyle5.packmdiv}>
          <div className={myStyle5.packfdiv}>
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
              <button className={myStyle5.packpacbtn}>$ 25</button>
            </div>
          </div>
          <div className={myStyle5.packfdiv}>
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
              <button className={myStyle5.packpacbtn}>$ 25</button>
            </div>
          </div>
          <div className={myStyle5.packfdiv}>
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
              <button className={myStyle5.packpacbtn}>$ 25</button>
            </div>
          </div>
          <div className={myStyle5.packfdiv}>
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
              <button className={myStyle5.packpacbtn}>$ 25</button>
            </div>
          </div>
          <div className={myStyle5.packfdiv}>
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
              <button className={myStyle5.packpacbtn}>$ 25</button>
            </div>
          </div>
          <div className={myStyle5.packfdiv}>
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
              <button className={myStyle5.packpacbtn}>$ 25</button>
            </div>
          </div>
        </div>
      </div>
      <div id='reviewss' className={myStyle6.revmaindiv}>
        <h1 className='text-center fs-1 fw-bold text-dark'>TESTIMONIALS</h1>
        <h5 className='text-center text-danger fs-3 pt-2 pb-5'>People Love Us</h5>

        {/* profile */}
        <div className='d-flex justify-content-evenly align-items-center flex-wrap mt-5'>
          <div className='text-center w-25 me-5'>
            <img className={myStyle6.revimgprofile} src="./img/t1.jpg" alt="" />
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
            <img className={myStyle6.revimgprofile} src="./img/t3.jpg" alt="" />
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
            <img className={myStyle6.revimgprofile} src="./img/t2.jpg" alt="" />
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
      <div id='contactt' className={myStyle7.contactmaindiv}>
        <h1 className='text-center fs-1 fw-bold text-dark'>CONTACT US</h1>
        <h5 className='text-center text-danger fs-3 pt-2 pb-5'>Get In Touch With Us 24/7</h5>

        <div className='container text-center pt-4'>
          <TextField style={{ width: "40%" }} className='m-5' id="outlined-basic" label="Name" variant="outlined" />
          <TextField style={{ width: "40%" }} className='m-5' id="outlined-basic" label="Email" variant="outlined" />
          <TextField style={{ width: "85%" }} className='ms-5 me-5' id="outlined-basic" label="Subject" variant="outlined" />
          <TextField style={{ width: "85%" }} className='m-5' multiline rows={4} id="outlined-multiline" label="Write Your Message" variant="outlined" />
          <Button style={{ width: "25%", height: "70px" }} className='bg-secondary text-light fw-bold' variant="contained">SEND MESSAGE</Button>
        </div>
      </div>
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
    </>
  )
}

export default App
