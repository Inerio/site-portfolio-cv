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
        setToggleExperience(true)
        setSelectedExperience({ link, title: h3, description: p, details })
    }

    return (
        <div className={styles.experienceCard} onClick={handleClick}>
            <img className="hover" src={src} alt={`${h3} logo`} />
            <h3>{h3}</h3>
            <p>{p}</p>
        </div>
    )
}

export default ExperienceCard
