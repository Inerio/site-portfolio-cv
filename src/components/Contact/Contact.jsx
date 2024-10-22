import { useTranslation } from '../../hooks/useTranslation'
import styles from './styles/ContactStyles.module.css'

function Contact() {
    //t for translationKey
    const t = useTranslation()

    return <section id='contact' className={styles.container}>
        <h1 className="sectionTitle">{t('contactTitle')}</h1>
        <form action="https://formspree.io/f/mwpegrwn" method="post">
            <div className="formGroup">
                <label htmlFor="name" hidden>
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder={t('name')}
                    required
                />
            </div>
            <div className="formGroup">
                <label htmlFor="email" hidden>
                    Email
                </label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder={t('email')}
                    required
                />
            </div>
            <div className="formGroup">
                <label htmlFor="message" hidden>
                    Message
                </label>
                <textarea
                    name="message"
                    id="message"
                    placeholder={t('message')}
                    required></textarea>
            </div>
            <input className='hover btn' type="submit" value={t('contactButton')} />
        </form>
    </section>
}

export default Contact