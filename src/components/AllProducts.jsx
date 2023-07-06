import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Constants from '../api/Constants';
import Items from './Items';
import Loader from './Loader';



export const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    
    useEffect(() => {
        axios(Constants.ALL_PRODUCTS_URL)
            .then((res) => setAllProducts(res.data))
            .catch((error) => console.log(error))
            
    }, [])

    return (

        <>
            <div className="container mt-5">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4" >
                    {allProducts.length ?  allProducts.map((product, index) => (
                        <Items key={product.id} product={product} />
                    )) 
                    : <Loader />
                    }
                </div>
            </div>

        </>

    )
}

