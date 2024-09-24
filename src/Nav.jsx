import React from 'react'
import myStyle from './css/nav.module.css'

export const Nav = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    
                <div className='d-flex align-items-center'>
                    <div>
                        <a href=""><img className={myStyle.img1} src="./img/img1.png" alt="" /></a>
                    </div>
                    <div>
                        <p className={myStyle.p}><a className={myStyle.kar} href="">Kar <br /><span className={myStyle.repair}>Car Repairing</span></a></p>
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

    )
}

export default Nav