import { LinkedInUrl } from "@/data/social";
import { ITeamMember } from "@/interfaces/supabase/teamMember";
import { Col } from "antd";
import Link from "next/link";
import React from "react";

interface TeamMemberImgCardProps {
    teamMember: ITeamMember;
    className?: string;
};
/**
 * Functional component for TeamMemberImgCard shown in TeamPage
 */
export const TeamMemberImgCard: React.FC<TeamMemberImgCardProps> = ({
    teamMember,
    className
}) => {
    //#region variables
    //#endregion variables
    return (
        <Col span={24} md={12} lg={8} xl={7} className="p-2 mx-auto">
            <div
                className={`w-full bg-center bg-no-repeat bg-cover h-96 rounded-xl team-member-img-card ${className}`}
                style={{ backgroundImage: `url(${teamMember.img_src || 'img/notFoundImg.webp'})` }}
            >
                <div className="h-full w-full secondary-bg-translucid flex flex-col justify-center">
                    {/* Name */}
                    <div className="mx-auto text-center">
                        <span className="font-bold text-2xl text-white">
                            {teamMember.fullname}
                        </span>
                    </div>
                    {/* Role */}
                    <div className="mx-auto text-center mt-3">
                        <span className="font-semibold text-xl text-white">
                            {teamMember.position}
                        </span>
                    </div>
                    {/* Description */}
                    <div className="w-10/12 mx-auto text-center mt-3">
                        <span className="text-base text-white">
                            {teamMember.quote}
                        </span>
                    </div>
                    {/* Social Media */}
                    <div className="w-10/12 mx-auto mt-5">
                        <div className="flex justify-center">
                            {/* Linkedln */}
                            <div className="flex justify-center">
                                <div className="w-6 h-6 mx-2">
                                    <Link href={teamMember.linkedin_url ?? LinkedInUrl} target="_blank">
                                        <i className="fa-brands fa-linkedin text-3xl text-white"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    );
};