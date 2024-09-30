import styles from './ExperiencesStyles.module.css'
import ExperienceCard from '../../Components/ExperienceCard'
import siteLogo from '../../../files/logo-website-alpha.png'
import merieuxLogo from '../../../files/mérieux.png'
import abasLogo from '../../../files/abas-france-logo.png'
import abbiStudioLogo from '../../../files/abbi-studio-logo.png'

function Experiences() {
    return <section id="experiences" className={styles.container}>
        <h1 className="sectionTitle">Experiences</h1>
        <div className={styles.experiencesContainer}>
            <ExperienceCard
                src={siteLogo}
                link='https://github.com/Inerio/site-portfolio-cv'
                h3="Mon site"
                p="Un portfolio en React"
            />
            <ExperienceCard
                src={merieuxLogo}
                link='https://www.merieuxnutrisciences.com/fr/'
                h3="Mérieux Nutriscience"
                p="Data developer / Full Stack"
            />
            <ExperienceCard
                src={abasLogo}
                link='https://abas-bs.com/fr'
                h3="ABAS"
                p="Java developer"
            />
            <ExperienceCard
                src={abbiStudioLogo}
                link='https://www.abbi.digital/'
                h3="Abbi Studio"
                p="Angular developer"
            />
        </div>
    </section>
}

export default Experiences