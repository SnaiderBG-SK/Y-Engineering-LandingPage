"use client";

import { ProjectCard } from "@/components/card/ProjectCard";
import { IProject } from "@/interfaces/supabase/project";
import { Button, Col, Row } from "antd";
import { Link } from "next-view-transitions";
import React from "react";
import PortfolioModal from "@/components/modal/PortfolioModal";
/**
 * Interface for PortfolioContent
 */
interface PortfolioContentProps {
    projects: IProject[]
}
/**
 * Functional component for the Portfolio Page Content
 * @param {PortfolioContentProps} { projects }
 * @returns 
 */
const PortfolioContent: React.FC<PortfolioContentProps> = ({ projects }) => {
    const [openModal, setOpenModal] = React.useState<boolean>(false);
    return (
        <>
            {/* Portfolio Modal */}
            <PortfolioModal open={openModal} setOpenModal={setOpenModal}/>
            {/* Page Title */}
            <Row className="mt-16">
                {/* Title */}
                <Col span={24} className="text-center mt-3">
                    <span className="text-pages-title-color text-4xl font-bold">
                        {"Our Projects"}
                    </span>
                </Col>
                {/* Subtitle */}
                <Col span={24} className="text-center mt-2">
                    <span className="font-normal text-pages-title-color">
                        {"Some of our recent projects"}
                    </span>
                </Col>
                {/* Download Btn */}
                <Col span={24} className="text-center mt-8">
                    <Button type="primary" onClick={() => setOpenModal(true)}>
                        {"Download Portfolio"}
                    </Button>
                </Col>
            </Row>
            {/* Project Card */}
            <Row className="mt-16 px-7 mx-auto w-11/12  md:px-auto 2xl:w-10/12" justify={"center"}>
                {projects.map((project, index) => {
                    return (
                        <ProjectCard
                            key={index}
                            projectInformation={project}
                            className="w-full md:w-11/12"
                            setOpenModal={setOpenModal}
                        />
                    );
                })}
            </Row>
            {/* View All btn */}
            {
                projects.length > 6 && (
                    <Row className="my-3">
                        <Col span={24} className="text-center">
                            <button className="border border-solid border-main-color text-main-color rounded-md py-2 px-4">
                                {"View All"}
                            </button>
                        </Col>
                    </Row>
                )
            }
            {/* Contact Banner */}
            <Row className="my-16">
                <Col span={24} className="">
                    <div className="border-2 border-solid border-main-color w-11/12 mx-auto grid grid-cols-12 xl:w-10/12">
                        {/* Banner Text */}
                        <div className="col-span-12 p-5 md:py-10 md:col-span-7 md:pl-14 lg:col-span-8">
                            {/* Title */}
                            <div>
                                <span className="main-font text-main-color text-base lg:text-3xl font-bold">
                                    {'Transforming Ideas into Innovations'}
                                </span>
                            </div>
                            {/* Subtitle */}
                            <div className="mt-1 lg:mt-3">
                                <span className="main-font text-main-color text-xs lg:text-xl font-base">
                                    {"Contact us today to discuss your project or collaboration."}
                                </span>
                            </div>
                        </div>
                        {/* Banner Btns */}
                        <div className="col-span-12 px-5 pb-5 flex items-center md:py-10 md:col-span-5 md:pl-8 lg:col-span-4">
                            <Link href={`/contact-us`} className="border border-solid mr-3 lg:mr-5 border-main-color bg-main-color text-white rounded-md py-2 px-4 hover:text-white">
                                {"Contact"}
                            </Link>
                            <Link href={`/about-us`} className="border border-solid border-main-color text-main-color rounded-md py-2 px-4">
                                {"Learn More"}
                            </Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
};

export default PortfolioContent;