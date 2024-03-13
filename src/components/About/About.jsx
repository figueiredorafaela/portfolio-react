// eslint-disable-next-line no-unused-vars
import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./about.module.css";
import { useTranslation } from "react-i18next";


export const About = () => {
    const {t} = useTranslation();

    return (
      <section className={styles.container} id="about">
        <h2 className={styles.title}>
            {t('Sobre mim')} 
        </h2>
        <div className={styles.content}>
            <img 
                className={styles.aboutImage}
                src={getImageUrl("about/aboutImg.png")} 
                alt="Hero me smiling" 
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                <img 
                    src={getImageUrl("about/surfando.png")} 
                    alt="Hero me smiling" 
                />
                <div className={styles.aboutItemText}>
                    <h3>
                        {t('Desenvolvedora Front-end')}    
                    </h3>
                    <p>
                       {t('Já desenvolvi dois websites comercialmente, um deles foi o jornal da minha universidade.')} 
                    </p>
                </div>
                </li>
            </ul>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                <img 
                    src={getImageUrl("about/livros.png")} 
                    alt="Hero me smiling" 
                />
                <div className={styles.aboutItemText}>
                    <h3>
                        {t('CyberSegurança')} 
                    </h3>
                    <p>
                        {t('Possuo certificado de CyberSegurança do Google, IBM e da Microsoft. Os cursos abordam tecnologias como SQL e Python.')}     
                    </p>
                </div>
                </li>
            </ul>    
        </div>
      </section>
    );
}