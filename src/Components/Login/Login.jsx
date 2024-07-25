//!REVAN
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from "../Login/Login.module.css"
import OurProductsStyle from "../OurProducts/OurProducts.module.css"
import mediaCss from "../Login/media.css"
import svg from "../../Images/Login/login.jpg"
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebase/firebase.js'
import { useTranslation } from "react-i18next";


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [inputErrors, setInputErrors] = useState({
    email: false,
    password: false,
  });



  const handleSubmit = async (e) => {
    e.preventDefault();


    if (validateInputs()) {
      setLoading(true);
      try {

        const response = await signInWithEmailAndPassword(auth, email, password);
        setLoading(false);
        //Fatime codes start
        sessionStorage.setItem("token", response?.user?.accessToken);
        sessionStorage.setItem("email", response?.user?.email);

        setIsLoggedIn(true);
        navigate('/');
        // console.log('Qeydiyyat olundu hersey okeydurr');
        // console.log(response.user);
        console.log(response);
        //Fatime codes end

      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('Password is required');
    }
  };


  const validateInputs = () => {

    const errors = {
      email: !email || email.trim() === '' || !/\S+@\S+\.\S+/.test(email),
      password: password.trim() === '' || password.length < 6

    };

    setInputErrors(errors);

    return !errors.email && !errors.password;
  };

  const forgotPass = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setShowModal(true);
    } catch (error) {
      alert(error.message);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };


  const { t } = useTranslation();
  return (
    <div>
      <div className={styles.login}>
        <div className={styles.log}>
          <img src={svg} alt='Login' id='image' className={styles.logImg} />
        </div>

        <div className={styles.text} id='login-text-items'>
          <h1 id='login-items-text' className={styles.textH1}>{t("Log in to")} Exclusive</h1>
          <p id='login-p' className={styles.textP}>{t("Enter your details below")}</p>
          <input value={email} onChange={(e) => setEmail(e.target.value)} id='login-input' placeholder={t("Email or Phone Number")} className={`${styles.textInput} ${inputErrors.email ? styles.error : ''}`}></input>
          {inputErrors.email && <p className={styles.errorText}>{t('User name is wrong.')}</p>}

          <input value={password} onChange={(e) => setPassword(e.target.value)} id='login-input' placeholder={t("Password")} type='password' className={`${styles.textInput} ${inputErrors.password ? styles.error : ''}`}></input>

          {inputErrors.password && (
            <p className={styles.errorText}>
              {t('User name or password is wrong.')}
            </p>
          )}
          <div className={styles.forget}>
            <button onClick={handleSubmit} id='login-btn' className={styles.forgetButton}>
            {loading ? 'Loading...' : t("Log in")}
              </button>
            <button onClick={forgotPass} className={styles.forgetP} id='forget-pass'>{t("Forget Password?")}</button>
          </div>
        </div>

        {showModal && (
          <div className={OurProductsStyle.modal}>
            <div className={OurProductsStyle.modalContent}>
              <span className={OurProductsStyle.close} onClick={() => setShowModal(false)}>&times;</span>
              <p>Check your email!</p>
            </div>
          </div>)}
      </div>

    </div>
  )
}

export default Login;

