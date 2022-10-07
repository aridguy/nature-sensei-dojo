import React from 'react'

import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
            <div className='container-fluid bg-primary topnav'>
                <div className='container'>
                    <div className='contents row'>
                        <div className='col-md-3'>
                            <i className='fa fa-phone text-theme-colored'></i>
                        </div>
                        <div className='col-md-3'></div>
                        <div className='col-md-3'></div>
                        <div className='col-md-3'></div>
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
