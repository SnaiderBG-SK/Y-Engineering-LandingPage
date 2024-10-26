import { IServiceSection } from "@/interfaces/supabase/service";
import { FC } from "react";

/**
 * Service Section Props
 */
interface ServiceSectionProps {
    sectionInfo: IServiceSection;
};
/**
 * Functional Component for Service Section
 * @param {ServiceSectionProps} { sectionInfo }
 * @returns 
 */
export const ServiceSection: FC<ServiceSectionProps> = ({ sectionInfo }) => {
    return (
        <div className="mt-8">
            <div>
                {
                    // in case of multiple lines, split the title and description
                    sectionInfo.section_title.includes('[/n]') ? (
                        <>
                            <div>
                                <span className="font-semibold">{sectionInfo.section_title.substring(0, sectionInfo.section_title.indexOf('['))}</span>
                            </div>
                            <div>
                                <span>{sectionInfo.section_title.substring(sectionInfo.section_title.indexOf('[') + 4)}</span>
                            </div>
                        </>
                    )
                        // in case of single line, display the title
                        : (
                            <span className="font-semibold">
                                {sectionInfo.section_title}
                            </span>
                        )
                }
            </div>
            <div className="pl-5 mt-5">
                {
                    sectionInfo.is_list ? (
                        <ul className="list-disc">
                            {
                                sectionInfo.section_description.split('[/n]').map((item, index) => (
                                    <li key={`${sectionInfo.section_title}-${item}-${index}`}>
                                        <span>
                                            {
                                                item.includes(':') ? (
                                                    <>
                                                        <strong>
                                                            {item.substring(0, item.indexOf(':') + 1)}
                                                        </strong>
                                                        {item.substring(item.indexOf(':') + 1)}
                                                    </>
                                                ) : <>{item}</>
                                            }
                                        </span>
                                    </li>
                                ))
                            }
                        </ul>
                    ) : (
                        <span>
                            {sectionInfo.section_description}
                        </span>
                    )
                }
            </div>
        </div>
    );
};