import React from 'react'

import "./Navbar.css"

const Navbar = () => {
    return (
        <div>

            <div className='container-fluid bg-primary topnav'>
                <div className='container'>
                    <div className='contents row'>
                        <div className='col-md-7'>
                            <i className='fa fa-phone text-theme-colored'> 234 0945 575 565</i>&nbsp;&nbsp;
                            <i className='fa fa-clock-o text-theme-colored'> Mon-Fri 8:00 to 2:00</i>&nbsp;&nbsp;
                            <i className='fa fa-envelope-o text-theme-colored'> contact@yourdomain.com</i>
                        </div>
                        <div className='col-md-5'>
                            <i className='fa fa-facebook'></i>
                            <i className='fa fa-google-plus'></i>
                            <i className='fa fa-instagram'></i>
                            <i className='fa fa-twitter'></i>
                        </div>
                    </div>
                </div>
            </div>

            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">WebSiteName</a>
                    </div>
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="#">Home</a></li>
                        <li><a href="#">Page 1</a></li>
                        <li><a href="#">Page 2</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
