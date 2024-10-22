import styles from './styles/ProfileStyles.module.css'
import profileImg from '../../assets/pictures/profile-img.png'
import CV from '../../assets/documents/CV-Julien-De-Araujo.pdf'
import { useTheme } from '../../assets/context/ThemeContext'
import { useLanguage } from '../../assets/context/LanguageContext.jsx'
import { useThemeIcons } from '../../hooks/useThemeIcons.js'
import { useLanguageIcons } from '../../hooks/useLanguageIcons.js'
import { useTranslation } from '../../hooks/useTranslation.js'


function Profile() {
    const { toggleTheme } = useTheme();
    const { toggleLanguage } = useLanguage();
    const themeIcons = useThemeIcons();
    const languageIcons = useLanguageIcons();

    //t for translationKey
    const t = useTranslation();

    //TODO
    /*const handleClick = () => {
        navigator.clipboard.writeText("julien.dearaujo.pro@gmail.com");
        alert("Email copié dans le presse-papiers.");
    }*/

    return <section id="profile" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img
                className={styles.profile}
                src={profileImg}
                alt="Profile picture of Julien De Araujo"
            />
            <img
                className={styles.colorMode}
                src={themeIcons.theme}
                alt="Color mode icon"
                onClick={toggleTheme}
            />
            <img
                className={styles.flagIconMobile}
                src={languageIcons.language}
                alt="Current language flag"
                onClick={toggleLanguage}
            />
        </div>
        <div className={styles.info}>
            <h1 className={styles.flagContainer}>
                <img
                    className={styles.flagIconDesktop}
                    src={languageIcons.language}
                    alt="Current language flag"
                    onClick={toggleLanguage}
                />
                Julien
                <br />
                De Araujo
            </h1>
            <h2>{t('jobTitle')}</h2>
            <span>
                <a /*onClick={handleClick}*/>
                    <img src={themeIcons.at} alt="Twitter icon" />
                </a>
                <a href="https://github.com/Inerio" target="_blank">
                    <img src={themeIcons.github} alt="Github icon" />
                </a>
                <a href="https://www.linkedin.com/in/julien-de-araujo-1909a4174/" target="_blank">
                    <img src={themeIcons.linkedin} alt="Linkedin icon" />
                </a>
            </span>
            <p className={styles.description}>
                {t('description')}
            </p>
            <a href={CV} download>
                <button className="hover" download>
                    {t('resumeButton')}
                </button>
            </a>
        </div>
    </section >
}

export default Profile