import Section from '../../components/section/Section';
import styles from './SectionAboutDeveloper.module.css';
import me from '../../assets/photo/me.jpg';
import LinkItem from '../../components/LinkItem/LinkItem';

export default function SectionAboutDeveloper() {
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
          <h3
            style={{
              fontSize: '50px',
              lineHeight: '58px',
              letterSpacing: '-4%',
              color: '#000000',
              marginBottom: '18px',
            }}
          >
            Даниил
          </h3>
          <h4
            style={{
              fontSize: '18rem',
              lineHeight: '20rem',
              letterSpacing: '0px',
              color: '#000000',
              marginBottom: '26px',
              fontWeight: '500',
            }}
          >
            Фронтенд-разработчик, 26 лет
          </h4>
          <p
            style={{
              fontSize: '14rem',
              lineHeight: '22rem',
              letterSpacing: '0px',
              color: '#000000',
              paddingBottom: '100px',
            }}
          >
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
              href='https://github.com/Rogepta'
            >
              GitHub
            </a>
          </div>
        </div>
        <div>
          <img
            style={{}}
            className={styles.image}
            src={me}
            alt='frontend-developer'
          />
        </div>
      </div>
      <p
        style={{
          fontSize: '18rem',
          lineHeight: '20rem',
          letterSpacing: '0px',
          color: '#A0A0A0',
          paddingBottom: '50px',
        }}
      >
        Портфолио
      </p>
      <div>
        <LinkItem href='#' text='Статичный сайт' />
        <LinkItem href='#' text='Адаптивный сайт' />
        <LinkItem href='#' text='Одностраничное приложение' />
      </div>
    </Section>
  );
}
