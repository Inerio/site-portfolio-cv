import styles from './SkillsStyles.module.css'
import SkillList from '../../../common/SkillList';
import checkMarkIcon from '../../../assets/checkmark-dark.svg'

function Skills() {
    return (
        < section id="skills" className={styles.container} >
            <h1 className='sectionTitle'>Compétences</h1>
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="Java" />
                <SkillList src={checkMarkIcon} skill="C#" />
                <SkillList src={checkMarkIcon} skill="Python" />
                <SkillList src={checkMarkIcon} skill="SQL" />
                <SkillList src={checkMarkIcon} skill="PHP" />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="JavaScript" />
                <SkillList src={checkMarkIcon} skill="GIT" />
                <SkillList src={checkMarkIcon} skill="React" />
                <SkillList src={checkMarkIcon} skill="Angular" />
                <SkillList src={checkMarkIcon} skill="Node" />
            </div>
            <p className={styles.space} />
            <h1 className='sectionTitle'>Outils Maitrisés</h1>
            <div className={styles.toolList}>
                <SkillList src={checkMarkIcon} skill="Visual Studio" />
                <SkillList src={checkMarkIcon} skill="VS code" />
                <SkillList src={checkMarkIcon} skill="IntelliJ IDEA" />
                <SkillList src={checkMarkIcon} skill="Joomla" />
                <SkillList src={checkMarkIcon} skill="Wordpress" />
            </div>
            <hr />
            <div className={styles.toolList}>
                <SkillList src={checkMarkIcon} skill="Qlik" />
                <SkillList src={checkMarkIcon} skill="GitHub" />
                <SkillList src={checkMarkIcon} skill="Power BI" />
                <SkillList src={checkMarkIcon} skill="DBeaver" />
                <SkillList src={checkMarkIcon} skill="AWS" />
            </div>
        </section >
    );
}

export default Skills