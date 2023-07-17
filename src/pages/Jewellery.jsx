import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EndPoints from '../api/EndPoints';
import Items from '../components/Items';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Loader from '../components/Loader';

const Jewellery = () => {
    const [jewelleryItem , setJewelleryItem] = useState([]);

    useEffect(()=>{
        axios(EndPoints.JEWELLERY_URL)
        .then((res)=> setJewelleryItem(res.data))
        .catch((error)=>console.log(error))
    },[])
  return (
    <>
    <Navbar />
    <Header />
    <div className='container'>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        {jewelleryItem.length ? jewelleryItem.map((item)=>(
            <Items key={item.id} product={item} />
        ))
        : <Loader />
        } 
    </div>

    </div>
    </>
  )
}

export default Jewellery