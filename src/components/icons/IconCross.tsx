import React from 'react';

interface IconCrossProps extends React.SVGProps<SVGSVGElement> {
  width?: string | number;
  height?: string | number;
}

const IconCross: React.FC<IconCrossProps> = ({
  width = 24,
  height = 24,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect width='24' height='24' rx='12' fill='#F9F9F9' />
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M12 13.0605L14.6516 15.7121L15.7122 14.6514L13.0607 11.9999L15.7121 9.34844L14.6514 8.28778L12 10.9392L9.34826 8.28748L8.2876 9.34814L10.9393 11.9999L8.28748 14.6517L9.34814 15.7124L12 13.0605Z'
      fill='black'
    />
  </svg>
);

export default IconCross;
