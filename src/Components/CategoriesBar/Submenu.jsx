//!FATIME
import React, { useEffect, useState } from 'react';
import { allJson } from '../../Server/AllJson';
import subStyle from "./submenu.module.css";
import { Link } from 'react-router-dom';

const Submenu = ({ hoverCategory, setHoverCategory }) => {
    useEffect(() => {
        const handleRightClick = (e) => {
            e.preventDefault();
            setHoverCategory(null);
        };

        document.addEventListener('contextmenu', handleRightClick);

        return () => {
            document.removeEventListener('contextmenu', handleRightClick);
        };
    }, [setHoverCategory]);

    return (
        <div> 
            {hoverCategory ? (
                <div className={subStyle.submenu} id='categoriesBar'>
                    {hoverCategory.map((data, index) => (
                        <div key={index} className={subStyle.subSubmenu}>
                            <h2 className={subStyle.title}>{data.title}</h2>
                            <ul>
                                {data.children?.map(item => (
                                    <li key={item.id} className={subStyle.titleSub}>
                                        <Link>{item.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ) : (
                <div></div> // No data available
            )}
        </div>
    );
};

export default Submenu;
