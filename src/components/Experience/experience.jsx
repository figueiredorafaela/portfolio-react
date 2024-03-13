import styles from "./experience.module.css"

import skills from "../../data/skills.json"
import { getImageUrl } from "../../utils"
import { useTranslation } from "react-i18next";

export const Experience = () => {
    const {t} = useTranslation();

    return (
        <section id="experience" className={styles.container}>
            <h2 className={styles.title}>
                {t('Experiência')} 
            </h2>
            <div className={styles.content}>
                <div className={styles.skills}> {skills.map((skill, id) => {
                    return <div className={styles.skill} key={id}>
                        <div className={styles.skillImageContainer}>
                            <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                        </div>
                        <p>
                            {skill.title}
                        </p>
                    </div>
                })}
                </div>
                <ul className={styles.history}>                            
                    <div className={styles.content}>
                        <li className={styles.historyItem}>
                            <img src={getImageUrl("history/jbrj.png")} />
                                <div className={styles.historyItemDetails}>
                                    <h3>
                                        {t('Recepcionista Trilíngue, Jardim Botânico do RJ')}
                                    </h3>
                                    <p>
                                        {t('Fev,2024 - Presente')} 
                                    </p>
                                    <ul>
                                        <li>
                                            {t('Atendimento em inglês e espanhol')}
                                        </li>
                                        <li>
                                            {t('Comunicação com pessoas do mundo inteiro')}
                                        </li>
                                    </ul>
                                </div>
                            </li>
                    </div>
                    <div className={styles.content}>
                        <li className={styles.historyItem}>
                            <img src={getImageUrl("history/iuul.png")} />
                                <div className={styles.historyItemDetails}>
                                    <h3>
                                        {t('Residente em Front-end, iUUL')}
                                    </h3>
                                    <p>
                                        {t('Fev,2023 - Mai,2023')} 
                                    </p>
                                    <ul>
                                        <li>
                                            {t('Primeiro contato com o React')}
                                        </li>
                                        <li>
                                            {t('Utilização de API e ferramente de teste')}
                                        </li>
                                    </ul>
                                </div>
                            </li>
                    </div>
                </ul>
            </div>
        </section>
    );
}