import * as React from 'react';

type ArrowLeftProps = {
    width?: string | number;
    height?: string | number;
}
const ArrowLeft = ({ width = 8, height = 14 }: ArrowLeftProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 8 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"
                  d="M7 1 1.126 6.733c-.168.164-.168.372 0 .536L7 13"/>
        </svg>
    )
};

export default ArrowLeft;
