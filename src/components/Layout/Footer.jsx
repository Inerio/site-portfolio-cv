import { useTranslation } from '../../hooks/useTranslation.js'
import styles from "./styles/FooterStyles.module.css"

function Footer() {
    const t = useTranslation()

    return (
        <section id="footer" className={styles.container}>
            <p>
                &copy; 2024 Julien De Araujo. <br />
                {t('copyright')}
            </p>
        </section>
    )
}

export default Footer
