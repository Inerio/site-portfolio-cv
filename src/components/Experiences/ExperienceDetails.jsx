import { useEffect, useRef } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import styles from './styles/ExperienceDetailsStyles.module.css';
import { useThemeIcons } from '../../hooks/useThemeIcons';
import web from '../../assets/pictures/icons/web.svg';

function ExperienceDetails({ experience, setToggleExperience }) {
    const icons = useThemeIcons();
    const t = useTranslation();
    const topRef = useRef(null);

    useEffect(() => {
        requestAnimationFrame(() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
            if (topRef.current) topRef.current.focus();
        });
    }, []);

    if (!experience) return null;

    const sectionId = `exp-${String(experience.title || 'details')
        .toLowerCase()
        .replace(/\s+/g, '-')}`;

    const canShowSite =
        (experience.showSite ?? true) &&
        Boolean(experience.link) &&
        experience.link !== '#';

    const handleBack = () => {
        setToggleExperience(false);
        const y = Number(sessionStorage.getItem('exp:scrollY') || '0');
        setTimeout(() => {
            window.scrollTo({ top: y, left: 0, behavior: 'auto' });
        }, 0);
    };

    // Use custom CTA if provided; fallback to the existing translation
    const ctaLabel = experience.cta || t('experiences.websiteButton');

    return (
        <section id={sectionId} className={styles.container}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h1 ref={topRef} tabIndex={-1} className="sectionTitle">
                        {experience.title}
                    </h1>

                    {canShowSite && (
                        <div className={styles.actionsTop}>
                            <a
                                className={styles.link}
                                href={experience.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${ctaLabel} — ${experience.title} (opens in a new tab)`}
                                title={ctaLabel}
                            >
                                <p>{ctaLabel}</p>
                                <img src={web} alt="" aria-hidden="true" />
                            </a>
                        </div>
                    )}

                    <button
                        type="button"
                        className={styles.backBtn}
                        onClick={handleBack}
                        aria-label="Back"
                        title="Back"
                    >
                        <img src={icons.back} alt="" aria-hidden="true" />
                    </button>
                </div>

                <div className={styles.experiencesContainer}>
                    <h2>{experience.description}</h2>
                    <p>{experience.details}</p>
                </div>

                <div className={styles.footerActions}>
                    <button
                        type="button"
                        className={`${styles.backBtn} ${styles.backBtnBottom}`}
                        onClick={handleBack}
                        aria-label="Back"
                        title="Back"
                    >
                        <img src={icons.back} alt="" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ExperienceDetails;
