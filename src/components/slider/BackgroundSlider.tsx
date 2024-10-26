'use client';
import React, { useState, useEffect } from 'react';
import '@/css/slider/BackgroundSliderStyles.css';

/**
 * BackgroundSliderProps
 */
interface BackgroundSliderProps {
  imgUrls: string[];
  children?: React.ReactNode;
};
/**
 * Functional component for the background slider
 * @param param0 
 * @returns 
 */
const BackgroundSlider: React.FC<BackgroundSliderProps> = ({ imgUrls, children }) => {
  //# region state
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  //# endregion state

  // #region useEffect
  /**
   * useEffect for the background slider
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex(prevIndex =>
        (prevIndex + 1) % imgUrls.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [imgUrls]);

  /**
   * useEffect for the window resize event
   */
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // #endregion useEffect

  return (
    <div
      className="bg-slider"
      style={{
        backgroundImage: `${windowWidth && windowWidth >= 768 ? `url(${imgUrls[currentImgIndex]}` : 'none'})`,
        backgroundSize: currentImgIndex === 1 ? "60% auto" : currentImgIndex === 2 ? "70% auto" : "80% auto",
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundSlider;