import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import styled from 'styled-components';
import {Link} from 'react-router-dom'

// This is empty page if no cart or fav items is added then it will display accordingly 
const EmptyItems = (props) => {
  return (
    <div className='container'>
    <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
        <IconsStyle className="text-center mb-5 ">
                {props.icons}
        </IconsStyle>
        <div className="h3 text-center" style={{ color: 'rgb(193 165 165)' }}>{props.text1}</div>
        <div className="h3 text-center">{props.text2}</div>
        <div className="text-center mt-4">
        <Link className='btn btn-primary btn-large' to ='/'>Continue Shopping</Link>
        </div>
       

        </div>
        <div className="col-md-2"></div>
    </div>
    </div>
  )
}

export default EmptyItems;


const IconsStyle = styled.div`
font-size:15rem;
`