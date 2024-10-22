import { useTranslation } from '../../hooks/useTranslation.js'
import styles from './styles/ExperiencesStyles.module.css'
import ExperienceCard from './ExperienceCard'
import siteLogo from '../../assets/pictures/logos/logo-website-alpha.png'
import merieuxLogo from '../../assets/pictures/logos/mérieux.png'
import abasLogo from '../../assets/pictures/logos/abas-france-logo.png'
import abbiStudioLogo from '../../assets/pictures/logos/abbi-studio-logo.png'

function Experiences({ setToggleExperience, setSelectedExperience }) {
    //t for translationKey
    const t = useTranslation()

    return <section id="experiences" className={styles.container}>
        <h1 className="sectionTitle">{t('experienceTitle')}</h1>
        <div className={styles.experiencesContainer}>
            <ExperienceCard
                src={siteLogo}
                link={t('experiences.portfolio.link')}
                h3={t('experiences.portfolio.title')}
                p={t('experiences.portfolio.description')}
                details={t('experiences.portfolio.details')}
                setToggleExperience={setToggleExperience}
                setSelectedExperience={setSelectedExperience}
            />
            <ExperienceCard
                src={merieuxLogo}
                link={t('experiences.merieux.link')}
                h3={t('experiences.merieux.title')}
                p={t('experiences.merieux.description')}
                details={t('experiences.merieux.details')}
                setToggleExperience={setToggleExperience}
                setSelectedExperience={setSelectedExperience}
            />
            <ExperienceCard
                src={abasLogo}
                link={t('experiences.abas.link')}
                h3={t('experiences.abas.title')}
                p={t('experiences.abas.description')}
                details={t('experiences.abas.details')}
                setToggleExperience={setToggleExperience}
                setSelectedExperience={setSelectedExperience}
            />
            <ExperienceCard
                src={abbiStudioLogo}
                link={t('experiences.abbidigital.link')}
                h3={t('experiences.abbidigital.title')}
                p={t('experiences.abbidigital.description')}
                details={t('experiences.abbidigital.details')}
                setToggleExperience={setToggleExperience}
                setSelectedExperience={setSelectedExperience}
            />
        </div>
    </section>
}

export default Experiences