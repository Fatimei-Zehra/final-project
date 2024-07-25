//!ELCAN

import React from 'react'
import stylesCheckout from './Checkout.module.css'
import Consol from '../../Images/Checkout/50752d55f8b60f2aa2923183dadbc135.png'
import TV from '../../Images/Checkout/db5174aff99bb9337d2dc9598a0b44e4.png'
function Checkout() {
    return (
        <div className="container">
            <ul className={stylesCheckout.route}>
                <li>Account</li>
                <span>/</span>
                <li>My Account</li>
                <span>/</span>
                <li>Product</li>
                <span>/</span>
                <li>View Cart</li>
                <span>/</span>
                <li>Checkout</li>
            </ul>
            <h1 className={stylesCheckout.billing}>Billing Details</h1>
            <div className={stylesCheckout.mainPart}>
                <div className={stylesCheckout.formSide}>
                    <form action="">
                        <div className={stylesCheckout.inputs}>
                            <label htmlFor="">First name <span>*</span></label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className={stylesCheckout.inputs}>
                            <label htmlFor="">Company name</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className={stylesCheckout.inputs}>
                            <label htmlFor="">Street adress</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className={stylesCheckout.inputs}>
                            <label htmlFor="">Apartment, floor, etc. (optional)</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className={stylesCheckout.inputs}>
                            <label htmlFor="">Town/City <span>*</span></label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className={stylesCheckout.inputs}>
                            <label htmlFor="">Phone Number <span>*</span></label>
                            <input type="number" name="" id="" />
                        </div>
                        <div className={stylesCheckout.inputs}>
                            <label htmlFor="">Email Address <span>*</span></label>
                            <input type="email" name="" id="" />
                        </div>
                        <div className={stylesCheckout.checkbox}>
                            <input type="checkbox" name="" id="" />
                            <p>Save this information for faster check-out next time</p>
                        </div>

                    </form>
                </div>
                <div className={stylesCheckout.rightSide}>
                    <div className={stylesCheckout.frame}>
                        <div className={stylesCheckout.upFrame}>

                            <img src={Consol} alt="" className={stylesCheckout.consol} />

                            <div className={stylesCheckout.price}>
                                <p>LCD Monitor</p>
                                <span>$650</span>
                            </div>


                        </div>
                        <div className={stylesCheckout.downFrame}>
                            <img src={TV} alt="" className={stylesCheckout.consol} />

                            <div className={stylesCheckout.price}>
                                <p>H1 Gamepad</p>
                                <span>$1100</span>
                            </div>
                        </div>
                        <div className={stylesCheckout.infoMain}>
                            <div className={stylesCheckout.info}>
                                <p>Subtotal:</p>
                                <span>$1750</span>
                            </div>

                            <span className={stylesCheckout.line}></span>
                            <div className={stylesCheckout.info}>
                                <p>Shipping:</p>
                                <span>Free</span>
                            </div>
                            <span className={stylesCheckout.line}></span>
                            <div className={stylesCheckout.info}>
                                <p>Total:</p>
                                <span>%1750</span>
                            </div>
                        </div>
                        <div className={stylesCheckout.pay}>
                            <form action="">
                                <div className={stylesCheckout.radio}>
                                    <form action=""><input type="radio" name="" id="" /></form>
                                    
                                    <label htmlFor="">Bank</label>
                                </div>
                                <div className={stylesCheckout.radio}>
                                    <form action=""><input type="radio" name="" id="" /></form>
                                    <label htmlFor="">Cash on delivery</label>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout