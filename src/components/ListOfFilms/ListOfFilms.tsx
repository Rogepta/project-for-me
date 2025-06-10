import Section from '../section/Section';
import FilmCard from '../FilmCard/FilmCard';

const ListOfFilms = () => {
  return (
    <Section colorType='ultralight' paddingSizeType='sm'>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
      </div>
    </Section>
  );
};

export default ListOfFilms;
