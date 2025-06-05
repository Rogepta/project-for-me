import { useEffect, useState } from 'react';
import styles from './ResizeBlock.module.css';

function ResizeBlock() {
  const [fontSize, setFontSize] = useState(1); // Начальный размер шрифта

  const onChangeFontSize = (type: 'minus' | 'plus') => {
    if (type === 'minus') {
      const newSize = Math.max(1, fontSize - 0.1); // Уменьшаем размер на 1px, не позволяя меньше 1px
      setFontSize(newSize);
    } else {
      const newSize = fontSize + 0.1; // Увеличиваем размер на 1px
      setFontSize(newSize); // Обновляем состояние
    }
  };

  useEffect(() => {
    document.documentElement.style.fontSize = fontSize + 'px';
  }, [fontSize]);

  return (
    <div className={styles.wrapper}>
      <button
        onClick={() => onChangeFontSize('plus')}
        className={styles.button}
      >
        Увеличить шрифт
      </button>
      <button
        onClick={() => onChangeFontSize('minus')}
        className={styles.button}
      >
        Уменьшить шрифт
      </button>
    </div>
  );
}

export default ResizeBlock;
