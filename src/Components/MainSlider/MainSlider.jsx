
// //!ELCAN
import React from 'react'
import styles from './MainSlider.module.css'
import { LuEye } from "react-icons/lu";
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { useTranslation } from "react-i18next";
import { db } from "../../firebase/firebase"
import { collection, getDocs, query, where,addDoc } from 'firebase/firestore';
import "../../firebase/firebase"
import { useState, useEffect } from 'react'
import Raiting from "../OurProducts/Raiting"
import WishProduct from "../OurProducts/WishProducts"
import OurProductsStyle from "../OurProducts/OurProducts.module.css"
import { Link } from 'react-router-dom';

function MainSlider() {
    const { t } = useTranslation();
    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showModalWishlist, setShowModalWishlist] = useState(false);
    const [isClicked, setIsClicked] = useState(false);


    useEffect(() => {
        const fetchProducts = async () => {
            try {

                const q = query(collection(db, 'items'), where('discount', '!=', 0))
                const querySnapshot = await getDocs(q);
                let productsList = [];
                querySnapshot.forEach((doc) => {
                    productsList.push({ id: doc.id, ...doc.data() });
                });
                console.log(productsList,"test");
                setProducts(productsList);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const addToCart = async (productId) => {
        // if (!isLoggedIn) {
        //   alert("Please log in to add products to cart.");
        // }

        try {
            const cartRef = collection(db, 'cart');
            const productToAdd = products.find((product) => product.id === productId);
            await addDoc(cartRef, { ...productToAdd, quantity: 1 });
            console.log('Product added to cart:', productToAdd);
            setShowModal(true);
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }

    };




    const addToWishlist = async (productId) => {
        try {
            const cartRef = collection(db, 'wishlist');
            const productToAdd = products.find((product) => product.id === productId);
            await addDoc(cartRef, { ...productToAdd, quantity: 1 });
            console.log('Product added to cart:', productToAdd);
            setShowModalWishlist(true)
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }


    };


    const closeModal = () => {
        setShowModal(false);
        setShowModalWishlist(false)
    };
    return (
        <div className='container'>
            <div className={styles.slider}>
                {products.map(product => (
                    <div key={product.id} className={styles.sliderBox}>
                        <div className={styles.sliderBoxes}>
                            <div className={styles.upSide}>
                                <img src={product.imageUrl} alt="" />
                                <div className={styles.buttons}>
                                    {product.discount > 0 && (
                                        <div>
                                            <span className={styles.saleProcent}>-{product.discount}%</span>
                                        </div>
                                    )}
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
                                </div>
                                <button className={styles.buttonActive} onClick={() => addToCart(product.id)}>{t("Add To Card")}</button>
                            </div>
                        </div>
                        <div className={styles.downSide}>
                            <h1 className={styles.downSideText}>{t(product.name)}</h1>
                            <div className={styles.price}>
                                <span className={styles.firstPrice}>${product.discount > 0 ? product.price - (product.price * product.discount / 100) : product.price}</span>
                                {product.discount > 0 &&
                                    <span className={styles.line}>${product.price}</span>
                                }
                            </div>


                            <div className='stars-product'>
                                <Raiting />
                            </div>

                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.view}>
                <button>{t("View Products All")}</button>
            </div>
        </div>
    );
}

export default MainSlider;




