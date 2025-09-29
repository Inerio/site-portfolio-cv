import { useTranslation } from '../../hooks/useTranslation.js';
import styles from './styles/ExperiencesStyles.module.css';
import ExperienceCard from './ExperienceCard';
import portfolio from '../../assets/pictures/logos/portfolio.svg';
import merieuxLogo from '../../assets/pictures/logos/mérieux.png';
import abasLogo from '../../assets/pictures/logos/abas-france-logo.png';
import abbiStudioLogo from '../../assets/pictures/logos/abbi-studio-logo.png';
import tasukeruLogo from '../../assets/pictures/logos/tasukeru.svg';
import datalog from '../../assets/pictures/logos/datalog.svg';

function Experiences({ setToggleExperience, setSelectedExperience }) {
    const t = useTranslation();

    return (
        <section id="experiences" className={styles.container}>
            <h1 className="sectionTitle">{t('experienceTitle')}</h1>
            <div className={styles.experiencesContainer}>
                <ExperienceCard
                    src={tasukeruLogo}
                    link={t('experiences.tasukeru.link')}
                    h3={t('experiences.tasukeru.title')}
                    p={t('experiences.tasukeru.description')}
                    details={t('experiences.tasukeru.details')}
                    setToggleExperience={setToggleExperience}
                    setSelectedExperience={setSelectedExperience}
                />
                <ExperienceCard
                    src={portfolio}
                    link={t('experiences.portfolio.link')}
                    h3={t('experiences.portfolio.title')}
                    p={t('experiences.portfolio.description')}
                    details={t('experiences.portfolio.details')}
                    setToggleExperience={setToggleExperience}
                    setSelectedExperience={setSelectedExperience}
                />
                <ExperienceCard
                    src={datalog}
                    link={t('experiences.datalog.link')}
                    h3={t('experiences.datalog.title')}
                    p={t('experiences.datalog.description')}
                    details={t('experiences.datalog.details')}
                    showSite={false}
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
    );
}

export default Experiences;
