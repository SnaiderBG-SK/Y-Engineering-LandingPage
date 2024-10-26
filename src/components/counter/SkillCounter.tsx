"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

// Library used: react-intersection-observer

/**
 * interface for the skill counter component
 */
interface SkillCounterProps {
  skillName: string;
  skillCountTotal: number;
  counterType: 'number' | 'percentage';
}
/**
 * Functional component for the skill counter that goes from 0 to the total count of the skill
 * @param param0
 * @returns
 */
export const SkillCounter: React.FC<SkillCounterProps> = ({
  skillName,
  skillCountTotal,
  counterType
}) => {
  const [skillCount, setSkillCount] = useState(0);
  const counterInterval =
    skillCountTotal < 100
      ? 10
      : skillCountTotal < 300
      ? 10
      : skillCountTotal < 500
      ? 5
      : 0.1;
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
          if (prevCount === 200) return skillCountTotal;
          else if (prevCount < skillCountTotal) {
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
      <span className="text-secondary-color text-7xl font-semibold">
        {`${skillCount}${counterType === 'percentage' ? '%' : '+'}`}
      </span>
      <div className="text-white text-lg font-semibold">{skillName}</div>
    </div>
  );
};
