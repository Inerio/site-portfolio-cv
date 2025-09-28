function SkillList({ src, skill }) {
    return (
        <span>
            <img src={src} alt="" aria-hidden="true" />
            <p>{skill}</p>
        </span>
    )
}

export default SkillList
