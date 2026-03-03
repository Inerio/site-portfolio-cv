import { useCallback, useState } from 'react';
import styles from './styles/ProfileStyles.module.css';
import profileImg from '../../assets/pictures/profile-img.png';
import CV from '../../assets/documents/CV-Julien-De-Araujo.pdf';
import { useTheme } from '../../assets/context/ThemeContext';
import { useLanguage } from '../../assets/context/LanguageContext.jsx';
import { useThemeIcons } from '../../hooks/useThemeIcons.js';
import { useLanguageIcons } from '../../hooks/useLanguageIcons.js';
import { useTranslation } from '../../hooks/useTranslation.js';
import LazyImage from '../common/LazyImage';

const EMAIL = 'julien.dearaujo.pro@gmail.com';

function Profile() {
    const { toggleTheme } = useTheme();
    const { toggleLanguage } = useLanguage();
    const themeIcons = useThemeIcons();
    const languageIcons = useLanguageIcons();
    const t = useTranslation();

    const [copied, setCopied] = useState(false);

    const handleCopyEmail = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
        } catch {
            const ta = document.createElement('textarea');
            ta.value = EMAIL;
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            setCopied(true);
        }
        window.setTimeout(() => setCopied(false), 1600);
    }, []);

    return (
        <section id="profile" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <div className={styles.profile}>
                    <LazyImage
                        src={profileImg}
                        alt="Profile picture of Julien De Araujo"
                        aspectRatio="1 / 1"
                    />
                </div>

                <button
                    type="button"
                    className={`${styles.iconBtn} ${styles.colorMode}`}
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                >
                    <img src={themeIcons.theme} alt="" aria-hidden="true" />
                </button>
                <button
                    type="button"
                    className={`${styles.iconBtn} ${styles.flagIconMobile}`}
                    onClick={toggleLanguage}
                    aria-label="Toggle language"
                >
                    <img src={languageIcons.language} alt="" aria-hidden="true" />
                </button>
            </div>

            <div className={styles.info}>
                <h1 className={styles.flagContainer}>
                    <button
                        type="button"
                        className={`${styles.iconBtn} ${styles.flagIconDesktop}`}
                        onClick={toggleLanguage}
                        aria-label="Toggle language"
                    >
                        <img src={languageIcons.language} alt="" aria-hidden="true" />
                    </button>
                    Julien
                    <br />
                    De Araujo
                </h1>

                <h2>{t('jobTitle')}</h2>

                <span>
                    <button
                        type="button"
                        className={styles.iconBtn}
                        onClick={handleCopyEmail}
                        aria-label={t('copyEmailAria')}
                        title={EMAIL}
                    >
                        <img src={themeIcons.at} alt="" aria-hidden="true" />
                    </button>

                    <a href="https://github.com/Inerio" target="_blank" rel="noopener noreferrer">
                        <img src={themeIcons.github} alt="Github" />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/julien-de-araujo-1909a4174/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={themeIcons.linkedin} alt="Linkedin" />
                    </a>
                </span>

                <p className={styles.description}>{t('description')}</p>

                <a href={CV} download className="btn">
                    {t('resumeButton')}
                </a>
            </div>

            {copied && (
                <div className={styles.toast} role="status" aria-live="polite">
                    {t('emailCopied')}
                </div>
            )}
        </section>
    );
}

export default Profile;
