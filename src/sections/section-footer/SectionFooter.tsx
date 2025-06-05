import Section from '../../components/section/Section';
import styles from './SectionFooter.module.css';

export default function SectionFooter() {
  return (
    <Section colorType='ultralight' paddingSizeType='s'>
      <div>
        <p className={styles.section_footer_p}>
          Проект DDD x HEAD of Stary Oskol`s IT
        </p>
        <div className={styles.section_footer_wrapper_bottom}>
          <div className={styles.section_footer_year_production}>© 2025</div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <div className={styles.section_footer_year_production}>
              Лачуга.Практикум
            </div>
            <a
              className={styles.section_footer_a}
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/Rogepta'
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
