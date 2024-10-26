import { AnchorButton } from "@/components/button/AnchorButton";
import { ServiceSection } from "@/components/card/ServiceSection";
import { serviceService } from "@/services/serviceService";
import { GetMetadata } from "@/utils/Metadata";
import { Image } from "antd";

/**
 * Interface for ServicePageProps
 * @returns 
 */
interface ServicePageProps {
    params: {
        serviceName: string;
    };
}
//#region services
const { getSingleService, getServiceSections } = serviceService();
//#endregion services
/**
 * Array of valid service names
 */
const validServiceNames = ['product-development', 'pcb-design', 'firmware-development', 'mechanical-engineering', 'prototype-development', 'design-for-manufacturability'];
/**
 * Function to get single service data
 * @param serviceName 
 * @returns {Promise<IService>}
 */
const getSingleServiceData = async (serviceName: string) => {
    if (!validServiceNames.includes(serviceName)) return {
        service: null,
        sections: []
    };

    const serviceData = await getSingleService(serviceName);
    const servicesSections = await getServiceSections(serviceData.id);
    return {
        service: serviceData,
        sections: servicesSections
    };
};

/**
 * Metadata for HomePage
 */
export const metadata = GetMetadata("Y Engineering - Empowering Innovation Engineering Impact", "Services", ["Y Engineering", "Services", "Product Development", "PCB Design", "Firmware Development", "Mechanical Engineering", "Prototype Development", "Design For Manufacturability"]);

/**
 * Functional Component for showing each service page information
 * @param params  
 * @returns 
 */
const ServicePage: React.FC<ServicePageProps> = async ({ params }) => {
    const { service, sections } = await getSingleServiceData(params.serviceName);
    return (
        <>
            {
                service ? (
                    <>
                        {/* Header Section */}
                        <section className="mt-10 xl:w-10/12 xl:mx-auto">
                            {/* Title */}
                            <div className="w-full text-center">
                                <span className="text-3xl tracking-wide">{service.service_name}</span>
                            </div>
                            {/* Subtitle */}
                            <div className="w-5/6 mx-auto text-center mt-2 lg:w-4/6 2xl:w-1/2">
                                <span className="text-base font-extralight">{service.service_subtitle}</span>
                            </div>
                        </section>
                        {/* Body Section */}
                        <section className="grid grid-cols-12 mt-16 mx-auto w-11/12 xl:w-9/12">
                            {/* Text Body */}
                            <div className="col-span-12 lg:col-span-7">
                                <div className="">
                                    <div>
                                        <span>
                                            {service.service_description}
                                        </span>
                                    </div>
                                    {
                                        sections.map((section, index) => {
                                            //return only first two sections
                                            if (index > 1) return;
                                            return (
                                                <ServiceSection
                                                    key={`${section.section_title}-${section}-${index}`}
                                                    sectionInfo={section}
                                                />
                                            );
                                        })
                                    }
                                </div>
                            </div>
                            {/* Images */}
                            <div className="col-span-12 lg:col-span-5">
                                <div className="w-full lg:w-11/12 lg:mx-auto">
                                    <Image
                                        src={`/img/services/${service.img_src}`}
                                        alt={service.service_name}
                                        className="max-w-full h-auto mx-auto"
                                        preview={false}
                                    />
                                </div>
                            </div>
                        </section>
                        {/* 2nd Body Section */}
                        {
                            service.second_img_src && service.second_img_src !== "" ? (
                                <section className="grid grid-cols-12 mt-10 w-11/12 mx-auto xl:w-9/12">
                                    {/* Images */}
                                    <div className="col-span-12 content-evenly lg:col-span-5">
                                        <div className="w-full lg:w-11/12 lg:mx-auto">
                                            <Image
                                                src={`/img/services/${service.second_img_src}`}
                                                alt={service.service_name}
                                                className="max-w-full h-auto mx-auto"
                                                preview={false}
                                            />
                                        </div>
                                    </div>
                                    {/* Content */}
                                    <div className="col-span-12 lg:col-span-7">
                                        {
                                            sections.map((section, index) => {
                                                if (index < 1) return;
                                                return (
                                                    <ServiceSection
                                                        key={`${section.section_title}-${section}-${index}`}
                                                        sectionInfo={section}
                                                    />
                                                );
                                            })
                                        }
                                    </div>
                                </section>
                            ) : (
                                sections.map((section, index) => {
                                    if (index < 1) return;
                                    return (
                                        <ServiceSection
                                            key={`${section.section_title}-${section}-${index}`}
                                            sectionInfo={section}
                                        />
                                    );
                                })
                            )
                        }
                        {/* Footer Section */}
                        <section className="mt-10 w-11/12 mx-auto xl:w-9/12">
                            <div className="text-center">
                                <span className="text-lg font-semibold underline tracking-wide">
                                    {"Why Choose Y Engineering?"}
                                </span>
                            </div>
                            <div className="mt-5 mb-10 text-center w-full">
                                <span className="">
                                    {service.service_footer}
                                </span>
                            </div>
                        </section>
                    </>
                ) : (
                    <div className="w-full h-fit py-40">
                        <div className="mx-auto w-fit">
                            <h1>Service not found</h1>
                        </div>
                        <div className="mx-auto w-fit mt-5">
                            <AnchorButton
                                anchorUrl={"/"}
                                buttonText={"Go to Homepage"}
                            />
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default ServicePage;