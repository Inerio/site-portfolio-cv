import styles from './styles/ExperiencesStyles.module.css'
import ExperienceCard from './ExperienceCard'
import siteLogo from '../../assets/pictures/logos/logo-website-alpha.png'
import merieuxLogo from '../../assets/pictures/logos/mérieux.png'
import abasLogo from '../../assets/pictures/logos/abas-france-logo.png'
import abbiStudioLogo from '../../assets/pictures/logos/abbi-studio-logo.png'
import experiences from '../../assets/documents/experiences.json'

function Experiences({ setToggleExperience, setSelectedExperience }) {
    return <section id="experiences" className={styles.container}>
        <h1 className="sectionTitle">Experiences</h1>
        <div className={styles.experiencesContainer}>
            <ExperienceCard
                src={siteLogo}
                link={experiences.portfolio.link}
                h3={experiences.portfolio.title}
                p={experiences.portfolio.description}
                details={experiences.portfolio.details}
                setToggleExperience={setToggleExperience}
                setSelectedExperience={setSelectedExperience}
            />
            <ExperienceCard
                src={merieuxLogo}
                link={experiences.merieux.link}
                h3={experiences.merieux.title}
                p={experiences.merieux.description}
                details={experiences.merieux.details}
                setToggleExperience={setToggleExperience}
                setSelectedExperience={setSelectedExperience}
            />
            <ExperienceCard
                src={abasLogo}
                link={experiences.abas.link}
                h3={experiences.abas.title}
                p={experiences.abas.description}
                details={experiences.abas.details}
                setToggleExperience={setToggleExperience}
                setSelectedExperience={setSelectedExperience}
            />
            <ExperienceCard
                src={abbiStudioLogo}
                link={experiences.abbidigital.link}
                h3={experiences.abbidigital.title}
                p={experiences.abbidigital.description}
                details={experiences.abbidigital.details}
                setToggleExperience={setToggleExperience}
                setSelectedExperience={setSelectedExperience}
            />
        </div>
    </section>
}

export default Experiences