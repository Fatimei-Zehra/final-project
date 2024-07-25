//!REVAN
import React, { useState, useEffect } from 'react';
import styles from './Cart.module.css';
import "../../firebase/firebase"
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { db, imgDB } from "../../firebase/firebase";
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { ref, deleteObject } from 'firebase/storage';



const Cart = () => {
 
  const [cartItems, setCartItems] = useState([]);
  const [editMode, setEditMode] = useState(false);


  useEffect(() => {

    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'cart'));
        let productsList = [];
        querySnapshot.forEach((doc) => {
          productsList.push({ id: doc.id, ...doc.data() });
        });
        setCartItems(productsList);
      } catch (error) {
        console.error('Error', error);
      }
    };

    fetchProducts();
  }, []);


  const handleQuantityChange = (id, newQuantity) => {
    const updatedCartItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
  };

  const handleDelete = async (itemId, imageUrl) => {

    const imageRef = ref(imgDB, imageUrl);
    await deleteObject(imageRef);


    await deleteDoc(doc(db, 'cart', itemId));
    setCartItems(deleteDoc)
  };

  const calculateSubtotal = (price, quantity) => {
    return price * quantity;
  };


  const subtotal = cartItems.reduce((acc, item) => acc + calculateSubtotal(item.price, item.quantity), 0);
  const shipping = 0;
  const total = subtotal;

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };


  return (
    <div className={styles.cartContainer}>
      <nav className={styles.breadcrumb}>
        <a href="/">Home</a> / <span>Cart</span>
      </nav>
      <div className={styles.cartTable}>
        <div className={`${styles.cartTr} ${styles.cartHeader}`}>
          <div className={styles.productList}>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
          {editMode && <div>Action</div>}
        </div>


        {cartItems.map(item => (
          <div key={item.id} className={styles.cartTr}>
            <div className={styles.crtImg}>
              <img src={item.imageUrl} alt='Cart' className={styles.cartImg} />
              <div>{item.name}</div>
            </div>
            <div>${item.price}</div>
            <div>
              <select value={item.quantity} onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}>
                {[1, 2, 3].map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div>${calculateSubtotal(item.price, item.quantity)}</div>
            {editMode && (
              <div className={styles.trash}>
                <FaRegTrashAlt onClick={() => handleDelete(item.id, item.imageUrl)} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={styles.btn}>
        <button className={styles.returnButton} onClick={toggleEditMode}>Return To Shop</button>
        <button className={styles.updateButton} onClick={toggleEditMode}>Update Cart</button>
      </div>

      <div className={styles.couponContainer}>
        <input type="text" placeholder="Coupon Code" />
        <button className={styles.couponButton} >Apply Coupon</button>
      </div>

      <div className={styles.crtTotal}>
        <div className={styles.cartTotal}>
          <h4>Cart Total</h4>
          <div className={styles.cartTtl1}>
            <p>Subtotal:</p>
            <p>${subtotal}</p>
          </div>
          <div className={styles.cartTtl2}>
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <div className={styles.cartTtl3}>
            <p>Total:</p>
            <p>${total}</p>
          </div>
          <Link to="/checkout">
            <button className={styles.checkoutButton}>Process to checkout</button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Cart;



