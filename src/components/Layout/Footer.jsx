import { useTranslation } from '../../hooks/useTranslation.js';
import styles from './styles/FooterStyles.module.css';

/** Helper: returns the current year. */
function getCurrentYear() {
    return new Date().getFullYear();
}

function Footer() {
    const t = useTranslation();

    return (
        <section id="footer" className={styles.container}>
            <p>
                &copy; {getCurrentYear()} Julien De Araujo.<br />
                {t('copyright')}
            </p>
        </section>
    );
}

export default Footer;
