import text__COLOR_landing from '../../assets/icons/text__COLOR_landing-logo.png';
import Section from '../../components/section/Section';
import styles from './SectionIntroduce.module.css';

export default function Introduce() {
  return (
    <Section colorType='dark' paddingSizeType='sm'>
      <div className={styles.section__content}>
        <div>
          <h2 className={styles.introduce_h2}>
            Учебный проект разработчика <br /> лачуги <br /> Веб-разработки.
          </h2>
          <p className={styles.introduce_p}>
            Листайте ниже, чтобы узнать больше про этот <br /> проект и его
            создателя.
          </p>

          <button className={styles.introduce_button} type='button'>
            Узнать больше
          </button>
        </div>

        <div>
          <img src={text__COLOR_landing} alt='web' />
        </div>
      </div>
    </Section>
  );
}
