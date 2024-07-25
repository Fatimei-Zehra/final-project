//!FATIME
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import wishlistStyle from "../Wishlist/Wishlist.module.css"
import MediaStyle from "../GlobalCss/Media/media.css"
import { Link } from 'react-router-dom';


const Wishlist=()=> {
  return (
    <div>
      <Link to="/Wishlist">
      <FontAwesomeIcon icon={faHeart} className={wishlistStyle.wishlistIcon} id='wishlist' />
      </Link>
    </div>
  )
}

export default Wishlist
