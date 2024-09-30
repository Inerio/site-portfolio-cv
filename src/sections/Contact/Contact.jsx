import styles from '../Contact/ContactStyles.module.css'

function Contact() {
    return <section id='contact' className={styles.container}>
        <h1 className="sectionTitle">Me contacter</h1>
        <form action="https://formspree.io/f/mwpegrwn" method="post">
            <div className="formGroup">
                <label htmlFor="name" hidden>
                    Nom
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nom"
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
                    placeholder="Email"
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
                    placeholder="Message"
                    required></textarea>
            </div>
            <input className='hover btn' type="submit" value="Envoyer" />
        </form>
    </section>
}

export default Contact