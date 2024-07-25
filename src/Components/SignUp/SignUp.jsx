//!REVAN
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "../SignUp/SignUp.module.css"
import svg from "../../Images/Login/login.jpg"
import { FcGoogle } from 'react-icons/fc'
import SignUpMediacss from '../SignUp/SignUp.media.css'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/firebase.js'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";




const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [inputErrors, setInputErrors] = useState({
    name: false,
    email: false,
    password: false,
  });

  const handleSignUp = async (e) => {
    e.preventDefault();


    if (validateInputs()) {
      setLoading(true);
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        setLoading(false);
        navigate('/login');
        console.log('Qeydiyyat olundu');

      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('Password yanliş');
    }
  };


  const validateInputs = (value) => {
    const errors = {
      name: name.trim() === '',
      email: !email || email.trim() === '' || !/\S+@\S+\.\S+/.test(email),
      password: password.trim().length < 6,
    };


    setInputErrors(errors);

    return !errors.name && !errors.email && !errors.password;
  };



  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {

        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const { t } = useTranslation();
  return (
    <div>

      <div id='account' className={styles.Account}>
        <div className={styles.Account}>
          <div className={styles.acc}>
            <img src={svg} alt='Login' id='image' className={styles.accImg} />
          </div>
          <div className={styles.text} id='account-text-items'>
            <h1 id='account-items-text' className={styles.textH1}>{t("Create an account")}</h1>
            <p id='account-p' className={styles.textP}>{t("Enter your details below")}</p>
            <input value={name} onChange={(e) => setName(e.target.value)} id='account-input' placeholder={t('Name')} className={`${styles.textInput} ${inputErrors.name ? styles.error : ''}`}></input>

            {inputErrors.name && <p className={styles.errorText}>{t('Name is required.')}</p>}

            <input value={email} onChange={(e) => setEmail(e.target.value)} id='account-input' placeholder={t('Email or Phone Number')} className={`${styles.textInput} ${inputErrors.email ? styles.error : ''}`}></input>

            {inputErrors.email && <p className={styles.errorText}>{t('Email is required.')}</p>}

            <input value={password} onChange={(e) => setPassword(e.target.value)} id='account-input' placeholder={t('Password')} type='password' className={`${styles.textInput} ${inputErrors.password ? styles.error : ''}`} />
            <div className={styles.forget}>

              {inputErrors.password && (
                <p className={styles.errorText}>
                  {t('Password must be least 6 characters long.')}
                </p>
              )}

              <button onClick={handleSignUp} id='account-btn' className={styles.AccountButton}>
              {loading ? 'Loading...' : t('Create Account')}
               </button>

              <button id='Google-btn' className={styles.GoogleButton} onClick={handleGoogleSignUp}> <FcGoogle className={styles.icon} />{t("Sign up with Google")}</button>


              <div id='p' className={styles.P}>
                <p className={styles.forgetP} id='forget-pass'>{t("Already have account?")}</p>

                <Link to="/Login" className={styles.AccountP}>
                  {t("Log in")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;