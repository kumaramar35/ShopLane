import React from 'react'
import { BiUserCircle } from 'react-icons/bi';
import {BsCart3} from 'react-icons/bs'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { TbLogin } from "react-icons/tb";
import { FaRegAddressCard } from "react-icons/fa";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";


const Navbar = () => {
  const navigate = useNavigate()
  const cartItem = useSelector((state) => state.items)
  

  const handleCart = () =>{
    navigate('/cart')
  }
  return (
    <div className='container'>


      <nav className="navbar navbar-light bg-white ">
        <span className="navbar-brand mb-0 h1 " style={{ color: '#42A5F5', fontSize: "30px" ,cursor:'pointer' }} onClick={()=> navigate('/')}>SHOP<span style={{ color: 'black' }}>LANE</span></span>

        
        <div className="d-flex me-5 pe-5  test">
          <div className="dropdown " >
            <button type="button" className="btn  border dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
            <BiUserCircle style={{  }}/> <span style={{fontWeight:'bold'}}>Login</span>
           <br />or SignUp
            </button>
            
            <ul className="dropdown-menu ">
              <li><Link className="dropdown-item" to='/login'><TbLogin size={"20px"} />  Login</Link></li>
              <li><Link className="dropdown-item" to='/signup'><FaRegAddressCard size={"18px"} />  Sign Up</Link></li>
              <li><Link className="dropdown-item" to='/fav'><MdOutlineFavoriteBorder size={"20px"} />  Fav</Link></li>
              <li><Link className="dropdown-item" to='/cart'><AiOutlineShoppingCart size={"20px"} />  Checkout</Link></li>
            </ul>
          </div>
          {/* <Badges className="badge badge-light">
         4
          </Badges> */}
         <span><Cart onClick={() => handleCart()}><BsCart3></BsCart3></Cart> <Badges><span className="badge badge-secondary" style={{background:'red',borderRadius:'50%'}}>
            {cartItem.length}
          </span></Badges></span>
          
        </div>
        

      </nav>



    </div>
  )

}

export default Navbar

const Cart = styled.button`
  background: white;
    border: none;
     font-size: 2.5rem;
    position: absolute;
    margin-left: 0px;
    margin-top: 5px;
`

const Badges = styled.h6`  
    position: absolute;
    margin-left: 2%;
    margin-bottom: -43%;
    margin-top: 12px;
`
