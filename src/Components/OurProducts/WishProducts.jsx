// //!FATIME

import React, { useState, useEffect, useRef } from 'react';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { db } from "../../firebase/firebase";
import OurProductsStyle from "./OurProducts.module.css";
import products from "../../Server/Products";
import { setDoc, collection, addDoc } from "firebase/firestore";


const HeartIconToggle = (productId,addToWishlist) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
    addToWishlist(productId)
  }
  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      {isClicked ? (
        <IoMdHeart
          color="red"
          size={30}
          style={{ cursor: 'pointer' }}
          className={`${OurProductsStyle.svg} ${OurProductsStyle.svgHeart}`}
        />
      ) : (
        <IoMdHeartEmpty
          color="black"
          size={30}
          fontWeight={700}
          style={{ cursor: 'pointer' }}
          className={`${OurProductsStyle.svg} ${OurProductsStyle.svgHeart}`}
        />
      )}
    </div>
  );
};

export default HeartIconToggle;










