
//!Fatime
import React from 'react'
import { useState, useEffect } from 'react'
// import imgFirst from "../../Images/Adversiting/Ellipse 23.png"
import imgSecond from "../../Images/Adversiting/Frame 694.png"
import AdvertisingStyle from "../Advertising/Adversiting.module.css"
import GlobalModuleCss from "../GlobalCss/global.module.css"
import MediaStyle from "../GlobalCss/Media/media.css"
import { useTranslation } from "react-i18next";


function Adversiting() {
    const calculateTime = () => {
        const targetDate = new Date("2024-07-24");
        const now = new Date(); //indiki vaxtimiz
        const difference = targetDate - now; //bize hansi tarix lazmdisa ondan indiki vaxt arasindaki ferqi hesabla

        //geri sayim tamamlananda 0dan kicikdise sifirla  butum vaxtlari 00 ele
        if (difference <= 0) {
            return { days: "00", hours: "00", minutes: "00", seconds: "00" };
        }

        const days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0');
        const hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0');
        const minutes = String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0');
        const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, '0');

        return { days, hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTime());
    //sayimi n yenilenmesi:
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTime());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const { t } = useTranslation();
    return (
        <div className="container">
            <div className={AdvertisingStyle.sectionAdvertising} id='section-advertiising'>
                <div className={AdvertisingStyle.advertisingItems} id='advertising-item'>
                    <p className={`${AdvertisingStyle.categoriesText} ${GlobalModuleCss.fontPoppins}`} id='categories-title'>{t("Categories")}</p>
                    <h2 className={`${AdvertisingStyle.aboutProduct} ${GlobalModuleCss.fontInter}`} id='about-product'>Enhance Your Music Experience</h2>

                    <div className={AdvertisingStyle.advertisingDate} id='advertising-date'>
                        <div className={AdvertisingStyle.advertisingDateItems} id='days'>
                            <p className={`${AdvertisingStyle.dateNum} ${GlobalModuleCss.fontPoppins}`}>{timeLeft.days}</p>
                            <span className={`${AdvertisingStyle.dateText} ${GlobalModuleCss.fontPoppins}`}>{t("Days")}</span>
                        </div>

                        <div className={AdvertisingStyle.advertisingDateItems} id='hours'>
                            <p className={`${AdvertisingStyle.dateNum} ${GlobalModuleCss.fontPoppins}`}>{timeLeft.hours}</p>
                            <span className={`${AdvertisingStyle.dateText} ${GlobalModuleCss.fontPoppins}`}>{t("Hours")}</span>
                        </div>

                        <div className={AdvertisingStyle.advertisingDateItems} id='minute'>
                            <p className={`${AdvertisingStyle.dateNum} ${GlobalModuleCss.fontPoppins}`}>{timeLeft.minutes}</p>
                            <span className={`${AdvertisingStyle.dateText} ${GlobalModuleCss.fontPoppins}`}>{t("Minutes")}</span>
                        </div>

                        <div className={AdvertisingStyle.advertisingDateItems} id='second'>
                            <p className={`${AdvertisingStyle.dateNum} ${GlobalModuleCss.fontPoppins}`}>{timeLeft.seconds}</p>
                            <span className={`${AdvertisingStyle.dateText} ${GlobalModuleCss.fontPoppins}`}>{t("Second")}</span>
                        </div>
                    </div>
                    <button className={AdvertisingStyle.advertisingBtn} id='advertising-btn'>{t("Buy Now!")}</button>
                </div>

                <div className={AdvertisingStyle.advertisingProduct} id='advetising-product'>
                    {/* <img src={imgFirst} alt="" /> */}
                    <img src={imgSecond} className={AdvertisingStyle.secondProd} alt="" />
                </div>
            </div>
        </div>

    )
}

export default Adversiting