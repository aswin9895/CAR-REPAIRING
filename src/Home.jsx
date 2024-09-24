import React from 'react'
import myStyle2 from './css/home.module.css'

const Home = () => {
    return (
        <div>
            <div id='homee' className={myStyle2.div1}>
                <h1 className={myStyle2.fh1}>
                    BEST CAR MAINTENANCE SERVICES
                </h1>
                <h1 className={myStyle2.fh2}>
                    Services & Repair
                </h1>
                <p className={myStyle2.p1}>
                    At Kar Repair, we're commited to earning your trust by providing the highest <br />quality car repair services at a fair price.
                </p>
                <h1 className={myStyle2.fh3}>
                    Phone: 123 456 786
                </h1>
                <button className={myStyle2.btn}>
                    Contact Us
                </button>
            </div>
        </div>
    )
}

export default Home