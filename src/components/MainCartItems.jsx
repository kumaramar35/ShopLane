import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from './Navbar'
import Header from './Header'
import CartItem from './CartItem'
import styled from 'styled-components'
import EmptyItems from './EmptyItems'
import {AiOutlineShoppingCart} from 'react-icons/ai'

//this is the main Cart item page which have sub component CartItem

const MainCartItems = () => {
  const items = useSelector((state) => state.items)
  let total = 0;
  // text for the empty cart to be passed to EmptyItems components
  const text1= "There are no Products in Your Cart"
  const text2 ="Add the products you like to the cart and Buy."
  
//get the total of the products 
  for (let i = 0; i < items.length; i++) {
    total = total + items[i].price;
  }
  console.log(items)
  return (
    <div>
      <Navbar />
      <Header />
      {/* if There is no Item in the cart then it will display empty Cart  */}
       {
        items.length ?
       <div className='container'>
        <div className="row">
          {/* <div className="col-md-1"></div> */}
          <div className="col-md-8">
          {/* passing data to cartItem and display the number of item in the cart */}
            {items.map((item, index) => (
              <CartItem item={item} key={item.id} />
            ))}
          </div>

          <BorderBox className="col-md-3 mt-4">

            <div className="order-summary">
              <h4 className='text-center'> Order summary</h4>
              <SummaryItem className="summary-item">
                <summaryLabel>Subtotal</summaryLabel>
                <span>${total.toFixed(2)}</span>
              </SummaryItem>
              <SummaryItem className="summary-item">
                <SummaryLabel>Shipping Estimate</SummaryLabel>
                <span>$5.00</span>
              </SummaryItem>
              <SummaryItem className="summary-item">
                <SummaryLabel>Tax Estimate</SummaryLabel>
                <span>$5.00</span>
              </SummaryItem>
              <SummaryItem className="Summary-item">
                <SummaryLabel>Order Total</SummaryLabel>
                <span>${(total+10).toFixed(2)}</span>
              </SummaryItem>
            </div>
          </BorderBox>
        </div>
      </div>
      :
      <EmptyItems icons={<AiOutlineShoppingCart />} text1={text1} text2={text2} /> 
       }

    </div>
  )
}

export default MainCartItems

const SummaryItem = styled.div`
display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`


const SummaryLabel = styled.span`
flex-grow: 1;
  margin-right: 0.5rem;
`

const BorderBox = styled.div`

    border: none;
    box-shadow: 0px 1px 3px grey;
    border-radius:8px;
    max-height:12rem;
    `
