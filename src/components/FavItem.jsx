import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Items from './Items'
import Navbar from './Navbar'
import Header from './Header'
import EmptyItems from './EmptyItems'
import {AiOutlineHeart} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const FavItem = () => {
  const navigate = useNavigate();
    const favItems = useSelector((state) => state.favItems)
    // text for Fav Items
    const text1 ="There is no product in your favorites"
    const text2 ="Add the products you like to your favorites to buy them later"

    useEffect(()=>{
      let token = localStorage.getItem("token")
      if(!token){
        alert("please Login first");
        navigate("/login")
      }
    })
  return (
    <> 
    <Navbar />
    <Header />
    {/* if There is no favItem then it will display empty Fav components  */}
    {favItems.length ? 
    <div className='container'>
    <div className="row">
        {favItems? favItems.map((product) =>(<Items key={product.id} product={product}/>) ): "No item"}
    </div>
    </div> 
    :
    <EmptyItems icons={<AiOutlineHeart style={{color:'red'}}/>} text1={text1} text2={text2} />
    }
    </>
  )
}

export default FavItem