import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EndPoints from '../api/EndPoints';
import Items from '../components/Items';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Loader from '../components/Loader';


const MensClothing = () => {
    const [mensClothingItem , setMensClothingItem] = useState([]);

    useEffect(()=>{
        axios(EndPoints.MENS_CLOTHING_URL)
        .then((res)=> setMensClothingItem(res.data))
        .catch((error)=>console.log(error))
    })
  return (
    <>
        <Navbar />
        <Header />
   
    <div className='container'>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        {mensClothingItem.length ? mensClothingItem.map((item)=>(
            <Items key={item.id} product={item} />
        ))
        : <Loader />
        } 
    </div>

    </div>
    </>
  )
}

export default MensClothing