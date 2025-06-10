import { useState } from 'react';
import HeaderAUTH from '../components/HeaderAUTH/HeaderAUTH';
import SearchInput from '../components/searchInput/SearchInput';

const Films: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <HeaderAUTH />
      <SearchInput value={searchTerm} onChange={handleSearchChange} />
    </>
  );
};

export default Films;
