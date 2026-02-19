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

    const labels = {
        visitSite: t('experiences.labels.visitSite'),
        openApp: t('experiences.labels.openApp'),
        viewDemo: t('experiences.labels.viewDemo'),
        viewCode: t('experiences.labels.viewCode'),
    };

    const exp = (key, logo, cta, showSite = true) => ({
        src: logo,
        link: t(`experiences.${key}.link`),
        h3: t(`experiences.${key}.title`),
        p: t(`experiences.${key}.description`),
        details: t(`experiences.${key}.details`),
        role: t(`experiences.${key}.role`),
        duration: t(`experiences.${key}.duration`),
        tags: t(`experiences.${key}.tags`),
        highlights: t(`experiences.${key}.highlights`),
        cta,
        showSite,
    });

    const experiences = [
        exp('tasukeru', tasukeruLogo, labels.openApp),
        exp('portfolio', portfolio, labels.viewCode),
        exp('datalog', datalog, labels.viewDemo, false),
        exp('merieux', merieuxLogo, labels.visitSite),
        exp('abas', abasLogo, labels.visitSite),
        exp('abbidigital', abbiStudioLogo, labels.visitSite),
    ];

    return (
        <section id="experiences" className={styles.container}>
            <h1 className="sectionTitle">{t('experienceTitle')}</h1>
            <div className={styles.experiencesContainer}>
                {experiences.map((props) => (
                    <ExperienceCard
                        key={props.h3}
                        {...props}
                        setToggleExperience={setToggleExperience}
                        setSelectedExperience={setSelectedExperience}
                    />
                ))}
            </div>
        </section>
    );
}

export default Experiences;
