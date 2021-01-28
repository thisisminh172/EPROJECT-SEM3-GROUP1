import React from 'react'

function Header() {
    return (
        <div>
            {/* start jumbotron */}
            <div className="jumbotron">
                <div className="container text-center">
                    <h1>YASH</h1>
                    <p>Gems &amp; Jewelleries</p>
                </div>
            </div>
            {/* end jumbotron */}
            {/* start navbar */}
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <a className="navbar-brand" href="#">Logo</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Home</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Deals</a></li>
                            <li><a href="#">Stores</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#"><span className="glyphicon glyphicon-user" /> Your Account</a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-shopping-cart" /> Cart</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* end navbar */}

        </div>
    )
}

export default Header
