import React from 'react';
import IconArrow from '../icons/IconArrow';
import styles from './LinkItem.module.css';

interface IProps {
  href: string;
  text: string;
}

const LinkItem: React.FC<IProps> = ({ href, text }) => {
  return (
    <div>
      <a
        className={styles.link_item_a}
        href={href}
        target='_blank'
        rel='noopener noreferrer'
      >
        <div className={styles.link_item_text_arrow}>
          <div className={styles.link_item_text}>{text}</div>
          <IconArrow />
        </div>
      </a>
    </div>
  );
};

export default LinkItem;
