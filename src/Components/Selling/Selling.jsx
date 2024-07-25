//!ELCAN
import React from 'react';
import styles from './Selling.module.css';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react'
import { LuEye } from 'react-icons/lu';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import Raiting from "../OurProducts/Raiting"
import WishProduct from "../OurProducts/WishProducts"
import OurProductsStyle from "../OurProducts/OurProducts.module.css"
import { Link } from 'react-router-dom';
import { db } from "../../firebase/firebase"
import { collection, getDocs, query, where, addDoc } from 'firebase/firestore';
import "../../firebase/firebase"

function Selling() {
    const { t } = useTranslation();
    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showModalWishlist, setShowModalWishlist] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const q = query(collection(db, 'items'), where('isBest', '==', true))
                const querySnapshot = await getDocs(q);
                let productsList = [];
                querySnapshot.forEach((doc) => {
                    productsList.push({ id: doc.id, ...doc.data() });
                });

                setProducts(productsList);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchProducts();
    }, []);

    

    return (
        <div className='container'>
            <div className={styles.firstSelling}>
                <div className={styles.selling}>
                    <div className={styles.rectangle}>
                        <div className={styles.red}></div>
                        <h1>{t('This Month')}</h1>
                    </div>
                    <h1 className={styles.browsing}>{t('Best Selling Products')}</h1>
                </div>
                <div className={styles.view}>
                    <button>{t('View All')}</button>
                </div>
            </div>

            <div className={styles.slider}>
                {products.map((product) => (
                    <div key={product.id} className={styles.sliderBox}>
                        <div className={styles.sliderBoxes}>
                            <div className={styles.upSide}>
                                <img src={product.imageUrl} alt={product.name} />
                                <div className={styles.buttons}>
                                    {product.discount > 0 && (
                                        <div>
                                            <span className={styles.saleProcent}>-{product.discount}%</span>
                                        </div>
                                    )}
                                    <div className={OurProductsStyle.iconsBox} id='prod-icon1'>
                                        <div  style={{ cursor: 'pointer' }}>
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
                            </div>
                        </div>
                        <div className={styles.downSide}>
                            <h1 className={styles.downSideText}>{product.name}</h1>
                            <div className={styles.price}>
                                <span className={styles.firstPrice}>${product.discount > 0 ? product.price - (product.price * product.discount / 100) : product.price}</span>
                                {product.discount > 0 &&
                                    <span className={styles.line}>${product.price}</span>
                                }
                            </div>


                        </div>

                        <div className='stars-product'>
                            <Raiting />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Selling;
