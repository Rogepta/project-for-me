import { useState } from 'react';
import SearchInput from '@components/group/searchInput/SearchInput';
import Section from '@components/section/Section';
import SectionListOfFilms from '@sections/section-list-of-films/SectionListOfFilms';
import { MainLayout } from '@components/shared/MainLayout/MainLayout';

const FilmsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    console.log('Ищем: ', searchTerm);
  };

  return (
    <MainLayout>
      <Section colorType='ultralight' paddingSizeType='lg'>
        <SearchInput
          value={searchTerm}
          onChange={handleSearchChange}
          onSearch={handleSearchClick}
        />
        <SectionListOfFilms searchTerm={searchTerm} />
      </Section>
    </MainLayout>
  );
};

export default FilmsPage;
