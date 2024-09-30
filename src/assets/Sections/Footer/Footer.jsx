import styles from "./FooterStyles.module.css"

function Footer() {
    return <section id="footer" className={styles.container}>
        <p>&copy; 2024 Julien De Araujo. <br />
            Tous droits résevés.
        </p>
    </section>

}

export default Footer