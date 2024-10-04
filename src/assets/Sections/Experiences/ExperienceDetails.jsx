import styles from './ExperienceDetailsStyles.module.css'
import { useThemeIcons } from '../../Hooks/useThemeIcons'
import web from '../../../files/web.svg'

function ExperienceDetails({ experience, setToggleExperience }) {
    if (!experience) return null;
    const icons = useThemeIcons();

    return <section id={experience.title} className={styles.container}>
        <h1 className="sectionTitle">{experience.title}</h1>
        <div className={styles.experiencesContainer}>
            <h2>{experience.description}</h2>
            <p>{experience.details}</p>
            <a className={styles.link}
                href={experience.link}
                target="_blank" >
                <p>Aller vers</p>
                <img src={web} alt="web" />
            </a>
            <div onClick={() => setToggleExperience(false)}>
                <br />
                <img className={styles.colorMode}
                    src={icons.back}
                    alt="Back icon" />
            </div>
        </div>
    </section>
}

export default ExperienceDetails