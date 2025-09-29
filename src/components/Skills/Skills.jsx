import styles from './styles/SkillsStyles.module.css'
import SkillList from './SkillList';
import { useThemeIcons } from '../../hooks/useThemeIcons';
import { useTranslation } from '../../hooks/useTranslation';

function Skills() {
    //t for translationKey
    const t = useTranslation()

    const icons = useThemeIcons();

    return < section id="skills" className={styles.container} >
        <h1 className='sectionTitle'>{t('skillTitle')}</h1>
        <div className={styles.skillList}>
            <SkillList src={icons.checkmark} skill="Java" />
            <SkillList src={icons.checkmark} skill="C#" />
            <SkillList src={icons.checkmark} skill="Python" />
            <SkillList src={icons.checkmark} skill="SQL" />
            <SkillList src={icons.checkmark} skill="PHP" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={icons.checkmark} skill="TypeScript" />
            <SkillList src={icons.checkmark} skill="GIT" />
            <SkillList src={icons.checkmark} skill="Angular" />
            <SkillList src={icons.checkmark} skill="React" />
            <SkillList src={icons.checkmark} skill="Spring" />
        </div>
        <p className={styles.space} />
        <h1 className='sectionTitle'>{t('toolsTitle')}</h1>
        <div className={styles.toolList}>
            <SkillList src={icons.checkmark} skill="Visual Studio" />
            <SkillList src={icons.checkmark} skill="VS code" />
            <SkillList src={icons.checkmark} skill="IntelliJ IDEA" />
            <SkillList src={icons.checkmark} skill="Joomla" />
            <SkillList src={icons.checkmark} skill="Wordpress" />
        </div>
        <hr />
        <div className={styles.toolList}>
            <SkillList src={icons.checkmark} skill="Qlik" />
            <SkillList src={icons.checkmark} skill="GitAction" />
            <SkillList src={icons.checkmark} skill="Power BI" />
            <SkillList src={icons.checkmark} skill="DBeaver" />
            <SkillList src={icons.checkmark} skill="AWS" />
        </div>
    </section >;
}

export default Skills