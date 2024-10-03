import styles from './ExperiencesStyles.module.css'
import ExperienceCard from '../../Components/ExperienceCard'
import siteLogo from '../../../files/logo-website-alpha.png'
import merieuxLogo from '../../../files/mérieux.png'
import abasLogo from '../../../files/abas-france-logo.png'
import abbiStudioLogo from '../../../files/abbi-studio-logo.png'

function Experiences({ setToggleExperience, setSelectedExperience }) {
    return <section id="experiences" className={styles.container}>
        <h1 className="sectionTitle">Experiences</h1>
        <div className={styles.experiencesContainer}>
            <ExperienceCard
                src={siteLogo}
                link='https://github.com/Inerio/site-portfolio-cv'
                h3="Git du projet"
                p="Un portfolio en React"
                setToggleExperience={setToggleExperience}
                setSelectedExperience={setSelectedExperience}
                details="Le site sur lequel vous êtes..."
            />
            <ExperienceCard
                src={merieuxLogo}
                link='https://www.merieuxnutrisciences.com/fr/'
                h3="Mérieux Nutriscience"
                p="Data developer / Full Stack"
                setToggleExperience={setToggleExperience}
                setSelectedExperience={setSelectedExperience}
                details="Chez Mérieux Nutriscience, j'ai travaillé sur..."
            />
            <ExperienceCard
                src={abasLogo}
                link='https://abas-bs.com/fr'
                h3="ABAS"
                p="Java developer"
                setToggleExperience={setToggleExperience}
                setSelectedExperience={setSelectedExperience}
                details="Chez ABAS, j'ai travaillé sur..."
            />
            <ExperienceCard
                src={abbiStudioLogo}
                link='https://www.abbi.digital/'
                h3="Abbi Studio"
                p="Angular developer"
                setToggleExperience={setToggleExperience}
                setSelectedExperience={setSelectedExperience}
                details="Chez Abbi Studio, j'ai travaillé sur..."
            />
        </div>
    </section>
}

export default Experiences