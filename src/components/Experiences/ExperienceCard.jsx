import styles from './styles/ExperiencesStyles.module.css'

function ExperienceCard({
    src,
    link,
    h3,
    p,
    setToggleExperience,
    setSelectedExperience,
    details,
}) {
    const handleClick = (e) => {
        e.preventDefault()
        // Remember current scroll position so we can restore it when leaving details
        sessionStorage.setItem('exp:scrollY', String(window.scrollY || 0))

        setToggleExperience(true)
        setSelectedExperience({ link, title: h3, description: p, details })
    }

    return (
        <div className={styles.card} onClick={handleClick}>
            <div className={styles.logoFrame}>
                <img className={styles.logo} src={src} alt={`${h3} logo`} />
            </div>
            <h3 className={styles.title}>{h3}</h3>
            <p className={styles.subtitle}>{p}</p>
        </div>
    )
}

export default ExperienceCard
