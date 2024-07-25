//!FATIME
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaCartShopping } from "react-icons/fa6";
import wishlistStyle from "./Cart.module.css"
import MediaStyle from "../GlobalCss/Media/media.css"
import { Link } from 'react-router-dom';


const Wishlist=()=> {
;
  return (
    <div>
      <Link to="/cart" >
      <FaCartShopping className={wishlistStyle.wishlistIcon} id='wishlist' />
      </Link>
    </div>
  )
}

export default Wishlist