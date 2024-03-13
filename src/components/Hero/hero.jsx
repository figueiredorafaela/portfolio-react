// eslint-disable-next-line no-unused-vars
import React from "react";

import styles from "./hero.module.css"
import { getImageUrl } from "../../utils";
import { useTranslation } from "react-i18next";

export const Hero = () => {
    const {t} = useTranslation();
    
    return (
       <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
               {t('Olá, sou a Rafaela')} 
            </h1>
            <p className={styles.description}>
               {t('Estudo Ciência da Computação na Universidade Federal Rural do Rio de Janeiro. Sou apaixonada por tecnologia e criei essa página utilizando React!')}
            </p>
            <a className={styles.contactBtn} href="mailto:rafaelaffigueiredo1@gmail.com">
               {t('Entre em contato')}
            </a>
        </div>
        <img className={styles.heroImg} src={getImageUrl("hero/ola.png")} alt="Hero image of me" />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
       </section>
    );
}