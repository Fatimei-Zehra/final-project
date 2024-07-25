//!FATIME
import React, { useState, useEffect } from 'react';
import OurProductsStyle from "../OurProducts/OurProducts.module.css"
import styles from "./Wishlist.module.css"
import GlobalModuleCss from "../GlobalCss/global.module.css"
import MediaStyle from "../GlobalCss/Media/media.css"
import { FaRegTrashAlt } from "react-icons/fa";
import Raiting from "../OurProducts/Raiting"
import { Link } from 'react-router-dom';
import { db } from "../../firebase/firebase"
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { useTranslation } from "react-i18next";


const Wishlist = ({ isLoggedIn }) => {
  const { t } = useTranslation();
  const [wishlistItems, setWishlistItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModalWishlist, setShowModalWishlist] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const isInWishlist = false;

  useEffect(() => {

    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'wishlist'));
        let productsList = [];
        querySnapshot.forEach((doc) => {
          productsList.push({ id: doc.id, ...doc.data() });
        });
        setWishlistItems(productsList);
      } catch (error) {
        console.error('Error', error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = async (wishlistId) => {
    // if (!isLoggedIn) {
    //   alert("Please log in to add products to cart.");
    // }
    // else {
      try {
        const cartRef = collection(db, 'cart');
        const productToAdd = wishlistItems.find((wishlist) => wishlist.id === wishlistId);
        await addDoc(cartRef, { ...productToAdd, quantity: 1 });
        console.log('Product added:', productToAdd);
        setShowModal(true);
      } catch (error) {
        console.error('Error adding:', error);
      }
    // }
  };




  const addToWishlist = async (wishlistId) => {
    try {
      const cartRef = collection(db, 'wishlist');
      const productToAdd = wishlistItems.find((wishlist) => wishlist.id === wishlistId);
      await addDoc(cartRef, { ...productToAdd, quantity: 1 });
      console.log('Product added :', productToAdd);
      setShowModalWishlist(true)
    } catch (error) {
      console.error('Error adding:', error);
    }


  };


  const closeModal = () => {
    setShowModal(false);
    setShowModalWishlist(false)
  };


  return (
    <div className='container'>
      <div className={styles.bag}>
        <h3>Wishlist ({wishlistItems.length})</h3>
      </div>
      <div className={styles.wishlist}>
        {wishlistItems.map((product) => (
          <div key={product.id} id='productMobCodes'>
            <div className={OurProductsStyle.productBg} productSize="productBg">
              <div className={OurProductsStyle.productImg} productImage="prodImg">
                <img src={product.imageUrl} alt={product.name} className={OurProductsStyle.imageItem} />
              </div>

              <div className={OurProductsStyle.iconsBox} id='prod-icon1'>

                <div className={styles.trash}>
                  <FaRegTrashAlt className={styles.svgBin} />
                </div>

              </div>
              <button className={OurProductsStyle.addToCart} onClick={() => addToCart(product.id)}>{t("Add To Cart")}</button>
            </div>

            <div className="product-about">
              <h1 className={OurProductsStyle.productAboutText} productAbout="prod-about">{product.name}</h1>
            </div>


            <div className={OurProductsStyle.priceStar}>
              <div className="price-product">
                <p className={OurProductsStyle.productPrice}>${product.price}</p>
              </div>

              <div className='stars-product'>
                <Raiting />
              </div>

              


              <div className={OurProductsStyle.quanlity}>
                <p>(38)</p>
              </div>
            </div>
          </div>
        ))}

      </div>


      {showModal && (
        <div className={OurProductsStyle.modal}>
          <div className={OurProductsStyle.modalContent}>
            <span className={OurProductsStyle.close} onClick={() => setShowModal(false)}>&times;</span>
            <p>Product added to cart!</p>
          </div>
        </div>
      )}

      {showModalWishlist && (
        <div className={OurProductsStyle.modal}>
          <div className={OurProductsStyle.modalContent}>
            <span className={OurProductsStyle.close} onClick={() => setShowModalWishlist(false)}>&times;</span>
            <p>Product added to wishlist!</p>
          </div>
        </div>
      )}
    </div>


  );
};

export default Wishlist;

