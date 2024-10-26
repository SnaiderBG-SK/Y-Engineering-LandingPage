"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

// Library used: react-intersection-observer

/**
 * interface for the skill counter component
 */
interface SkillCounterIconProps {
  skillName: string;
  skillCountTotal: number;
  iconClassName: string;
}
/**
 * Functional component for the skill counter that goes from 0 to the total count of the skill
 * @param param0
 * @returns
 */
export const SkillCounterIcon: React.FC<SkillCounterIconProps> = ({
  skillName,
  skillCountTotal,
  iconClassName,
}) => {
  const [skillCount, setSkillCount] = useState(0);
  const counterInterval =
    skillCountTotal < 100
      ? 30
      : skillCountTotal < 300
      ? 20
      : skillCountTotal < 500
      ? 10
      : 5;
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when it comes into view
    threshold: 0.5, // 50% of the component is visible
  });

  /**
   * useEffect to increment the skill count by 1 every 100ms
   */
  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setSkillCount((prevCount) => {
          if (prevCount < skillCountTotal) {
            return prevCount + 1;
          }
          return skillCountTotal;
        });
      }, counterInterval);

      return () => clearInterval(interval);
    }
  }, [skillCountTotal, inView, counterInterval]);

  return (
    <div ref={ref} className="text-center">
      <div className="mb-2">
        <span className="text-4xl text-main-color">
          <i className={iconClassName}></i>
        </span>
      </div>
      <div>
        <span className="text-3xl font-semibold">{skillCount}</span>
        <span className="text-main-color text-xl ml-1">
          <i className="fa-solid fa-plus"></i>
        </span>
      </div>
      <div className="text-primary-gray-color text-base font-normal mt-1">
        {skillName}
      </div>
    </div>
  );
};
