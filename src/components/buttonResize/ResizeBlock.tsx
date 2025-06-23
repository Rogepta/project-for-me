import { useEffect, useState } from 'react';
import styles from './ResizeBlock.module.css';

function ResizeBlock() {
  const [fontSize, setFontSize] = useState(1); 

  const onChangeFontSize = (type: 'minus' | 'plus') => {
    if (type === 'minus') {
      const newSize = Math.max(1, fontSize - 0.1);
      setFontSize(newSize);
    } else {
      const newSize = fontSize + 0.1; 
      setFontSize(newSize); 
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
