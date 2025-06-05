import Section from '../../components/section/Section';
import styles from './SectionFooter.module.css';

export default function SectionFooter() {
  return (
    <Section colorType='ultralight' paddingSizeType='s'>
      <div>
        <p
          style={{
            borderBottom: '1px solid #E8E8E8',
            paddingBottom: '20px',
            textAlign: 'center',
            color: '#A0A0A0',
            fontSize: '13rem',
            lineHeight: '100%',
            letterSpacing: '0px',
          }}
        >
          Проект DDD x HEAD of Stary Oskol`s IT
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: '20px',
          }}
        >
          <div
            style={{
              fontSize: '13rem',
              lineHeight: '100%',
              letterSpacing: '0px',
            }}
          >
            © 2025
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <div
              style={{
                fontSize: '13rem',
                lineHeight: '100%',
                letterSpacing: '0px',
              }}
            >
              Лачуга.Практикум
            </div>
            <a
              style={{
                textDecoration: 'none',
                color: '#000000',
                fontSize: '13rem',
                lineHeight: '100%',
                letterSpacing: '0px',
              }}
              target='_blank'
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
