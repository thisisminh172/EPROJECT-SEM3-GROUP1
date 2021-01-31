import React from 'react'
import notfoundpage from '../pictures/notfoundpage.svg'

function NoMatch() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <h3 className="text-danger">Can not find this page!</h3>
                    <div className="text-center">
                        <img style={{width:"100%"}} src={notfoundpage} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NoMatch
