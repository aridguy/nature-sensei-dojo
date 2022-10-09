import React from 'react'

import "./Navbar.css"

const Navbar = () => {
    return (
        <div>

            <div className='container-fluid bg-primary topnav'>
                <div className='container'>
                    <div className='contents row'>
                        <div className='col-md-3'>
                            <i className='fa fa-phone text-theme-colored'> 234 0945 575 565</i>
                        </div>
                        <div className='col-md-3'>
                            <i className='fa fa-clock-o text-theme-colored'>Mon-Fri 8:00 to 2:00</i>
                        </div>
                        <div className='col-md-3'>

                            <i className='fa fa-envelope-o text-theme-colored'>sensei@mail.com</i>
                        </div>
                        <div className='col-md-3'>
                        <i className='fa fa-clock-o text-theme-colored'>Mon-Fri 8:00 to 2:00</i>
                        </div>
                    </div>
                </div>
            </div>
            <nav className='navbar container-fluid'>
                <div className='container'>

                </div>
            </nav>
        </div>
    )
}

export default Navbar
