import React from 'react'
import StarRatings from 'react-star-ratings';
import styled from 'styled-components';
const BrandRatingPricing = (props) => {


    return (
        <div>
            {/* ToolTip */}
            <h5 className="card-title " data-toggle="tooltip" data-placement="right" title={props.title} style={{ cursor: 'pointer' }}>

                <div className="d-flex flex-row" style={{ color: 'gray' }}>
                    <b className='me-1 text-dark'  >Brand  </b>


                    {props.title.length > 20 ? `${props.title.slice(0, 12)}...` : props.title}
                </div>
            </h5>


            {/* star rating */}
            <div className='d-flex flex-row  '>
                <StarRatings rating={props.rate} starRatedColor="#83ED12" starDimension="20px"
                    starSpacing="1px" /><p className='mt-1 ms-1' > ({props.count})</p>
            </div>


            {/* Price Design */}
            <div className="d-flex row-start">
                <Price>
                    <DollarSign>$</DollarSign>
                    {/* get the number without decimal */}
                    <span>{Math.floor(props.price)}</span>
                    {/* %1 for getting the decimal part i.e 0.88 then fixed the size but we want .88 so we used substring  */}
                    <DecimalDigits>{(props.price % 1).toFixed(2).substring(1)}</DecimalDigits>
                </Price>
            </div>

        </div>
    )
}

export default BrandRatingPricing

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