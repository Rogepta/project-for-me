import Section from '@components/section/Section';
import styles from './SectionTechnologies.module.css';

const technologies = [
  'HTML',
  'CSS',
  'JS',
  'React',
  'Git',
  'Nest.js',
  'mongoDB',
];

export default function SectionTechnologies() {
  return (
    <Section
      colorType='light'
      paddingSizeType='md'
      title={{ text: 'Технологии', marginBottom: '90px' }}
    >
      <div className={styles.section_technologies_wrapper}>
        <div>
          <h3 className={styles.section_technologies_h3}>7 технологий</h3>
        </div>
        <div>
          <p className={styles.section_technologies_p}>
            На курсе веб-разработки мы освоили технологии, которые применили{' '}
            <br /> в дипломном проекте.
          </p>
        </div>
      </div>
      <div className={styles.section_technologies_technologies}>
        {technologies.map((technology, key) => (
          <div key={key} className={styles.technology}>
            {technology}
          </div>
        ))}
      </div>
    </Section>
  );
}
