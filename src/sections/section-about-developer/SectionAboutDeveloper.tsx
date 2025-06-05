import Section from '../../components/section/Section';
import styles from './SectionAboutDeveloper.module.css';
import me from '../../assets/photo/me.jpg';
import LinkItem from '../../components/LinkItem/LinkItem';

export default function SectionAboutDeveloper() {
  const linkItems = [
    { href: '#', text: 'Статичный сайт' },
    { href: '#', text: 'Адаптивный сайт' },
    { href: '#', text: 'Одностраничное приложение' },
  ];

  return (
    <Section
      colorType='ultralight'
      paddingSizeType='lg'
      title={{
        text: 'Разработчик',
        marginBottom: '70px',
      }}
    >
      <div style={{ display: 'flex', gap: '270px', paddingBottom: '100px' }}>
        <div>
          <h3 className={styles.section_about_developer_h3}>Даниил</h3>
          <h4 className={styles.section_about_developer_h4}>
            Фронтенд-разработчик, 26 лет
          </h4>
          <p className={styles.section_about_developer_p}>
            Я родился в Старом Осколе, позже переехал в Санкт-Петербург, затем в
            Москву. Сейчас опять живу в своем родном городе. Разработкой начал
            заниматься по совету друга. Мне нравится делать то, где можно сразу
            увидеть результат. Занимаюсь спортом, хочу купить квартиру и
            пожениться.
          </p>
          <div>
            <a
              style={{ textDecoration: 'none', color: '#000000' }}
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/Rogepta'
            >
              GitHub
            </a>
          </div>
        </div>
        <div>
          <img className={styles.image} src={me} alt='frontend-developer' />
        </div>
      </div>
      <p className={styles.section_about_developer_portfolio}>Портфолио</p>

      {linkItems.map((item, index) => (
        <LinkItem key={index} href={item.href} text={item.text} />
      ))}
    </Section>
  );
}
