import React from 'react'
import { useState } from 'react'
import Dropdown from "../DropMenu/DropMenu"
import MainStyle from "../Main/Main.module.css"
import Slider from './Slider/Slider'
import MediaStyle from "../GlobalCss/Media/media.css"
import Categories from "../CategoriesBar/Categories"
import "./Main.module.css"
import Submenu from "../CategoriesBar/Submenu"



function Main() {
    const [hoverCategory, setHoverCategory] = useState("");


    console.log('hover');
    return (
        <div>
            <div className="container">
                <div className={MainStyle.sectionItems} id='section-items-main'>
                    <div className={MainStyle.sectionLeftItems}>
                        <Categories setHoverCategory={setHoverCategory} />
                        <Submenu hoverCategory={hoverCategory} setHoverCategory={setHoverCategory} />
                    </div>

                    <div className={MainStyle.sliderBox} id='slider-box'>
                        <Slider />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Main