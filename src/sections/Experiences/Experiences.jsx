import styles from './ExperiencesStyles.module.css'
import ExperienceCard from '../../common/ExperienceCard'
import siteLogo from '../../assets/random-image.png'
import merieuxLogo from '../../assets/mérieux.png'
import abasLogo from '../../assets/abas-france-logo.png'
import abbiStudioLogo from '../../assets/abbi-studio-logo.png'

function Experiences() {
    return <section id="projects" className={styles.container}>
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
                link='https://github.com/Inerio/site-portfolio-cv'
                h3="Mérieux Nutriscience"
                p="Data developer / Full Stack"
            />
            <ExperienceCard
                src={abasLogo}
                link='https://github.com/Inerio/site-portfolio-cv'
                h3="ABAS"
                p="Java developer"
            />
            <ExperienceCard
                src={abbiStudioLogo}
                link='https://github.com/Inerio/site-portfolio-cv'
                h3="Abbi Studio"
                p="Angular developer"
            />
        </div>
    </section>
}

export default Experiences