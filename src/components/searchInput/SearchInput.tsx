import React from 'react';
import styles from './SearchInput.module.css';
import Container from '../shared/Container';

interface ISearchInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<ISearchInputProps> = ({ value, onChange }) => {
  return (
    <Container>
      <input
        type='text'
        placeholder='Фильм'
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </Container>
  );
};

export default SearchInput;
