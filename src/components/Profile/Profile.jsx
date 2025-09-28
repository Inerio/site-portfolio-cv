import { useState } from 'react'
import styles from './styles/ProfileStyles.module.css'
import profileImg from '../../assets/pictures/profile-img.png'
import CV from '../../assets/documents/CV-Julien-De-Araujo.pdf'
import { useTheme } from '../../assets/context/ThemeContext'
import { useLanguage } from '../../assets/context/LanguageContext.jsx'
import { useThemeIcons } from '../../hooks/useThemeIcons.js'
import { useLanguageIcons } from '../../hooks/useLanguageIcons.js'
import { useTranslation } from '../../hooks/useTranslation.js'

function Profile() {
    const { toggleTheme } = useTheme()
    const { toggleLanguage } = useLanguage()
    const themeIcons = useThemeIcons()
    const languageIcons = useLanguageIcons()

    const t = useTranslation()

    const [copied, setCopied] = useState(false)
    const email = 'julien.dearaujo.pro@gmail.com'

    const handleCopyEmail = async (e) => {
        e.preventDefault()
        try {
            await navigator.clipboard.writeText(email)
            setCopied(true)
        } catch {
            const ta = document.createElement('textarea')
            ta.value = email
            ta.style.position = 'fixed'
            ta.style.opacity = '0'
            document.body.appendChild(ta)
            ta.select()
            document.execCommand('copy')
            document.body.removeChild(ta)
            setCopied(true)
        }
        window.setTimeout(() => setCopied(false), 1600)
    }

    return (
        <section id="profile" className={styles.container}>
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

                    <a
                        onClick={handleCopyEmail}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') handleCopyEmail(e)
                        }}
                        title={email}
                    >
                        <img src={themeIcons.at} alt="Email icon" />
                    </a>

                    <a
                        href="https://github.com/Inerio"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={themeIcons.github} alt="Github icon" />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/julien-de-araujo-1909a4174/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={themeIcons.linkedin} alt="Linkedin icon" />
                    </a>
                </span>

                <p className={styles.description}>{t('description')}</p>

                <a href={CV} download>
                    <button type="button" className="hover btn">
                        {t('resumeButton')}
                    </button>
                </a>
            </div>

            {copied && (
                <div className={styles.toast} role="status" aria-live="polite">
                    {t('emailCopied')}
                </div>
            )}
        </section>
    )
}

export default Profile
