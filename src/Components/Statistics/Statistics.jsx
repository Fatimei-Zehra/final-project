//!FATIME
import React from 'react'
import StatisticsCss from "./Statistics.module.css"
import { CiShop } from "react-icons/ci";
import { PiCurrencyCircleDollarLight } from "react-icons/pi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import MediaStyle from "../GlobalCss/Media/media.css"
import { useTranslation } from "react-i18next";


function Statistics() { 
    const { t } = useTranslation();
    return (
        <div>
            <div className={StatisticsCss.statistics} id='statistics'>
                <div className={StatisticsCss.statisticsItem} statisticsMedia="statistic-items">
                    <div className={StatisticsCss.statisticsIcon} statisticsIcon="icon">
                        <CiShop className={StatisticsCss.shopIcon} />
                    </div>
                    <div className={StatisticsCss.delivery}>
                        <h4 className={StatisticsCss.quantity} id='quantity-first' >10.5k</h4>
                        <p className={StatisticsCss.aboutService} id='textContentShop'>{t("Sallers active our site")}</p>
                    </div>
                </div>

                <div className={StatisticsCss.statisticsItem} statisticsMedia="statistic-items" >
                    <div className={StatisticsCss.statisticsIcon}statisticsIcon="icon" >
                        <PiCurrencyCircleDollarLight className={StatisticsCss.priceIcon} />
                    </div>
                    <div className={StatisticsCss.delivery}>
                        <h4 className={StatisticsCss.quantity}  id='quantity-second'>33k</h4>
                        <p className={StatisticsCss.aboutService} id='textContentDollar'>{t("Mopnthly Produduct Sale")}</p>
                    </div>
                </div>

                <div className={StatisticsCss.statisticsItem} statisticsMedia="statistic-items" >
                    <div className={StatisticsCss.statisticsIcon}statisticsIcon="icon" >
                        <MdOutlineShoppingBag className={StatisticsCss.shopBagIcon} />
                    </div>
                    <div className={StatisticsCss.delivery}>
                        <h4 className={StatisticsCss.quantity} id='quantity-third'  >45.5k</h4>
                        <p className={StatisticsCss.aboutService} id='textContentShopBag'>{t("Mopnthly Produduct Sale")}</p>
                    </div>
                </div>

                <div className={StatisticsCss.statisticsItem}  statisticsMedia="statistic-items">
                    <div className={StatisticsCss.statisticsIcon} statisticsIcon="icon">
                        <TbMoneybag  className={StatisticsCss.moneyBagIcon}/>
                    </div>
                    <div className={StatisticsCss.delivery}>
                        <h4 className={StatisticsCss.quantity}  id='quantity-four' >25k</h4>
                        <p className={StatisticsCss.aboutService}id='textContentMoneyBag'>{t("Anual gross sale in our site")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistics