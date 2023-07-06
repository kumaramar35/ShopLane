import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Header = () => {

    return (
        <HeaderStyle className='sm'>
            <StyledLink  className="all" to='/' style={{textDecoration:'none'}}>
                All
            </StyledLink>
            <StyledLink  to='/electronics'>
                <span>Electronics</span>
            </StyledLink>
            <StyledLink to='/jewellery'>
                <span>Jewellery </span>
            </StyledLink>
           <StyledLink  to='/mensClothing'>
                <span>  Men's Clothing </span>
            </StyledLink>
            <StyledLink className="womenClothing" to='/womenClothing'>
                <span>  Women's Clothing </span>
            </StyledLink>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3em;
    font-size: x-large;
    border: 0.5px solid #d7c4d7;
    border-right: none;
    border-left: none;
    padding: 10px;
    width: 80rem;
    margin-left: 6rem;
    Link{
        text-decoration: none;
    }

    @media (max-width: 768px) {
    /* Adjust styles for smaller screens */
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 1em;
    font-size: large;
    padding: 5px;
    width: 100%;
    margin: 0;
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  padding : 0px 20px;
  border: 0.2px solid white;
  
  transition: color 0.3s ease-in-out;

  &:hover {
    color: green;
    border: 0.2px solid gold;
    border-top: none;
    border-bottom: none;
    
  }
`;


export default Header