import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState,useReducer } from 'react';
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  @media (max-width: 850px) {
    display:flex;
    flex-direction:column;
    text-align:center;
    background-color: white;
    transform: ${({ open }) => open ? 'translateX (0)' : 'translateX(-150%)'};
    left:0;
    position:absolute;
    height: 100vh;
    width:110%;
    
    top:55px;
   
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    .navbar-link{
        color:black;
        padding-bottom:100px;

    }

    
  }
`;




const RightNav = ({ open }) => {
 
  return (
    <Ul open={open}>
       <Link to="/AboutUs" className="navbar-link" target='_blank'>
          About Us
        </Link>
        <Link to="https://docs.vectrflow.com/" className="navbar-link" target="_blank">
        Documentation
        </Link>
        <Link to="/pricing" className="navbar-link">
          Pricing
        </Link>
    </Ul>
  )
}

export default RightNav