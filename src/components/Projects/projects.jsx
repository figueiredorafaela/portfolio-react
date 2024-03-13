
import styles from "./projects.module.css";
import { getImageUrl } from "../../utils";
import { useTranslation } from "react-i18next";

export const Project = () => {
    const {t} = useTranslation();

    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>
                {t('Projetos')} 
            </h2>
            <div className={styles.projects}>
                <div className={styles.containerCard}>
                    <img className={styles.image} src={getImageUrl("projects/tht.png")} />
                    <h3 className={styles.titleCard}>
                        {t('The Rural Times')}
                    </h3>
                    <p className={styles.description}>
                        {t('Esse projeto foi feito para o jornal da universidade')}
                    </p>
                    <ul className={styles.skills}>
                        <li className={styles.skill}>
                            {t('Wordpress')}
                        </li>    
                    </ul>
                    <div className={styles.links}>
                        <a className={styles.link} href="/"  target="_blank">
                            Demo
                        </a>
                        <a className={styles.link} href="/" target="_blank">
                            {t('Fonte')} 
                        </a>
                    </div>
                </div>     
            </div>
        </section>
    );
}