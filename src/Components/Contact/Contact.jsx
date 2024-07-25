//!FATIME
import React from 'react'
import ContactCss from "./Contact.module.css"
import { Link } from "react-router-dom"
import { LuPhone } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa6";
import { useTranslation } from 'react-i18next'
import { useRef } from 'react';
import { db } from "../../firebase/firebase"
import { collection,  addDoc } from 'firebase/firestore';



function Contact() {
    const { t } = useTranslation();

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const messageRef = useRef(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const nameValue = nameRef.current.value;
        const emailValue = emailRef.current.value;
        const phoneValue = phoneRef.current.value;
        const messageValue = messageRef.current.value;
        const fullData = {
            name: nameValue,
            email: emailValue,
            phone: phoneValue,
            message: messageValue,
        };
        console.log(fullData);

        await addDoc(collection(db, "contact"), fullData);
        nameRef.current.value = "";
        emailRef.current.value = "";
        phoneRef.current.value = "";
        messageRef.current.value = "";
    };
    return (
        <div>
            <div className="container">
                <div className={ContactCss.pageLink}>
                    <Link to='/' className={ContactCss.homePage}>Home /</Link>
                    <p className={ContactCss.aboutPage}>Contact</p>
                </div>

                <div className={ContactCss.contact}>
                    <div className={ContactCss.contactInformation}>
                        <div className="contact-for-call">
                            <div className={ContactCss.callUs}>
                                <div className={ContactCss.phoneIcon}> <LuPhone /></div>

                                <p className={ContactCss.callUsText}>Call To Us</p>
                            </div>

                            <div>
                                <p className={ContactCss.availableTime}>We are available 24/7, 7 days a week.</p>
                                <p className={ContactCss.phoneNumber}>Phone: +8801611112222</p>
                            </div>
                        </div>

                        <div className={ContactCss.line}></div>

                        <div className='contact-from-writte'>
                            <div className={ContactCss.callUs}>
                                <div className={ContactCss.phoneIcon}><FaRegEnvelope /></div>

                                <p className={ContactCss.callUsText} >Write To Us</p>
                            </div>
                            <div>
                                <p className={ContactCss.writtingInfo}>Fill out our form and we will contact you within 24 hours.</p>
                                <p className=
                                    {ContactCss.emails}>Emails: customer@exclusive.com</p>
                                <p className=
                                    {ContactCss.emails}>Emails: support@exclusive.com</p>

                            </div>
                        </div>
                    </div>


                    <div className={ContactCss.AllBoxWwo}>
                        <form onSubmit={handleSubmit}>
                            <div className={ContactCss.allInput}>
                                <div className={ContactCss.YourName}>
                                    <input
                                        className={ContactCss.YourNameInput}
                                        type="text"
                                        name="name"
                                        ref={nameRef}
                                        placeholder={t("Your Name *")}
                                    />
                                </div>
                                <div className={ContactCss.YourName}>
                                    <input
                                        className={ContactCss.YourNameInput}
                                        type="email"
                                        name="email"
                                        ref={emailRef}
                                        placeholder={t("Your Email *")}
                                    />
                                </div>
                                <div className={ContactCss.YourName}>
                                    <input
                                        className={ContactCss.YourNameInput}
                                        type="number"
                                        ref={phoneRef}
                                        placeholder={t("Your Phone *")}
                                    />
                                </div>
                            </div>
                            <div className={ContactCss.YourMassage}>
                                <input
                                    className={ContactCss.YourMassageInput}
                                    type="text"
                                    ref={messageRef}
                                    placeholder={t("Your Message")}
                                />
                            </div>
                            <div className={ContactCss.btnSend} id={ContactCss.mobilSend}>
                                <button type="submit" className={ContactCss.SendButton}>
                                    {t("Send Message")}
                                </button>
                            </div>
                        </form>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Contact