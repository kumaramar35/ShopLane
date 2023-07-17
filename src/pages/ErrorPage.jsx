import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { useLocation, useRouteError} from 'react-router-dom'
import {BiError} from 'react-icons/bi'

const ErrorPage = () => {
    const err = useLocation();
    // const text = useRouteError();
  return (
    <>
        <Navbar />
        <Header />
       <div className="container">
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 d-flex flex-column justify-content-center ms-4">
                <img src="https://i.gifer.com/7VE.gif" alt="gif" />
                <h2  style={{paddingLeft:"1.75em"}}>Error 404</h2>
                <h3  style={{paddingLeft:"2em"}}>Invalid path : "{err.pathname}"</h3>
            </div>
            <div className="col-md-3"></div>
        </div>
       </div>
    </>
  )
}

export default ErrorPage