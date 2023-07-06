import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EndPoints from '../api/EndPoints'
import Items from '../components/Items';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Loader from '../components/Loader';

const Electronics = () => {
    const [electronicsItem, setElectronicsItem] = useState([]);
    useEffect(()=>{
        axios(EndPoints.ELECTRONICS_URL)
        .then((res) => setElectronicsItem(res.data))
        .catch((error) => console.log(error));
    })
  return (
    <>
    <Navbar />
    <Header />
    <div className='container'>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        {electronicsItem.length ? electronicsItem.map((electronicItem) => (
            <Items key={electronicItem.id} product={electronicItem} />
        ))
        :<Loader />
        }

        </div>
        
    </div>
    </>
  )
}

export default Electronics