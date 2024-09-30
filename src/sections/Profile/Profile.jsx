import styles from './ProfileStyles.module.css'
import profileImg from '../../assets/profile-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import atLight from '../../assets/at-light.svg'
import atDark from '../../assets/at-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import CV from '../../assets/CV-Julien-De-Araujo.pdf'
import { useTheme } from '../../common/ThemeContext'

function Profile() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? moon : sun;
    const atIcon = theme === 'light' ? atLight : atDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    return <section id="profile" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img
                className={styles.profile}
                src={profileImg}
                alt="Profile picture of Julien De Araujo"
            />
            <img
                className={styles.colorMode}
                src={themeIcon}
                alt="Color mode icon"
                onClick={toggleTheme}
            />
        </div>
        <div className={styles.info}>
            <h1>
                Julien
                <br />
                De Araujo
            </h1>
            <h2>Ingénieur Informatique</h2>
            <span>
                <a onClick={() => { navigator.clipboard.writeText("julien.dearaujo.pro@gmail.com"), alert("Email copié dans le presse-papiers.") }}>
                    <img src={atIcon} alt="Twitter icon" />
                </a>
                <a href="https://github.com/Inerio" target="_blank">
                    <img src={githubIcon} alt="Github icon" />
                </a>
                <a href="https://www.linkedin.com/in/julien-de-araujo-1909a4174/" target="_blank">
                    <img src={linkedinIcon} alt="Linkedin icon" />
                </a>
            </span>
            <p className={styles.description}>
                Ma soif d’apprentissage est toujours présente.
            </p>
            <a href={CV} download>
                <button className="hover" download>
                    CV
                </button>
            </a>
        </div>
    </section>
}

export default Profile