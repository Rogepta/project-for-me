import { useState } from 'react';
import HeaderAUTH from '../components/HeaderAUTH/HeaderAUTH';
import SearchInput from '../components/searchInput/SearchInput';
import Section from '../components/section/Section';
import ListOfFilms from '../components/ListOfFilms/ListOfFilms';

const Films: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    console.log('Ищем: ', searchTerm);
  };

  return (
    <>
      <HeaderAUTH />
      <Section colorType='ultralight' paddingSizeType='lg'>
        <SearchInput
          value={searchTerm}
          onChange={handleSearchChange}
          onSearch={handleSearchClick}
        />
        <ListOfFilms />
      </Section>
    </>
  );
};

export default Films;
