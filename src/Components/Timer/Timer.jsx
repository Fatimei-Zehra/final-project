//!ELCAN
import React from 'react'
import styles from '../Timer/Timer.module.css'
import GlobalCss from "../GlobalCss/global.css"
import GlobalModuleCss from "../GlobalCss/global.module.css"
import MediaStyle from "../GlobalCss/Media/media.css"
import { useState, useEffect } from 'react'
import { useTranslation } from "react-i18next";


const Timer = () => {
    const calculateTime = () => {
        const targetDate = new Date("2024-07-30");
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

            <div className={styles.rectangle} id='timer-mobile-rectangle'>
                <div className={styles.red}></div>
                <h1 className={`${GlobalModuleCss.fontPoppins} ${styles.rectangleText}`}>{t("Today's")}</h1>
            </div>

            <div className={styles.frame} id='frame'>
                <div className={styles.flash}>
                    <h1 className='flash-sales'>{t( "Flash Sales")}</h1>
                </div>

                <div className={styles.timer} id='timer'>
                    <div className={styles.timerSide}>
                        <p className={styles.timerSideP}>{t("Days")}</p>
                        <span className={styles.timerSideSpan} id='daysNum'>{timeLeft.days}</span>
                    </div>
                    <span className={styles.pair} id='dayPair'>:</span>
                    <div className={styles.timerSide}>
                        <p className={styles.timerSideP}>{t("Hours")}</p>
                        <span className={styles.timerSideSpan} id='hoursNum'>{timeLeft.hours}</span>
                    </div>
                    <span className={styles.pair} id='hourPair'>:</span>
                    <div className={styles.timerSide}>
                        <p className={styles.timerSideP}>{t("Minutes")}</p>
                        <span className={styles.timerSideSpan} id='minutesNum'>{timeLeft.minutes}</span>
                    </div>
                    <span className={styles.pair} id='minPair'>:</span>
                    <div className={styles.timerSide}>
                        <p className={styles.timerSideP}>{t("Seconds")}</p>
                        <span className={styles.timerSideSpan} id='secondsNum'>{timeLeft.seconds}</span>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Timer;

