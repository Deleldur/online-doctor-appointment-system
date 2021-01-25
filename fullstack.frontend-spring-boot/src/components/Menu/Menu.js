import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';


const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (

    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
            <a href="/login" tabIndex={tabIndex}>
        <span aria-hidden="true">💸</span>
        Login
        </a>
        <a href="/register" tabIndex={tabIndex}>
        <span aria-hidden="true">💁🏻‍♂️</span>
        Sign Up
     </a>  
 

       <a href="/home" tabIndex={tabIndex}>
        <span aria-hidden="true">🏠</span>
        Home
     </a>
     <a href="/createappointment" tabIndex={tabIndex}>
        <span aria-hidden="true">📅</span>
        Create appointment
      </a>
   
 
      <a href="/doctor" tabIndex={tabIndex}>
        <span aria-hidden="true">📝</span>
      Appointment history
      </a>

      <a href="/profile" tabIndex={tabIndex}>
        <span aria-hidden="true">🚪</span>
        Profile
        </a>

      <a href="/logout" tabIndex={tabIndex}>
        <span aria-hidden="true">🚪</span>
        Logout
        </a>
  

    </StyledMenu>
    
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;