import React from 'react'
import styled from 'styled-components'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { removeCartItem } from '../store/slices/CartItemSlice'

const CartItem = (props) => {

    const dispatch = useDispatch();
    const handleDelete = (payload) => {
        dispatch(removeCartItem(payload))
    }
    return (
        <Container className='container'>
            <Row className="row mt-4">
                {/* This is the item which is in the cart having image(col-3) brand name price(col-7) and Delete(col-2)*/}
                <div className="col-md-3 ">
                    <Image src={props.item.image} alt="" />
                </div>

                {/* Brand Name and price */}
                <div className="col-md-7 mt-4 d-flex flex-column justify-content-end" >

                    <div className="title mb-auto h5">{props.item.title}</div>

                    <div className="price p-2 h6">
                        ${props.item.price}
                    </div>

                </div>

                {/* Delete button By clicking on the delete icon it will delete the item from the cart */}
                <DeleteIconContainer className="col-md-2 mt-4 ">

                    <DeleteButton onClick={() => { handleDelete(props.item) }}><RiDeleteBin5Line /></DeleteButton>

                </DeleteIconContainer>
            </Row>
        </Container>
    )
}

export default CartItem

const Container = styled.div`
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
`;

const Image = styled.img`
    width:10rem;
    height:10rem;
`

const Row = styled.div`
 
    border: none;
    box-shadow: 0px 1px 3px grey;
    border-radius:8px;
    overflow:hidden;
    transition: transform 0.3s ease;
    &:hover{
        ${'' /* cursor:pointer; */}
        transform: scale(1.02);
    }
`

const DeleteIconContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const DeleteButton = styled.button`
     border: none;
     background: none;
     cursor: pointer;
     margin-bottom:7em;
`;