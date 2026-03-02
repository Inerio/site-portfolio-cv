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

    const ctaLabel = experience.cta || t('experiences.websiteButton');
    const tags = Array.isArray(experience.tags) ? experience.tags : [];
    const highlights = Array.isArray(experience.highlights) ? experience.highlights : [];
    const galleryImages = Array.isArray(experience.galleryImages) ? experience.galleryImages : [];

    return (
        <section id={sectionId} className={styles.container}>
            <div className={styles.content}>
                {/* Back button */}
                <button
                    type="button"
                    className={styles.backBtn}
                    onClick={handleBack}
                    aria-label={t('experienceDetails.backLabel')}
                    title={t('experienceDetails.backLabel')}
                >
                    <img src={icons.back} alt="" aria-hidden="true" />
                </button>

                {/* Hero: logo + title + meta */}
                <div className={styles.hero}>
                    <div className={styles.heroLogo}>
                        <img src={experience.logo} alt="" aria-hidden="true" />
                    </div>
                    <div className={styles.heroInfo}>
                        <h1 ref={topRef} tabIndex={-1}>{experience.title}</h1>
                        <h2 className={styles.role}>{experience.role || experience.description}</h2>
                        {experience.duration && (
                            <span className={styles.duration}>{experience.duration}</span>
                        )}
                        {canShowSite && (
                            <a
                                className={styles.link}
                                href={experience.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${ctaLabel} — ${experience.title}`}
                                title={ctaLabel}
                            >
                                <p>{ctaLabel}</p>
                                <img src={web} alt="" aria-hidden="true" />
                            </a>
                        )}
                    </div>
                </div>

                {/* Tech stack tags */}
                {tags.length > 0 && (
                    <div className={styles.section}>
                        <h3>{t('experienceDetails.techStack')}</h3>
                        <div className={styles.tags}>
                            {tags.map((tag) => (
                                <span key={tag} className={styles.tag}>{tag}</span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Highlights */}
                {highlights.length > 0 && (
                    <div className={styles.section}>
                        <h3>{t('experienceDetails.highlights')}</h3>
                        <ul className={styles.highlights}>
                            {highlights.map((item, i) => (
                                <li key={i}>
                                    <img src={icons.checkmark} alt="" aria-hidden="true" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* About / Description */}
                <div className={styles.section}>
                    <h3>{t('experienceDetails.about')}</h3>
                    <p className={styles.details}>{experience.details}</p>
                </div>

                {/* Gallery — set showGallery: true in translations to enable */}
                {experience.showGallery && (
                    <div className={styles.section}>
                        <h3>{t('experienceDetails.gallery')}</h3>
                        <div className={styles.gallery}>
                            {galleryImages.length > 0 ? (
                                galleryImages.map((src, i) => (
                                    <img
                                        key={i}
                                        className={styles.galleryImage}
                                        src={src}
                                        alt={`${experience.title} screenshot ${i + 1}`}
                                        loading="lazy"
                                    />
                                ))
                            ) : (
                                <div className={styles.galleryPlaceholder}>
                                    <p>{t('experienceDetails.galleryPlaceholder')}</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Bottom back button */}
                <div className={styles.footerActions}>
                    <button
                        type="button"
                        className={styles.backBtn}
                        onClick={handleBack}
                        aria-label={t('experienceDetails.backLabel')}
                        title={t('experienceDetails.backLabel')}
                    >
                        <img src={icons.back} alt="" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ExperienceDetails;
