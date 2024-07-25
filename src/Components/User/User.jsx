//!FATIE\ME
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import UserCss from './User.module.css';
import wishlistStyle from '../Cart/Cart.module.css';
import { FaRegUser } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'






function User() {
    const [isOpen, setIsOpen] = useState(false);
   
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const { t } = useTranslation();
    const navigate = useNavigate();
    const logOut = (e) => {
        e.preventDefault();
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("email");
        navigate('/login');
    }



    return (
        <div className={UserCss.userIcon}>
            <FaUser
                className={wishlistStyle.wishlistIcon}
                id='wishlist'
                onClick={toggleDropdown}
            />
            {isOpen && (
                <div className={UserCss.dropdownContent}>
                    <Link to="/" className={UserCss.dropdownItems}>
                        <FaRegUser
                            className={UserCss.icons} />
                        {t("Manage My Account")}
                    </Link>
                    <Link to="/" className={UserCss.dropdownItems}>
                        <FiShoppingBag className={UserCss.icons} />
                        {t("My Order")}
                    </Link>
                    <Link to="/" className={UserCss.dropdownItems}>
                        <MdOutlineCancel className={UserCss.icons} />
                        {t("My Cancellations")}
                    </Link>
                    <Link to="/" className={UserCss.dropdownItems}>
                        <FaRegStar className={UserCss.icons} />
                        {t("My Reviews")}
                    </Link>
                    <Link to="/" className={UserCss.dropdownItems} onClick={logOut}>
                        <BiLogOut className={UserCss.icons} />
                        {t("Logout")}
                    </Link>
                </div>
            )}
        </div>
    );
}

export default User;
