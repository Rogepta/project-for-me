import React from 'react';

interface IconArrowProps extends React.SVGProps<SVGSVGElement> {
  width?: string | number;
  height?: string | number;
}

const IconArrow: React.FC<IconArrowProps> = ({
  width = 18,
  height = 17,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 18 17'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M2.60653 16.5241L14.9645 4.14489L14.9432 13.6903H17.2656V0.181818H3.77841L3.7571 2.48295H13.3026L0.944603 14.8622L2.60653 16.5241Z'
      fill='currentColor'
    />
  </svg>
);

export default IconArrow;
