"use client";

import "@/css/card/ModalContact.css";
import { Col } from "antd";
import { IProject } from "@/interfaces/supabase/project";
import React from "react";
import Image from "next/image";

/**
 * Interface for ProjectCard
 */
interface ProjectCardProps {
  projectInformation: IProject;
  className?: string;
  setOpenModal: (value: boolean) => void;
}
/**
 * Functional component for ProjectCard
 * @param param0
 * @returns
 */
export const ProjectCard: React.FC<ProjectCardProps> = ({
  projectInformation,
  className,
  setOpenModal
}) => {
  //#region variables
  const [imgSrc, setImgSrc] = React.useState<string>(projectInformation.main_img_src || '/img/notFoundImg.webp');
  //#endregion varibles

  /**
   * Function to handle the modal show
   */
  const handleShowModal = () => {
    setOpenModal(true);
  };

  return (
    <>
      {/* Project Card */}
      <Col span={24} md={12} lg={8} xl={6} className="mb-8 mx-auto">
        <div
          className={`mx-auto shadow-2xl pb-5 rounded-xl h-full ${className}`}
        >
          {/* Project Img */}
          <div className="mx-auto w-10/12 text-center md:w-full">
            <Image
              className="max-w-full rounded-t-xl"
              width={500}
              height={500}
              loading="lazy"
              src={imgSrc}
              alt={projectInformation.title}
              onError={() => setImgSrc('/img/notFoundImg.webp')}
            />
          </div>
          {/* Project Title */}
          <div className="mx-auto mt-3 w-10/12 md:w-10/12">
            <span className="text-xl font-bold">{projectInformation.title}</span>
          </div>
          {/* Project Description */}
          <div className="mx-auto mt-1 w-10/12 md:w-10/12">
            <span
              className="text-base block overflow-hidden overflow-ellipsis whitespace-normal h-24 md:whitespace-pre-line"
              style={{ 
                WebkitLineClamp: 4, 
                display: "-webkit-box",
                textOverflow: "ellipsis",
                WebkitBoxOrient: "vertical",
              }}
            >
              {projectInformation.description}
            </span>
          </div>
          {/* Project Tags */}
          <div className="mx-auto mt-3 flex flex-wrap w-10/12">
            {/* Get tags by separating tag_list by comma */}
            {
              projectInformation.tag_list.split(",").map((tag, index) => {
                return (
                  <div 
                    key={`projectId-${projectInformation.id}-index-${index}`} 
                    className={'mb-1'}
                  >
                    <div className="bg-main-color px-2 mr-2 h-fit rounded-sm" style={{ width: 'max-content' }}>
                      <span
                        className="text-sm text-white"
                      >
                        {tag}
                      </span>
                    </div>
                  </div>
                );
              })
            }
          </div>
          {/* View Content */}
          <div className="mx-auto my-5 w-10/12 cursor-pointer md:w-10/12" onClick={handleShowModal}>
            <span className="text-sm font-semibold underline text-main-color">
              {'View Project'}
            </span>
            <span className="text-sm font-semibold text-main-color ml-2">
              <i className="fa-solid fa-chevron-right"></i>
            </span>
          </div>
        </div>
      </Col>
    </>
  );
};
