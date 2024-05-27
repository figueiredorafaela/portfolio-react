
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
                        {t('Esse projeto foi feito com base no design apresentado pela equipe do jornal')}
                    </p>
                    <ul className={styles.skills}>
                        <li className={styles.skill}>
                            {t('Wordpress')}
                        </li>    
                    </ul>
                    <div className={styles.links}>
                        <a className={styles.link} href="https://theruraltimesjornal.com/"  target="_blank">
                            Demo
                        </a>
                        <a className={styles.link} href="https://www.canva.com/design/DAF59DzceHs/Y4mV5H5IE0u5MEHEbY1rCQ/edit?utm_content=DAF59DzceHs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank">
                            {t('Design')} 
                        </a>
                    </div>
                </div>
                <div className={styles.containerCard}>
                    <img className={styles.image} src={getImageUrl("projects/musicplayer1.png")} />
                    <h3 className={styles.titleCard}>
                        {t('Tocador de música')}
                    </h3>
                    <p className={styles.description}>
                        {t('Esse projeto é um tocador de música')}
                    </p>
                    <ul className={styles.skills}>
                        <li className={styles.skill}>
                            {t('HTML')}
                        </li>
                        <li className={styles.skill}>
                            {t('CSS')}
                        </li>
                        <li className={styles.skill}>
                            {t('JavaScript')}
                        </li>    
                    </ul>
                    <div className={styles.links}>
                        <a className={styles.link} href="https://musica-tocador.netlify.app"  target="_blank">
                            Demo
                        </a>
                        <a className={styles.link} href="https://github.com/figueiredorafaela/music-player">
                            {t('Código')} 
                        </a>
                    </div>
                </div>     
            </div>
        </section>
    );
}