import React from 'react';
import Icon_arrow from '../../assets/icons/Icon_arrow.svg';

interface IProps {
  href: string;
  text: string;
}

const LinkItem: React.FC<IProps> = ({ href, text }) => {
  return (
    <div>
      <a
        style={{
          textDecoration: 'none',
          color: '#000000',
        }}
        href={href}
        target='_blank'
        rel='noopener noreferrer'
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1rem solid #E8E8E8',
            paddingBottom: '19px',
            paddingTop: '19px',
          }}
        >
          <div
            style={{
              fontSize: '30rem',
              lineHeight: '50px',
              letterSpacing: '-4%',
            }}
          >
            {text}
          </div>
          <div>
            <img src={Icon_arrow} alt='Icon_arrow' />
          </div>
        </div>
      </a>
    </div>
  );
};

export default LinkItem;
