import React from 'react';
import styles from './Skeleton.module.css';

const Skeleton: React.FC<{ type?: 'card' | 'image' }> = ({ type }) => {
  return (
    <div
      className={type === 'card' ? styles.skeletonCard : styles.skeletonImage}
    >
      {type === 'card' && (
        <>
          <div className={styles.title} />
          <div className={styles.bookmark} />
          <div className={styles.duration} />
        </>
      )}
      {type === 'image' && <div className={styles.image} />}
    </div>
  );
};

export default Skeleton;
