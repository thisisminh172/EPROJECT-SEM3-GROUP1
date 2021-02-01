import React from 'react'
import {Route, Link, useRouteMatch, useParams } from 'react-router-dom'

function Products() {
    let { type } = useParams();
    let { path, url } = useRouteMatch();
    return (
        <div>
            this is {type} page
            the url : {url}
            the path: {path}
            <div className="">
                <div className="product-list">
                    <div className="product-item">
                        <div className="card">
                            <img className="card-img-top" src="https://picsum.photos/370/300" alt="Card image" />
                            <div className="card-body">
                                <h4 className="card-title">$ 29,435</h4>
                            </div>
                            <div className="client-hover-product-item"><Link to={`${url}/1`}>View Details &gt;&gt;</Link></div>
                        </div>
                    </div>
                    <div className="product-item">
                        <div className="card">
                            <div>
                                <img className="card-img-top" src="https://picsum.photos/370/300" alt="Card image" />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">$ 29,435</h4>
                            </div>
                            <div className="client-hover-product-item"><Link to={"products/id"}>View Details &gt;&gt;</Link></div>

                        </div>
                    </div>
                    <div className="product-item">
                        <div className="card">
                            <img className="card-img-top" src="https://picsum.photos/370/300" alt="Card image" />
                            <div className="card-body">
                                <h4 className="card-title">$ 29,435</h4>
                            </div>
                            <div className="client-hover-product-item"><Link to={"products/id"}>View Details &gt;&gt;</Link></div>

                        </div>
                    </div>
                </div>
            </div><br />
            

             
        </div>
    )
}

export default Products
