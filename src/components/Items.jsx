import React, { useEffect, useState } from 'react'
import { AiOutlineShoppingCart, AiFillHeart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addCartItem, removeCartItem } from '../store/slices/CartItemSlice';
import { addFavItem, removeFavItem } from '../store/slices/FavItemSlice';
import StarRatings from 'react-star-ratings';
import BrandRatingPricing from './BrandRatingPricing';
import { Link } from 'react-router-dom';

const Items = (props) => {
  //itemAdded is to check whether the item is added to cart or not if yes then changes the color accordingly
  const [itemAdded, setItemAdded] = useState(false);
  //this state for changing the text 
  const [textColor, setTextColor] = useState("Add to Cart");
  // this state for adding or removing the item in FavCart
  const [favItemAdded, setFavItemAdded] = useState(false);
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.items)
  const favItem = useSelector((state) => state.favItems)



  const handleCart = (payload) => {
    if (textColor == "Add to Cart") {
      // console.log(payload)

      
      
      setItemAdded(true)
      setTextColor("Remove from cart")
      dispatch(addCartItem(payload))
    }
    else {
      setItemAdded(false)
      setTextColor("Add to Cart")
      dispatch(removeCartItem(payload))
    }
  }

  const handleFav = (payload) => {
    if (favItemAdded) {
      setFavItemAdded(false)
      dispatch(removeFavItem(payload))
    }
    else {
      setFavItemAdded(true)
      dispatch(addFavItem(payload))
    }
  }

  useEffect(() => {
    //if you return back from the cart ,then the products  will remain selected , which we selected previously 
    cartItem.map((item) => {
      if (item.id == props.product.id) {
        setItemAdded(true)
        setTextColor("Remove from cart")
        // console.log(item)
      }
    })

    favItem.map((item) => {
      if (item.id == props.product.id) {
        setFavItemAdded(true);
      }
    })

  }, [])
  // console.log(props)
  return (

    
    <div className="col-sm-6 col-md-4 col-lg-3" >

      <Card className="card mb-4" style={{ width: '18rem' }}>
        <div className="position-absolute top-0 end-0 p-2">

          <Button onClick={() => { handleFav(props.product) }} ><AiFillHeart style={favItemAdded ? { color: "red" } : { color: "black" }} /></Button>
        </div>

        {/* <Link to={'/product/details/'+props.product.id}> */}
        <Link style={{textDecoration:'none'}} to={'/product/details/'+props.product.id}>
        <CardImage src={props.product.image} className="card-img-top mx-auto d-block mt-5" alt="Product" />
        </Link>
        {/* </Link> */}
        <CardBody className="card-body">
    
      <Link style={{textDecoration:'none'}} to={'/product/details/'+props.product.id}>
        <BrandRatingPricing  fullDetail={false} title ={props.product.title} rate={props.product.rating.rate} count={props.product.rating.count} 
        price={props.product.price} />
         </Link>
        
       
          <p className="card-text"> </p>
          <Cart
            className={itemAdded ? 'btn btn-danger d-flex align-items-center justify-content-center w-100' : 'btn btn-primary d-flex align-items-center justify-content-center w-100'}
            onClick={() => {
              handleCart(props.product);

            }}
          >
            <AiOutlineShoppingCart className="ml-4" style={{ marginRight: '0.5rem', color: 'white', fontSize: '1.2rem' }} />
            {textColor}
          </Cart>
        </CardBody>
      </Card>
    </div>
  );
};


export default Items

const Card = styled.div`
  margin-top: 1.5rem;
  text-align: center;
  border-radius:8px;
    overflow:hidden;
    transition: transform 0.3s ease;
    &:hover{
        ${'' /* cursor:pointer; */}
        transform: scale(1.05);
    }
`;

const CardImage = styled.img`
  width: 12rem;
  height: 12rem;
  object-fit: contain;
`;

const Cart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  ${'' /* background-color: ${props => (props.itemAdded ? 'red' : 'blue')}; */}
  color: white;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: green;
  }
`;

const CardBody = styled.div`
  height: 200px; /* Adjust the desired height */
`;

const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  margin-bottom:7em;
`;


