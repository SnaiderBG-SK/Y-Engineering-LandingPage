import { Col, Row } from "antd";
import { IProjectImage } from "@/interfaces/image";
import Image from "next/image";

import React from "react";
import dynamic from "next/dynamic";

//#region dynamic imports
const AnchorButton = dynamic(() => import("@/components/button/AnchorButton").then((mod) => mod.AnchorButton));
const KeyPoint = dynamic(() => import("@/components/general/KeyPoint").then((mod) => mod.KeyPoint));

/**
 * Interface for AboutCard
 */
interface AboutCardProps {
  aboutImg: IProjectImage;
  aboutTitle: string;
  aboutText: string;
  children?: React.ReactNode;
  keyPointsTexts?: string[];
}
/**
 * Functional component for AboutCard shown in HomePage and AboutUsPage
 * @param param0
 * @returns
 */
export const AboutCard: React.FC<AboutCardProps> = ({
  aboutImg,
  aboutTitle,
  aboutText,
  children,
  keyPointsTexts
}) => {
  return (
    <Row className="mt-10 xl:w-10/12 xl:mx-auto 2xl:w-9/12">
      {/* About Image */}
      <Col span={24} lg={12} className="mb-8">
        <div className="w-10/12 mx-auto text-center overflow-hidden max-h-96 lg:max-h-none">
          <Image
            loading={aboutImg.loading}
            src={aboutImg.src}
            alt={aboutImg.alt}
            width={500}
            height={667}
            style={{ maxWidth: "100%" }}
          />
        </div>
      </Col>
      {/* About Content */}
      <Col span={24} lg={12} className="mx-auto">
        {/* About Subtitle */}
        <div className="w-10/12 mx-auto">
          <span className="main-font font-bold text-tertiary-color text-sm tracking-wider md:text-base">
            {'ABOUT US'}
          </span>
        </div>
        {/* About Title */}
        <div className="w-10/12 mx-auto mt-3">
          <span className="main-font font-semibold text-xl opacity-80 leading-7 md:text-4xl">
            {aboutTitle}
          </span>
        </div>
        {/* About Description */}
        <div className="w-10/12 mx-auto mt-5">
          {/* Check if has flag "Blank" */}
          {
            aboutText && aboutText.includes("[&]") ? (
              /* Separate string by "[blank]" flag and map it */
              aboutText.split("[&]").map((text, index) => (
                <p key={index} className="main-font text-primary-gray-color text-sm opacity-70 leading-5 mt-3 md:text-base md:leading-7 text-justify">
                  {text}
                </p>
              ))
            ) : (
              <p className="main-font text-primary-gray-color text-sm opacity-70 leading-5 mt-3 md:text-base md:leading-7 text-justify">
                {aboutText}
              </p>
            )
          }
        </div>
        {/* Optional Content */}
        {children ? (
          <div className="w-10/12 mx-auto mt-5">{children}</div>
        ) : (
          <>
            {/* About Button */}
            <div className="w-10/12 mx-auto my-10 md:my-16">
              <AnchorButton
                anchorUrl={`/contact-us`}
                buttonText={'CONTACT US'}
              />
            </div>
          </>
        )}
        {/* Key Points */}
        <div className="w-10/12 mx-auto mt-5">
          {
            keyPointsTexts && keyPointsTexts.map((keyPointText, index) => (
              <KeyPoint
                key={index}
                keyPointText={keyPointText}
                iconClassNameColor="text-tertiary-color"
                textClassNameColor="text-primary-gray-color"
              />
            ))
          }
        </div>
      </Col>
    </Row>
  );
};
