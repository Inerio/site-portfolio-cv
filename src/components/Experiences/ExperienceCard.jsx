import { useCallback } from 'react';
import styles from './styles/ExperiencesStyles.module.css';

function ExperienceCard({
    src,
    link,
    h3,
    p,
    details,
    showSite,
    cta,
    role,
    duration,
    tags,
    highlights,
    showGallery,
    galleryImages,
    setToggleExperience,
    setSelectedExperience,
}) {
    const handleClick = useCallback(() => {
        sessionStorage.setItem('exp:scrollY', String(window.scrollY || 0));

        setToggleExperience(true);
        setSelectedExperience({
            link,
            title: h3,
            description: p,
            details,
            showSite,
            cta,
            logo: src,
            role,
            duration,
            tags,
            highlights,
            showGallery,
            galleryImages,
        });
    }, [link, h3, p, details, showSite, cta, src, role, duration, tags, highlights, showGallery, galleryImages, setToggleExperience, setSelectedExperience]);

    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick();
        }
    }, [handleClick]);

    return (
        <div
            className={styles.card}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
        >
            <div className={styles.logoFrame}>
                <img className={styles.logo} src={src} alt={`${h3} logo`} />
            </div>
            <h3 className={styles.title}>{h3}</h3>
            <p className={styles.subtitle}>{p}</p>
        </div>
    );
}

export default ExperienceCard;
