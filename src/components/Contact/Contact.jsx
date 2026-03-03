import { useTranslation } from '../../hooks/useTranslation';
import styles from './styles/ContactStyles.module.css';

function Contact() {
    const t = useTranslation();

    return (
        <section id="contact" className={styles.container}>
            <h1 className="sectionTitle">{t('contactTitle')}</h1>
            <form action="https://formspree.io/f/mwpegrwn" method="post">
                <div>
                    <label htmlFor="name" className="visuallyHidden">
                        {t('name')}
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder={t('name')}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="visuallyHidden">
                        {t('email')}
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder={t('email')}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message" className="visuallyHidden">
                        {t('message')}
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        placeholder={t('message')}
                        required
                    />
                </div>
                <input className="btn" type="submit" value={t('contactButton')} />
            </form>
        </section>
    );
}

export default Contact;
