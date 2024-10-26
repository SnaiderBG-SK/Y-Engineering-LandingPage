import React from "react";

/**
 * ImgBackgroundProps
 */
interface ImgBackgroundProps {
    imgSrc: string;
    children?: React.ReactNode;
    limitHeight?: boolean;
}
/**
 * Functional component for the image background view
 * @param param0 
 * @returns 
 */
const ImgBackground: React.FC<ImgBackgroundProps> = ({ imgSrc, children, limitHeight = false}) => {
    return (
        <div
            className='bg-center bg-no-repeat bg-cover'
            style={{ backgroundImage: `url(${imgSrc})`, height: limitHeight ? '40vh' : '55vh', maxHeight: '600px' }}
        >
            {children}
        </div>
    );
}

export default ImgBackground;