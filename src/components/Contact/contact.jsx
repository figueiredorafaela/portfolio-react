import { getImageUrl } from "../../utils";
import styles from "./contact.module.css";
import { useTranslation } from "react-i18next";


export const Contact = () => {
    const {t} = useTranslation();

    return (
        <footer className={styles.container} id="Contact">
            <div className={styles.text}>
                <h2>
                    {t('Contato')} 
                </h2>
                <p>
                    {t('Fique à vontade para entrar em contato!')} 
                </p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <a href="mailto:rafaelaffigueiredo1@gmail.com"  target="_blank">
                        <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                    </a>
                </li>
                <li className={styles.link}>
                    <a href="https://www.linkedin.com/in/rafaelaffigueiredo/"  target="_blank">
                        <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin icon" />
                    </a>
                </li>
                <li className={styles.link}>
                    <a href="https://github.com/figueiredorafaela"  target="_blank">
                        <img src={getImageUrl("contact/githubIcon.png")} alt="github icon" />
                    </a>
                </li>
            </ul>
        </footer>
    );
}