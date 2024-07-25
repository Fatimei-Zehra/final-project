//!ELCAN
import React from 'react'
import ProductViewCss from '../ProductView/ProductView.module.css'
import { Link } from "react-router-dom";
import img1 from '../../Images/ProductView/de638588f27b571d7565fbaacfe57243.png'
import img2 from '../../Images/ProductView/4d31381f7fe4841786f4511bd4849d87.png'
import img3 from '../../Images/ProductView/9b23a76cbe02748d2090a0b9a11cf0a5.png'
import img4 from '../../Images/ProductView/a445f7c73ec2a2153e0e149e85ee9d28.png'
import img5 from '../../Images/ProductView/9e3950aed9181acb44510f859f50d850.png'
import { FaStar } from "react-icons/fa";
import { useState } from 'react'
import { LuEye } from "react-icons/lu";
import Coat from '../../Images/Selling/1e9f94261b28e16ea21bacb4144473e8.png'
import Bag from '../../Images/Selling/2722dbdf98f25179d3c0b785988c513d.png'
import Cooler from '../../Images/Selling/c218c97b645d616c8188a4f2e6aaf84b.png'
import BookShelf from '../../Images/Selling/2757d20a14861e2e0ebd4e9889693f59.png'
import styles from '../Selling/Selling.module.css'
import { useTranslation } from "react-i18next";
import GlobalModuleCss from "../GlobalCss/global.module.css"
import { CiHeart } from "react-icons/ci";


