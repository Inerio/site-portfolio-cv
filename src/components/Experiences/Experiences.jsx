import { useTranslation } from '../../hooks/useTranslation.js';
import styles from './styles/ExperiencesStyles.module.css';
import ExperienceCard from './ExperienceCard';
import portfolio from '../../assets/pictures/logos/portfolio.svg';
import merieuxLogo from '../../assets/pictures/logos/mérieux.png';
import abasLogo from '../../assets/pictures/logos/abas-france-logo.png';
import abbiStudioLogo from '../../assets/pictures/logos/abbi-studio-logo.png';
import tasukeruLogo from '../../assets/pictures/logos/tasukeru.svg';
import datalog from '../../assets/pictures/logos/datalog.svg';
import movieseekerLogo from '../../assets/pictures/logos/movieseeker.svg';
import gustaveLogo from '../../assets/pictures/logos/gustavecode.svg';

// -- Gallery images --
import tasukeruThumb from '../../assets/pictures/thumbnail/tasukeru_thumbnail.png';
import msThumb1 from '../../assets/pictures/thumbnail/movieseeker_thumbnail1.png';
import msThumb2 from '../../assets/pictures/thumbnail/movieseeker_thumbnail2.png';
import msThumb3 from '../../assets/pictures/thumbnail/movieseeker_thumbnail3.png';
import merieuxThumb from '../../assets/pictures/thumbnail/mérieuxnutrisciences_thumbnail.png';
import abasThumb from '../../assets/pictures/thumbnail/abas_thumbnail.png';
import abbiThumb from '../../assets/pictures/thumbnail/abbidigital_thumbnail.png';
import gustaveCode1 from '../../assets/pictures/thumbnail/gustavecode_thumbnail.png';

function Experiences({ setToggleExperience, setSelectedExperience }) {
    const t = useTranslation();

    const labels = {
        visitSite: t('experiences.labels.visitSite'),
        openApp: t('experiences.labels.openApp'),
        viewDemo: t('experiences.labels.viewDemo'),
        viewCode: t('experiences.labels.viewCode'),
    };

    const exp = (key, logo, cta, { showSite = true, galleryImages = [] } = {}) => ({
        src: logo,
        link: t(`experiences.${key}.link`),
        h3: t(`experiences.${key}.title`),
        p: t(`experiences.${key}.description`),
        details: t(`experiences.${key}.details`),
        role: t(`experiences.${key}.role`),
        duration: t(`experiences.${key}.duration`),
        tags: t(`experiences.${key}.tags`),
        highlights: t(`experiences.${key}.highlights`),
        showGallery: t(`experiences.${key}.showGallery`),
        galleryImages,
        cta,
        showSite,
    });

    const experiences = [
        exp('tasukeru', tasukeruLogo, labels.openApp, { galleryImages: [tasukeruThumb] }),
        exp('movieseeker', movieseekerLogo, labels.openApp, { galleryImages: [msThumb1, msThumb2, msThumb3] }),
        exp('gustavecode', gustaveLogo, labels.viewCode, { galleryImages: [gustaveCode1] }),
        exp('portfolio', portfolio, labels.viewCode),
        exp('datalog', datalog, labels.viewDemo, { showSite: false }),
        exp('merieux', merieuxLogo, labels.visitSite, { galleryImages: [merieuxThumb] }),
        exp('abas', abasLogo, labels.visitSite, { galleryImages: [abasThumb] }),
        exp('abbidigital', abbiStudioLogo, labels.visitSite, { galleryImages: [abbiThumb] }),
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
