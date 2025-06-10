import React from 'react';
import styles from './SearchInput.module.css';
import Container from '../shared/Container';

interface ISearchInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

const SearchInput: React.FC<ISearchInputProps> = ({
  value,
  onChange,
  onSearch,
}) => {
  return (
    <Container>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type='text'
          placeholder='Фильм'
          value={value}
          onChange={onChange}
        />
        <button className={styles.button} onClick={onSearch}>
          Найти
        </button>
      </div>
      <div className={styles.divider} />
    </Container>
  );
};

export default SearchInput;
