import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="client-footer container-fluid">
            <footer className="container">
                <div className="footer-content d-flex flex-wrap justify-content-center">
                    <ul>
                        <p className="text-light">ABOUT US</p>
                        <li><Link to={"/about"}>Who we are?</Link></li>
                    </ul>
                    <ul>
                        <p className="text-light">POLICIES</p>
                        <li><Link to={"/about"}>30-Day Returns</Link></li>
                        <li><Link to={"/about"}>Privacy Policy</Link></li>
                    </ul>
                    <ul>
                        <p className="text-light">CUSTOMER DELIGHT</p>
                        <li><Link to={"/about"}>Contact Us</Link></li>
                        <li>1800-419-0066</li>
                        <li>(9 am-10 pm, 7 days a week)</li>
                    </ul>
                </div>

            </footer>
        </div>
    )
}

export default Footer
