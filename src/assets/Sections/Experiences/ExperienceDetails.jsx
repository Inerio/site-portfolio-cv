import { useThemeIcons } from '../../Hooks/useThemeIcons';

function ExperienceDetails({ experience, setToggleExperience }) {
    if (!experience) return null;
    const icons = useThemeIcons();

    return (
        <div>
            <h2>{experience.title}</h2>
            <p>{experience.description}</p>
            <p>{experience.details}</p>
            <a
                href={experience.link}
                target="_blank">
                Aller vers {experience.title}
            </a>
            <div onClick={() => setToggleExperience(false)}>
                <img
                    src={icons.back}
                    alt="Back icon" />
            </div>
        </div>
    );
}

export default ExperienceDetails