// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";

import styles from "./navbar.module.css"; 
import {getImageUrl} from "../../utils";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
    const {t} = useTranslation();
    
    const [menuOpen, setMenuOpen] = useState(false);

    return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">
            {t('Portfólio')} 
        </a>
        <div className={styles.menu}>
            <img 
            className={styles.menuBtn} 
            src={
                menuOpen 
                ? getImageUrl ("nav/closeIcon.png")
                : getImageUrl ("nav/menuIcon.png")
            } 
            alt="menu-button" 
            onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul 
            className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}
            >
                <li className={styles.menuItem}>
                    <a href="#about">
                        {t('Sobre')} 
                    </a>
                </li>
                <li className={styles.menuItem}>
                    <a href="#experience">
                        {t('Experiência')} 
                    </a>
                </li>
                <li className={styles.menuItem}>
                    <a href="#projects">
                       {t('Projetos')} 
                    </a>
                </li>
                <li className={styles.menuItem}>
                    <a href="#Contact">
                       {t('Contato')} 
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    );
}