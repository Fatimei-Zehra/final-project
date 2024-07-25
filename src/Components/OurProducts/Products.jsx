//!FATIME
import React from 'react'
import OurProductsStyle from "../OurProducts/OurProducts.module.css"
import GlobalModuleCss from "../GlobalCss/global.module.css"
import MediaStyle from "../GlobalCss/Media/media.css"
import { LuEye } from "react-icons/lu";
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { useState, useEffect } from 'react'
import Raiting from "./Raiting"
import WishProduct from "./WishProducts"
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { db } from "../../firebase/firebase"
import { collection, getDocs, addDoc } from 'firebase/firestore';



const ProductList = () => {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModalWishlist, setShowModalWishlist] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const isInWishlist = false;
  const [wishlistItems, setWishlistItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        let productsList = [];
        querySnapshot.forEach((doc) => {
          productsList.push({ id: doc.id, ...doc.data() });
        });
        setProducts(productsList);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = async (productId) => {
    if (sessionStorage.getItem("token") === null || sessionStorage.getItem("token") === "") {
      alert("Please log in to add products to cart.");
    }
    else {
      try {
        const cartRef = collection(db, 'cart');
        const productToAdd = products.find((product) => product.id === productId);
        await addDoc(cartRef, { ...productToAdd, quantity: 1 });
        console.log('Product added to cart:', productToAdd);
        setShowModal(true);
      } catch (error) {
        console.error('Error adding product to cart:', error);
      }
    }
    };




    const addToWishlist = async (productId) => {

      try {
        const cartRef = collection(db, 'wishlist');
        const productToAdd = products.find((product) => product.id === productId);
        await addDoc(cartRef, { ...productToAdd, quantity: 1 });
        console.log('Product added:', productToAdd);
        setShowModalWishlist(true)
      } catch (error) {
        console.error('Error adding:', error);
      }

    }


    const closeModal = () => {
      setShowModal(false);
      setShowModalWishlist(false)
    };

    return (
      <div className="container">
        <div className={OurProductsStyle.rectangle}>
          <div className={OurProductsStyle.red}></div>
          <h1 className={`${GlobalModuleCss.fontPoppins} ${OurProductsStyle.rectangleText}`}>{t("Our Products")}</h1>
        </div>

        <div className="section-our-products">
          <div className="section-ourProducts">
            <h1 className={OurProductsStyle.sectionProductsText} id='section-products-text'>{t("Explore Our Products")}</h1>
          </div>
        </div>

        <div className={OurProductsStyle.products}>

          {products.map((product) => (
            <div key={product.id} id='productMobCodes'>
              <div className={OurProductsStyle.productBg} productSize="productBg">
                <div className={OurProductsStyle.productImg} productImage="prodImg">
                  <img src={product.imageUrl} alt={product.name} className={OurProductsStyle.imageItem} />
                </div>

                <div className={OurProductsStyle.iconsBox} id='prod-icon1'>
                  <div onClick={() => addToWishlist(product.id)} style={{ cursor: 'pointer' }}>
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
                  <Link to="/ProductView"> <LuEye className={`${OurProductsStyle.svg} ${OurProductsStyle.svgEyes}`} /></Link>

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
        <div className={OurProductsStyle.viewAllProducts}>
          <button className={OurProductsStyle.viewButton}>{t("View Products All")}</button>
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

  export default ProductList;
