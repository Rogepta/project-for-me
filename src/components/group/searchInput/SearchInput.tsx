import React from 'react';
import styles from './SearchInput.module.css';

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
    <>
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
    </>
  );
};

export default SearchInput;
