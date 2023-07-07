import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Header from './Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Constants from '../api/Constants';
import StarRatings from 'react-star-ratings';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem, removeCartItem } from '../store/slices/CartItemSlice';
import { AiOutlineShoppingCart,AiFillHeart } from 'react-icons/ai';
import Loader from './Loader';
import { addFavItem, removeFavItem } from '../store/slices/FavItemSlice';

const ProductDetails = () => {
  //product detail
  const [detailProduct, setDetailProduct] = useState([]);
  //item added to cart
  const [itemAdded, setItemAdded] = useState(false);
  const [textColor, setTextColor] = useState("Add to Cart");
  const cartItem = useSelector((state) => state.items);
  const [favItemAdded, setFavItemAdded] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();

  //handle the cart text and image
  const handleCart = (payload) => {
    if (textColor == "Add to Cart") {
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

  //handle the favorite item 
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


  const fetchProduct = () => {
    axios(`${Constants.ALL_PRODUCTS_URL}/${id}`)
      .then((res) => setDetailProduct(res.data))
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    fetchProduct();
    //if you return back from the cart ,then the products  will remain selected , which we selected previously 
    //will check the item is added or not
    cartItem.map((item) => {
      if (item.id == detailProduct.id) {
        setItemAdded(true)
        setTextColor("Remove from cart")
      }
    })
  }, [id])

  return (
    <>
      <Navbar />
      <Header />
      {detailProduct.id ? <Container>

        <div className="row mt-5">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            {/* Images */}
            
        {/* <div className='btn btn-block'> */}
              <Button onClick={() => { handleFav(detailProduct) }} ><AiFillHeart style={favItemAdded ? { color: "red" } : { color: "black" }} /></Button>
              {/* </div> */}
            <Image src={detailProduct.image} alt="Product Images" />
          </div>
          <div className="col-md-4">
            {/* Product Details */}
            <Details>
              <Brand>{detailProduct.title}</Brand>
              <Rating>
                <div className='d-flex flex-row  '> 
                  <StarRatings rating={detailProduct.rating.rate} starRatedColor="#83ED12" starDimension="20px"
                    starSpacing="1px" /><p className='mt-1 ms-1' > ({detailProduct.rating.count})</p>
               </div>
              </Rating>


              <div className="d-flex row-start">
                <Price>
                  <DollarSign>$</DollarSign>
                  {/* get the number without decimal */}
                  <span>{Math.floor(detailProduct.price)}</span>
                  {/* %1 for getting the decimal part i.e 0.88 then fixed the size but we want .88 so we used substring  */}
                  <DecimalDigits>{(detailProduct.price % 1).toFixed(2).substring(1)}</DecimalDigits>
                </Price>
              </div>


              <Cart
                className={itemAdded ? 'btn btn-danger d-flex align-items-center justify-content-center w-100' : 'btn btn-primary d-flex align-items-center justify-content-center w-100'}
                onClick={() => {
                  handleCart(detailProduct);

                }}
              >
                <AiOutlineShoppingCart className="ml-4" style={{ marginRight: '0.5rem', color: 'white', fontSize: '1.2rem' }} />
                {textColor}
              </Cart>
            </Details>
          </div>
          <div className="col-md-"></div>
        </div>
      </Container>
        :
        <Loader />
      }
    </>
  );
};

export default ProductDetails;

const Container = styled.div`
  padding: 20px;
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
const Image = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: contain;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  padding: 20px;
`;

const Brand = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  svg {
    color: #ffc107;
    margin-right: 5px;
  }
`;

const Price = styled.div`
  font-size: 24px; /* font size as needed for the main price */
  display: flex;
  align-items: baseline;
  & span{
    color:#4c3833f0;
    font-weight: 630;
  }
`;

const DollarSign = styled.span`
  font-size: 14px; /*  font size for the dollar sign */
  margin-right: 2px; /* spacing between the dollar sign and the main price */
`;

const DecimalDigits = styled.span`
  font-size: 14px; /* font size for the decimal digits */
`;

// fav heart button 
const Button = styled.button`
margin-bottom: -6rem;
  border: none;
  background: none;
  cursor: pointer;
  margin-bottom:-6em;
`;
