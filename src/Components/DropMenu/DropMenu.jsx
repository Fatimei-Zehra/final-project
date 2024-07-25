//!FATIME
import React, { useState } from 'react';
import { SidebarData } from '../../Server/Sidebar';
import { Link } from 'react-router-dom';
import { HiMenu,HiX  } from 'react-icons/hi';
import styles from './DropMenu.module.css'; 

function DropMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className={styles.dropMenu}>
            <HiMenu className={styles.menuIcon} onClick={toggleMenu} />

            <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
                <div className={styles.sidebarHeader}>
                    <HiX className={styles.closeIcon} onClick={closeMenu} />
                </div>
                {SidebarData.map((category, index) => (
                    <div key={index} className={styles.category}>
                       
                        <Link to="/"> <h2>{category.title}</h2></Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DropMenu;
