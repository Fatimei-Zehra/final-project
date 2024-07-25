//!FATIME
import React from 'react'
import FounderCss from "../Founders/Founder.module.css"
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import founderFisrt from "../../Images/Founders/founder1.png"
import founderSecond from "../../Images/Founders/founder1.png"
import founderThird from "../../Images/Founders/founder1.png"
import MediaStyle from "../GlobalCss/Media/media.css"
import { useTranslation } from "react-i18next";


function Founder() {
    const { t } = useTranslation();
    return (
        <div className={FounderCss.founders} id='founders'>
            <div className="founders-items" foundersItem="founders">
                <div className={FounderCss.foundersBg} id='first-founder'>
                    <img src={founderFisrt} alt="" />
                </div>
                <div>
                    <h3 className={FounderCss.founderName} id='first-founder-name'>{t("Tom Cruise")}</h3>
                    <p className={FounderCss.founderProfessia} id='first-founder-professia'>{t("Founder & Chairman")}</p>
                </div>
                <div className={FounderCss.socialLinks} socialLinks="founder-social-links">
                    <FiTwitter  />
                    <FaInstagram  />
                    <FaLinkedinIn />
                </div>
            </div>

            <div className="founders-items" foundersItem="founders">
                <div  className={FounderCss.foundersBg} id='second-founder'>
                    <img src={founderFisrt} alt="" />
                </div>
                <div>
                    <h3 className={FounderCss.founderName}  id='second-founder-name'>{t("Tom Cruise")}</h3>
                    <p className={FounderCss.founderProfessia} id='second-founder-professia'>{t("Founder & Chairman")}</p>
                </div>
                <div className={FounderCss.socialLinks} socialLinks="founder-social-links">
                    <FiTwitter  />
                    <FaInstagram  />
                    <FaLinkedinIn />
                </div>
            </div>


            <div className="founders-items" foundersItem="founders">
                <div  className={FounderCss.foundersBg} id='third-founder'>
                    <img src={founderFisrt} alt="" />
                </div>
                <div>
                    <h3 className={FounderCss.founderName}  id='third-founder-name'>{t("Tom Cruise")}</h3>
                    <p className={FounderCss.founderProfessia} id='third-founder-professia'>{t("Founder & Chairman")}</p>
                </div>
                <div className={FounderCss.socialLinks} socialLinks="founder-social-links">
                    <FiTwitter  />
                    <FaInstagram  />
                    <FaLinkedinIn className={FounderCss.founderInstagram} />
                </div>
            </div>
        </div>
    )
}

export default Founder