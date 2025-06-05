import Section from '../../components/section/Section';
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
      <div
        style={{
          textAlign: 'center',
          display: 'grid',
          gap: '100rem',
          paddingBottom: '100px',
        }}
      >
        <div>
          <h3
            style={{
              fontSize: '50rem',
              lineHeight: '58rem',
              letterSpacing: '-4%',
              color: '#000000',
            }}
          >
            7 технологий
          </h3>
        </div>
        <div>
          <p
            style={{
              fontSize: '14rem',
              lineHeight: '20rem',
              letterSpacing: '-4%',
              color: '#000000',
            }}
          >
            На курсе веб-разработки мы освоили технологии, которые применили{' '}
            <br /> в дипломном проекте.
          </p>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        {technologies.map((technology, key) => (
          <div key={key} className={styles.technology}>
            {technology}
          </div>
        ))}
      </div>
    </Section>
  );
}
