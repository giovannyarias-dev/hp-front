import React from 'react';
import svgs from '../helpers/svgs';

type IconProps = {
  svg: string, 
  classes: string
};

const Icon = ({ svg, classes }: IconProps): JSX.Element => {
  const svgRender = svgs[svg] || svgs.default;
  return (
    <svg
      viewBox={ svgRender.viewBox }
      className={ classes }
      xmlns="http://www.w3.org/2000/svg"
    >
      { svgRender.svg }
    </svg>
  );
};
export default Icon;
