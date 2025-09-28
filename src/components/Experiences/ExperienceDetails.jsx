import { useTranslation } from '../../hooks/useTranslation'
import styles from './styles/ExperienceDetailsStyles.module.css'
import { useThemeIcons } from '../../hooks/useThemeIcons'
import web from '../../assets/pictures/icons/web.svg'

function ExperienceDetails({ experience, setToggleExperience }) {
    const icons = useThemeIcons()
    const t = useTranslation()

    if (!experience) return null

    const sectionId = `exp-${String(experience.title || 'details')
        .toLowerCase()
        .replace(/\s+/g, '-')}`

    return (
        <section id={sectionId} className={styles.container}>
            <div className={styles.content}>
                <button
                    type="button"
                    className={styles.backBtn}
                    onClick={() => setToggleExperience(false)}
                    aria-label="Back"
                    title="Back"
                >
                    <img src={icons.back} alt="" aria-hidden="true" />
                </button>

                <h1 className="sectionTitle">{experience.title}</h1>

                <div className={styles.experiencesContainer}>
                    <h2>{experience.description}</h2>
                    <p>{experience.details}</p>

                    <a
                        className={styles.link}
                        href={experience.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <p>{t('experiences.websiteButton')}</p>
                        <img src={web} alt="web" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ExperienceDetails
