//!FATIME
import React from 'react'
import styles from "../NavBar/Navbar.module.css"
import GlobalModuleCss from "../GlobalCss/global.module.css"
import MediaStyle from "../GlobalCss/Media/media.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from "react-i18next";







function Navbar() {

  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };
  const { t } = useTranslation();
  return (
    <>
      <nav className={styles.nav} id='nav' >
        <ul className={styles.list}>
          <li className={`${styles.listLi} ${GlobalModuleCss.fontPoppins} `} responsive="list" >
            <Link to="/" className={styles.linkName}>
            {t("home")}
            </Link>
          </li>
          <li className={`${styles.listLi} ${GlobalModuleCss.fontPoppins} `} responsive="list">
            <Link to='/contact' className={styles.linkName}>
              {t("contact")}
            </Link></li>
          <li className={`${styles.listLi} ${GlobalModuleCss.fontPoppins} `} responsive="list">
            <Link to="/about" className={styles.linkName}>
              {t("about")}
            </Link>
          </li>
          <li className={`${styles.listLi} ${GlobalModuleCss.fontPoppins} `} responsive="list">
            <Link to="/signUp" className={styles.linkName}>
             {t("sign Up")}
            </Link>
          </li>
        </ul>
      </nav>


    </>
  )
}

export default Navbar


