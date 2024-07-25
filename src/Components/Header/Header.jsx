//!FATIME
import React from 'react'
import GlobalCss from "../GlobalCss/global.css"
import styles from "../Header/Header.module.css"
import GlobalModuleCss from "../GlobalCss/global.module.css"
import MediaStyle from "../GlobalCss/Media/media.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Navbar from "../NavBar/Navbar"
import DropMenu from '../DropMenu/DropMenu'
import { Link } from 'react-router-dom'
import Wishlist from '../Wishlist/Wishlist'
import Search from '../Search/Search'
import Cart2 from "../Cart/Cart2"
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18/i18n'
import { FaUser } from 'react-icons/fa';
import User from '../User/User'


export default function Header({ isLoggedIn }) {
    const { i18n } = useTranslation()
    const { t } = useTranslation();



    const clickChange = (e) => {
        i18n.changeLanguage(e.target.value)
    }


    return (
        <div>
            {/* LAYER CODES START */}
            <div className={styles.headerLayer} id='header-layer'>
                <div className="container">
                    <div className={styles.headerLayerItems}>
                        <div className={styles.layer} id='layer'>
                            <p className={`${styles.headerLayerP} ${GlobalModuleCss.fontPoppins}`} id='layer-p'>
                                {t("Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!")}
                            </p>
                            <a href="#" className={styles.headerLayerA} id='layer-a'>{t("ShopNow")}</a>
                        </div>


                        <select className={styles.languages} id='languages' onChange={clickChange} value={i18n.language} >
                            <option value="en" >English</option>
                            <option value="az" >Azerbaijan</option>
                            <option value="russian">Russian</option>
                        </select>

                    </div>
                </div>
            </div>
            {/* LAYER CODES END */}


            {/* HEADER CODES START */}
            <header className={styles.header} id='header'>
                <div className="container">
                    <div className={styles.headerNav}>
                        <Link to="/">
                            <h1 className={`${styles.brand} ${GlobalModuleCss.fontInter}`} id='brand'>exclusive</h1>
                        </Link>
                        <Navbar />

                        {/* PLANSET HEADER SEARCH CODES........................................................................ */}

                        <div id='planset-header-search' className={styles.plansetSearch}>
                            <Search />
                        </div>

                        <div id='planset-header-icons' className={styles.plansetHeaderIcons}>
                            <Wishlist />
                            <Cart2 />
                            {sessionStorage.getItem("token") ? <User /> : null}
                        </div>


                        {/* PLANSET HEADER SEARCH CODES END........................................................................ */}

                        <div className={styles.headerComponents} id='header-components'>
                            <Search />
                            <Wishlist />
                            <Cart2 />               
                            {sessionStorage.getItem("token") ? <User /> : null}
                        </div>

                    </div>
                </div>
            </header>





            {/* MOBILE RESPONSIVE CODES HEADER ...................................................................................*/}
            <div className={styles.mobileHeader} id='mobileHeader'>
                <header id='mobile-header'>
                    <div className="container">
                        <div id='mobile-header-items'>
                            <h1 className={`${styles.brand} ${GlobalModuleCss.fontInter}`} id='brand-mobile'>exclusive</h1>

                            <select className={styles.languages} id='languages-mobile'>
                                <option value="english">En</option>
                                <option value="azerbaijan">Az</option>
                                <option value="russian">Rus</option>
                            </select>
                        </div>

                    </div>
                </header>

                <div id='header-mobile-nav'>
                    <div className="container">
                        <div id='mobile-nav-items'>
                            <div id='mobile-nav-icon'>
                                <DropMenu />
                            </div>

                            <div id='mobile-right-icon'>
                                <FontAwesomeIcon icon={faSearch} />
                                <Wishlist />

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

