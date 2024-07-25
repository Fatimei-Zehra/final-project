
import React, { useState } from 'react';
import styles from '../Account/Account.module.css'
import mediacss from '../Account/Account.media.css'
import {createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/firebase.js';
import { Link } from "react-router-dom";


  const Profile = () => {
      const [firstname, setfirstName] = useState('');
      const [lastname, setlastName] = useState('');
      const [email, setEmail] = useState('');
      const [address, setAddress] = useState('');
      const [currentpassword, setcurrentPassword] = useState('');
      const [newpassword, setnewPassword] = useState('');
      const [confirmpassword, setconfirmPassword] = useState('');
      const [error, setError] = useState('');
      
      
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          createUserWithEmailAndPassword(auth, firstname, lastname, currentpassword, confirmpassword, newpassword, email, error);
          console.log('Kayıt başarılı');
        } catch (error) {
          setError(error.message);
        }
      };

  return (
    <div>
      <div id='content' className={styles.content}>
      <div className="container">
        <div className={styles.pageLink} id='page-link'>
          <Link to='/Home' className={styles.homePage} id='homePage'>Home /</Link>
          <p className={styles.accountPage} id='accountPage'>My Account</p>
          <div className={styles.welcomepage}>
          <p className={styles.welcomePage} id='accountPage'>Welcome!</p>
          <p className={styles.namePage} id='accountPage'>Md Rimel</p>  
          </div>
          </div>
          <div className={styles.flex}>
        <div id='sidebar' className={styles.sidebar}>
            <h3 className={styles.sidebarH3}>Manage My Account</h3>
          <ul className={styles.sidebarUl}>
            <li className={styles.sidebarLi} >My Profile</li>
            <li className={styles.sidebarLi}>Address Book</li>
            <li className={styles.sidebarLi}>My Payment Options</li>
        </ul>
            <h3 className={styles.sidebarH3}>My Orders</h3>
            <ul className={styles.sidebarUl}>
            <li className={styles.sidebarLi}>My Returns</li>
            <li className={styles.sidebarLi}>My Cancellations</li>
       </ul>
       <h3 className={styles.sidebarH3}>My WishList</h3>
        </div>
        <div id='edit' className={styles.Edit}>
          <h2 className={styles.editH2}>Edit Your Profile</h2>
          <div className={styles.Account}>
            <div id='item' className={styles.item}>
            <div className={styles.AccountGroup}>
              <label className={styles.itemLabel}  htmlFor="firstName">First Name</label>
              <input value={firstname} onChange={(e) => setfirstName(e.target.value)}  className={styles.itemInput}  type="text" id="firstName" name="firstName" defaultValue="Md" />
            </div>
            <div className={styles.AccountGroup}>
              <label className={styles.itemLabel} htmlFor="lastName">Last Name</label>
              <input  value={lastname} onChange={(e) => setlastName(e.target.value)}  className={styles.itemInput}  type="text" id="lastName" name="lastName" defaultValue="Rimel" />
            </div>
            </div>
            <div className={styles.item}>
            <div className={styles.AccountGroup}>
              <label  className={styles.itemLabel} htmlFor="email">Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} className={styles.itemInput}   type="email" id="email" name="email" defaultValue="rimel111@gmail.com" />
            </div>
            <div className={styles.AccountGroup}>
              <label  className={styles.itemLabel} htmlFor="address">Address</label>
              <input  value={address} onChange={(e) => setAddress(e.target.value)} className={styles.itemInput} type="text" id="address" name="address" defaultValue="Kingston, 5236, United State" />
            </div>
            </div>
            <h3>Password Changes</h3>
            <div className={styles.pass}>
            <div className={styles.AccountGroup}>
              <input value={currentpassword} onChange={(e) => setcurrentPassword(e.target.value)} className={styles.passInput}  type="password" id="currentPassword" name="currentPassword" defaultValue="Current Passwod" />
            </div>
            <div className={styles.AccountGroup}>
              <input value={newpassword} onChange={(e) => setnewPassword(e.target.value)} className={styles.passInput}   type="password" id="newPassword" name="newPassword" defaultValue="New Passwod" />
            </div>
            <div className={styles.AccountGroup}>
              <input value={confirmpassword} onChange={(e) => setconfirmPassword(e.target.value)} className={styles.passInput} type="password" id="confirmPassword" name="confirmPassword" defaultValue="Confirm New Passwod" />
            </div>
            <div id='btn' className={styles.btn}>
            <div id='cncl' className={styles.cancel}>
              <button id='cancel' className={styles.cancelBtn} type="button" >Cancel</button>
              </div>
            <div id='btns' className={styles.buttons}>
             <button onClick={handleSubmit}  id='submit' className={styles.submitBtn} type="submit" >Save Changes</button>
             </div>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}
export default Profile;