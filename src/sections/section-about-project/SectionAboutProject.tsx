import Section from '../../components/section/Section';
import styles from './SectionAboutProject.module.css';

const AboutProject = () => {
  const customStylesForBox = {
    color: '#A0A0A0',
    fontSize: '14rem',
    lineHeight: '17rem',
    letterSpacing: '0px',
  };

  const customPaddingsForBox = {
    paddingTop: '9px',
    paddingBottom: '14px',
  };
  return (
    <Section
      colorType='ultralight'
      paddingSizeType='lg'
      title={{
        text: 'О проекте',
        marginBottom: '70px',
      }}
    >
      <div className={styles.about_wrapper}>
        <div className={styles.about_wrapper_text}>
          <h3 className={styles.about_h3}>Дипломный проект включал 5 этапов</h3>
          <p className={styles.about_p}>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div>
          <h3 className={styles.about_h3}>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className={styles.about_p}>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '300px 1fr',
          gap: '14px 0',
        }}
      >
        <div
          className={styles.box}
          style={{
            backgroundColor: '#2BE080',
            ...customPaddingsForBox,
          }}
        >
          1 неделя
        </div>
        <div
          className={styles.box}
          style={{
            backgroundColor: '#F2F2F2',
            ...customPaddingsForBox,
          }}
        >
          4 недели
        </div>

        <div className={styles.box} style={customStylesForBox}>
          Back-end
        </div>
        <div className={styles.box} style={customStylesForBox}>
          Front-end
        </div>
      </div>
    </Section>
  );
};

export default AboutProject;
