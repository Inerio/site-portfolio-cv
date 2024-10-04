import styles from './styles/ProfileStyles.module.css'
import profileImg from '../../assets/pictures/profile-img.png'
import CV from '../../assets/documents/CV-Julien-De-Araujo.pdf'
import { useTheme } from '../../assets/context/ThemeContext'
import { useThemeIcons } from '../../hooks/useThemeIcons.js'


function Profile() {
    const { toggleTheme } = useTheme();
    const icons = useThemeIcons();

    const handleClick = () => {
        navigator.clipboard.writeText("julien.dearaujo.pro@gmail.com");
        alert("Email copié dans le presse-papiers.");
    }

    return <section id="profile" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img
                className={styles.profile}
                src={profileImg}
                alt="Profile picture of Julien De Araujo"
            />
            <img
                className={styles.colorMode}
                src={icons.theme}
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

                <a onClick={handleClick}>
                    <img src={icons.at} alt="Twitter icon" />
                </a>

                <a href="https://github.com/Inerio" target="_blank">
                    <img src={icons.github} alt="Github icon" />
                </a>
                <a href="https://www.linkedin.com/in/julien-de-araujo-1909a4174/" target="_blank">
                    <img src={icons.linkedin} alt="Linkedin icon" />
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