//!ELCAN
import React from 'react'
import styles from '../Categories/Categories.module.css'
import { IoIosPhonePortrait } from "react-icons/io";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { MdOutlineCameraAlt } from "react-icons/md";
import { PiHeadphonesLight } from "react-icons/pi";
import { TbDeviceGamepad } from "react-icons/tb";
import GlobalCss from "../GlobalCss/global.css"
import MediaStyle from "../GlobalCss/Media/media.css"
import { t } from 'i18next';
import { useTranslation } from "react-i18next";


export default function Categories() {
    const { t } = useTranslation();
    return (
        <div className='container'>
            <div className={styles.rectangle}>
                <div className={styles.red}></div>
                <h1 id='categoriesText'>{t("Categories")}</h1>

            </div>
            <h1 className={styles.browsing} id='browsing'>{t( "Browse By Category")}</h1>
            <div className={styles.categories} id='categories'>
                <div className={styles.categorieBoxes} categoryBox="categori">
                    <IoIosPhonePortrait className={styles.icon} id='phone' />
                    <h1 className={styles.categoriesName} id='phoneText'>{t("Phones")}</h1>
                </div>
                <div className={styles.categorieBoxes} categoryBox="categori">
                    <HiOutlineComputerDesktop className={styles.icon} id='computer' />
                    <h1 className={styles.categoriesName} id='computerText' >{t("Computers")}</h1>
                </div>
                <div className={styles.categorieBoxes} categoryBox="categori">
                    <BsSmartwatch className={styles.icon} id='watch' />
                    <h1 className={styles.categoriesName} id='watchText'>{t("SmartWatch")}</h1>
                </div>
                <div className={styles.categorieBoxes} categoryBox="categori">
                    <MdOutlineCameraAlt className={styles.icon} id='camera' />
                    <h1 className={styles.categoriesName} id='cameraText'>{t("Camera")}</h1>
                </div>
                <div className={styles.categorieBoxes} categoryBox="categori">
                    <PiHeadphonesLight className={styles.icon} id='headphone' />
                    <h1 className={styles.categoriesName} id='headphoneText'>{t("HeadPhones")}</h1>
                </div>
                <div className={styles.categorieBoxes} categoryBox="categori">
                    <TbDeviceGamepad className={styles.icon} id='gamepad' />
                    <h1 className={styles.categoriesName} id='gamepadText' >{t("Gaming")}</h1>
                </div>
            </div>


            {/* //PLANSET codes2 */}
            <div className={styles.mobileCodes} id='mobileCodesCategory'>
                <div id='firstCategory'>
                    <div className={styles.categorieBoxes} categoryBox="categori">
                        <IoIosPhonePortrait className={styles.icon} id='phone' />
                        <h1 className={styles.categoriesName} id='phoneText'>{t("Phones")}</h1>
                    </div>
                    <div className={styles.categorieBoxes} categoryBox="categori">
                        <HiOutlineComputerDesktop className={styles.icon} id='computer' />
                        <h1 className={styles.categoriesName} id='computerText' >{t("Computers")}</h1>
                    </div>
                    <div className={styles.categorieBoxes} categoryBox="categori">
                        <BsSmartwatch className={styles.icon} id='watch' />
                        <h1 className={styles.categoriesName} id='watchText'>{t("SmartWatch")}</h1>
                    </div>
                </div>

                <div id='secondCategory'>
                    <div className={styles.categorieBoxes} categoryBox="categori">
                        <MdOutlineCameraAlt className={styles.icon} id='camera' />
                        <h1 className={styles.categoriesName} id='cameraText'>{t("Camera")}</h1>
                    </div>
                    <div className={styles.categorieBoxes} categoryBox="categori">
                        <PiHeadphonesLight className={styles.icon} id='headphone' />
                        <h1 className={styles.categoriesName} id='headphoneText'>{t("HeadPhones")}</h1>
                    </div>
                    <div className={styles.categorieBoxes} categoryBox="categori">
                        <TbDeviceGamepad className={styles.icon} id='gamepad' />
                        <h1 className={styles.categoriesName} id='gamepadText' >{t("Gaming")}</h1>
                    </div>
                </div>
            </div>

            {/* //PLANSET codes2 */}



            <div className={styles.plansetCodes} id='plansetCodesCategory'>
                <div id='firstCategory'>
                    <div className={styles.categorieBoxes} categoryBox="categori">
                        <IoIosPhonePortrait className={styles.icon} id='phone' />
                        <h1 className={styles.categoriesName} id='phoneText'>{t("Phones")}</h1>
                    </div>
                    <div className={styles.categorieBoxes} categoryBox="categori">
                        <HiOutlineComputerDesktop className={styles.icon} id='computer' />
                        <h1 className={styles.categoriesName} id='computerText' >{t("Computers")}</h1>
                    </div>

                </div>

                <div id='secondCategory'>

                    <div className={styles.categorieBoxes} categoryBox="categori">
                        <BsSmartwatch className={styles.icon} id='watch' />
                        <h1 className={styles.categoriesName} id='watchText'>{t("SmartWatch")}</h1>
                    </div>

                    <div className={styles.categorieBoxes} categoryBox="categori">
                        <MdOutlineCameraAlt className={styles.icon} id='camera' />
                        <h1 className={styles.categoriesName} id='cameraText'>{t("Camera")}</h1>
                    </div>

                </div>

                <div id='secondCategory'>
                    <div className={styles.categorieBoxes} categoryBox="categori">
                        <PiHeadphonesLight className={styles.icon} id='headphone' />
                        <h1 className={styles.categoriesName} id='headphoneText'>{t("HeadPhones")}</h1>
                    </div>
                    <div className={styles.categorieBoxes} categoryBox="categori">
                        <TbDeviceGamepad className={styles.icon} id='gamepad' />
                        <h1 className={styles.categoriesName} id='gamepadText' >{t("Gaming")}</h1>
                    </div>
                </div>
            </div>

             {/* //MOBILEEEEEEEEEEEEEEE codes */}

             <div className={styles.plansetCodes} id='mobCodesCategory'>
             
                    <div className={styles.categorieBoxes} categoryBox="categori">
                        <IoIosPhonePortrait className={styles.icon} id='phone' />
                        <h1 className={styles.categoriesName} id='phoneText'>{t("Phones")}</h1>
                    </div>
                    <div className={styles.categorieBoxes} categoryBox="categori">
                        <HiOutlineComputerDesktop className={styles.icon} id='computer' />
                        <h1 className={styles.categoriesName} id='computerText' >{t("Computers")}</h1>
                    </div>

                    <div className={styles.categorieBoxes} categoryBox="categori">
                        <BsSmartwatch className={styles.icon} id='watch' />
                        <h1 className={styles.categoriesName} id='watchText'>{t("SmartWatch")}</h1>
                    </div>

                    <div className={styles.categorieBoxes} categoryBox="categori">
                        <MdOutlineCameraAlt className={styles.icon} id='camera' />
                        <h1 className={styles.categoriesName} id='cameraText'>{t("Camera")}</h1>
                    </div>

              
                    <div className={styles.categorieBoxes} categoryBox="categori">
                        <PiHeadphonesLight className={styles.icon} id='headphone' />
                        <h1 className={styles.categoriesName} id='headphoneText'>{t("HeadPhones")}</h1>
                    </div>
                    <div className={styles.categorieBoxes} categoryBox="categori">
                        <TbDeviceGamepad className={styles.icon} id='gamepad' />
                        <h1 className={styles.categoriesName} id='gamepadText' >{t("Gaming")}</h1>
                    </div>
               
            </div>
        </div>
    )
}