function ProductView() {
        const [counter, setCounter] = useState(0);
        const { t } = useTranslation();

        //increase counter
        const increase = () => {
            setCounter(count => count + 1);
        };

        //decrease counter
        const decrease = () => {
            setCounter(count => count - 1);
        };

        //reset counter 
        const reset = () => {
            setCounter(0)
        }
        return (
            <div className='container'>
                <div>
                    <div className={ProductViewCss.pageLink} id='page-link'>
                        <Link to='/Home' className={ProductViewCss.homePage} id='homePage'>Account /</Link>
                        <Link to='/Home' className={ProductViewCss.homePage} id='homePage'>Gaming /</Link>
                        <p className={ProductViewCss.aboutPage} id='aboutPage'>Havic HV G-92 Gamepad </p>
                    </div>
                </div>
                <div className={ProductViewCss.info}>


                    <div className={ProductViewCss.leftSide}>
                        <div className={ProductViewCss.firstSide}>
                            <div className={ProductViewCss.frame}>
                                <img src={img1} className={ProductViewCss.img} alt="" />
                            </div>

                            <div className={ProductViewCss.frame}>
                                <img src={img2} className={ProductViewCss.img} alt="" />
                            </div>
                            <div className={ProductViewCss.frame}>
                                <img src={img3} className={ProductViewCss.img} alt="" />
                            </div>
                            <div className={ProductViewCss.frame}>
                                <img src={img4} className={ProductViewCss.img} alt="" />
                            </div>
                        </div>
                        <div className={ProductViewCss.secondSide}>
                            <div className={ProductViewCss.bigFrame}>
                                <img src={img5} className={ProductViewCss.bigImg} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={ProductViewCss.rightSide}>
                        <h1 className={ProductViewCss.textH1}>Havic HV G-92 Gamepad</h1>
                        <div>
                            <div className={ProductViewCss.infoStar}>
                                <div>
                                    <FaStar className={ProductViewCss.star}></FaStar>
                                    <FaStar className={ProductViewCss.star}></FaStar>
                                    <FaStar className={ProductViewCss.star}></FaStar>
                                    <FaStar className={ProductViewCss.star}></FaStar>
                                    <FaStar className={ProductViewCss.starI}></FaStar>
                                </div>

                            
                                <span className={ProductViewCss.view}>(150 Reviews)</span>
                                <span>|</span>
                                <span className={ProductViewCss.stock}>In Stock</span>
                            </div>
                            <h2 id='price' className={ProductViewCss.textH2}>$192.00</h2>
                            <p className={ProductViewCss.ps}>PlayStation 5 Controller Skin High quality vinyl with air <br /> channel adhesive for easy bubble free install & mess <br /> free removal Pressure sensitive.</p>

                            <div className={ProductViewCss.square}>
                                <h1 className={ProductViewCss.colourH1}>Colours:</h1>
                                <button className={ProductViewCss.colour1}></button> <button className={ProductViewCss.colour2}></button>
                            </div>
                            <div className={ProductViewCss.sizeInfo}>
                                <h1 className={ProductViewCss.colourH1}>Size:</h1>
                                <div className={ProductViewCss.squares}>
                                    <div className={ProductViewCss.sizeFrame}><h1 className={ProductViewCss.sizeFrameH1}>XS</h1></div>
                                    <div className={ProductViewCss.sizeFrame}><h1 className={ProductViewCss.sizeFrameH1}>S</h1></div>
                                    <div className={ProductViewCss.sizeFrame}><h1 className={ProductViewCss.sizeFrameH1}>M</h1></div>
                                    <div className={ProductViewCss.sizeFrame}><h1 className={ProductViewCss.sizeFrameH1}>L</h1></div>
                                    <div className={ProductViewCss.sizeFrame}><h1 className={ProductViewCss.sizeFrameH1}>XL</h1></div>

                                </div>

                            </div>
                            <div className={ProductViewCss.counter}>
                                <div>
                                    <div className={ProductViewCss.btnContainer}>
                                        <button className={ProductViewCss.control_btn} onClick={decrease}>-</button>
                                        <span className={ProductViewCss.counter_output}>{counter}</span>
                                        <button className={ProductViewCss.control_btnn} onClick={increase}>+</button>
                                    </div>
                                </div>
                                <button className={ProductViewCss.buy}>Buy now</button>
                               
                            </div>

                        </div>


                    </div>

                </div>
                <div>
                <div className={styles.rectangle} id='timer-mobile-rectangle'>
                    <div className={styles.red}></div>
                    <h1 className={`${GlobalModuleCss.fontPoppins} ${styles.rectangleText}`}>{t("Today's")}</h1>
                </div>
                    <div className={styles.slider}>
                        <div className={styles.sliderBox}>
                            <div className={styles.sliderBoxes}>
                                <div className={styles.upSide}>
                                    <img src={Coat} alt="" />
                                    <div className={styles.buttons}>
                                    
                                        <div className={styles.iconsBox}>
                                            <CiHeart className={styles.svg} />
                                            <LuEye className={styles.svg} />

                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className={styles.downSide}>
                                <h1 className={styles.downSideText}>{t("The north coat")}</h1>
                                <div className={styles.price}>
                                    <span className={styles.firstPrice}>$260</span>
                                    <span className={styles.line}>$360</span>
                                </div>
                                <div className={styles.infoDown}>
                                    <div className={styles.starIcons}>
                                        <FaStar className={styles.star} />
                                        <FaStar className={styles.star} />
                                        <FaStar className={styles.star} />
                                        <FaStar className={styles.star} />
                                        <FaStar className={styles.star} />
                                    </div>
                                    <div className={styles.numberDown}>
                                        <span>(65)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.sliderBox}>
                            <div className={styles.sliderBoxes}>
                                <div className={styles.upSide}>
                                    <img src={Bag} alt="" />
                                    <div className={styles.buttons}>
                                        <div>
                                            {/* <span className={styles.saleProcent}>-35%</span> */}
                                        </div>
                                        <div className={styles.iconsBox}>
                                            <CiHeart className={styles.svg} />
                                            <LuEye className={styles.svg} />

                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div className={styles.downSide}>
                                <h1 className={styles.downSideText}>{t("Gucci duffle bag")}</h1>
                                <div className={styles.price}>
                                    <span className={styles.firstPrice}>$960</span>
                                    <span className={styles.line}>$1160</span>

                                </div>
                                <div className={styles.infoDown}>
                                    <div className={styles.starIcons}>
                                        <FaStar className={styles.star} />
                                        <FaStar className={styles.star} />
                                        <FaStar className={styles.star} />
                                        <FaStar className={styles.star} />
                                        <FaStar className={styles.starColor} />
                                    </div>
                                    <div className={styles.numberDown}>
                                        <span>(75)</span>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className={styles.sliderBox}>
                            <div className={styles.sliderBoxes}>
                                <div className={styles.upSide}>
                                    <img src={Cooler} alt="" />
                                    <div className={styles.buttons}>
                                        <div>
                                            {/* <span className={styles.saleProcent}>-30%</span> */}
                                        </div>
                                        <div className={styles.iconsBox}>
                                            <CiHeart className={styles.svg} />
                                            <LuEye className={styles.svg} />

                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div className={styles.downSide}>
                                <h1 className={styles.downSideText}>{t("RGB liquid CPU Cooler")}</h1>
                                <div className={styles.price}>
                                    <span className={styles.firstPrice}>$160</span>
                                    <span className={styles.line}>$170</span>

                                </div>
                                <div className={styles.infoDown}>
                                    <div className={styles.starIcons}>
                                        <FaStar className={styles.star} />
                                        <FaStar className={styles.star} />
                                        <FaStar className={styles.star} />
                                        <FaStar className={styles.star} />
                                        <FaStar className={styles.star} />
                                    </div>
                                    <div className={styles.numberDown}>
                                        <span>(99)</span>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className={styles.sliderBox}>
                            <div className={styles.sliderBoxes}>
                                <div className={styles.upSide}>
                                    <img src={BookShelf} alt="" />

                                    <div className={styles.buttons}>
                                        <div>
                                            {/* <span className={styles.saleProcent}>-25%</span> */}
                                        </div>
                                        <div className={styles.iconsBox}>
                                            <CiHeart className={styles.svg} />
                                            <LuEye className={styles.svg} />

                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div className={styles.downSide}>
                                <h1 className={styles.downSideText}>{t("Small BookSelf")}</h1>
                                <div className={styles.price}>
                                    <span className={styles.firstPrice}>$360</span>


                                </div>
                                <div className={styles.infoDown}>
                                    <div className={styles.starIcons}>
                                        <FaStar className={styles.star} />
                                        <FaStar className={styles.star} />
                                        <FaStar className={styles.star} />
                                        <FaStar className={styles.star} />
                                        <FaStar className={styles.starGradient} />
                                    </div>
                                    <div className={styles.numberDown}>
                                        <span>(65)</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )



}

export default ProductView




