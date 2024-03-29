import * as React from 'react';

interface MailProps extends IconBaseProps {
  width?: string | number;
  height?: string | number;
}

const Mail = ({ className, width = 22, height = 19 }: MailProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 22 19"
    >
      <g stroke="currentColor" strokeMiterlimit="10" clipPath="url(#a)">
        <path d="M21.189 6.55 11.453.537a.866.866 0 0 0-.91 0L.811 6.55a.845.845 0 0 0-.401.716v10.196c0 .466.376.843.843.843h19.494a.843.843 0 0 0 .843-.843V7.266a.84.84 0 0 0-.401-.716Z" />
        <path d="m.709 18.1 9.617-6.619a1.19 1.19 0 0 1 1.348 0l9.638 6.632" />
        <path
          strokeLinecap="round"
          d="m.48 6.935 7.286 4.559M21.41 6.935l-7.283 4.559M4.977 7.307h12.046"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="currentColor" d="M0 0h22v18.715H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Mail;
