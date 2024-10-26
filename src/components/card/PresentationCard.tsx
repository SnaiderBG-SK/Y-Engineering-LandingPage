import { Col, Row } from "antd";
import React from "react";
import { KeyPoint } from "../general/KeyPoint";
import { Link } from "next-view-transitions";
import { IPresentationCard } from "@/interfaces/ICard";

/**
 * Functional Component that displays a Presentation Card
 * @param param0
 * @returns
 */
export const PresentationCard: React.FC<IPresentationCard> = ({
  cardTitle,
  cardDescription,
  cardKeyPoints,
  cardImage,
  className,
  showCTA = false,
}) => {
  return (
    <Col
      span={24}
      lg={12}
      className={`bg-center bg-no-repeat bg-cover h-fit rounded-xl ${className}`}
      style={{ 
        backgroundImage: `url(${cardImage.src})`, 
        marginTop: "-5rem",
        
      }}
    >
      <Row className="secondary-bg-translucid px-5 py-7 w-full mt-5 rounded-xl md:px-14 md:py-10">
        {/* Title */}
        <Col span={24}>
          <span className="text-black text-2xl font-bold md:text-4xl">
            {cardTitle}
          </span>
        </Col>
        {/* Description */}
        <Col span={24} className="mt-7 mb-7">
          <span className="text-black text-xs md:text-base">
            {cardDescription}
          </span>
        </Col>
        {/* Check List */}
        {cardKeyPoints.map((keypoint, index) => {
          return (
            <KeyPoint
              key={index}
              keyPoint={keypoint}
              keyPointText=""
              iconClassNameColor="text-black"
              textClassNameColor="text-black"
            />
          );
        })}
        {/* CTA Button */}
        {showCTA && (
          <Col span={24} className="mt-8">
            <Link
              className="px-3 py-2 mt-5 bg-black border-black rounded-md h-fit w-fit md:px-4 md:py-3"
              href={`/contact-us`}
            >
              <span className="text-white font-semibold text-sm md:text-base">
                {'CONTACT US'}
              </span>
              <span className="text-white text-xs md:text-sm">
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </span>
            </Link>
          </Col>
        )}
      </Row>
    </Col>
  );
};
