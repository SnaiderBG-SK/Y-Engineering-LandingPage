"use client";

import "@/css/footer/MainFooter.css";
import { CompanyEmail } from "@/data/social";
import { IContact } from "@/interfaces/contact";
import { IPageLink } from "@/interfaces/routing";
import { Col, Divider, Form, Input, Menu, MenuProps, Row, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Footer } from "antd/es/layout/layout";
import { SocialMediaButton } from "../button/SocialMediaButton";
import { Link } from "next-view-transitions";
import { useForm } from "antd/lib/form/Form";
import MainLogo from "../../../public/img/footerIcon.webp";
import { RuleEmail, RuleRequired } from "@/utils/FormRules";
import React from "react";
import { NotificationProps } from "@/interfaces/INotification";
import Image from "next/image";
import dynamic from "next/dynamic";
const Notification = dynamic(() => import("@/components/notification/Notification").then((module) => ({ default: module.Notification })));

type MenuItem = Required<MenuProps>['items'][number];

/**
 * Functional component for MainFooter
 * @param param0
 * @returns
 */
export const MainFooter: React.FC = () => {
    // #region variables
    const mainFooterAlt = "";
    const [form] = useForm();
    const contactInformation: IContact[] = [
        {
            id: 1,
            title: "890-A Marina Vallarta, Jal. 45140",
            iconClassname: "fa-solid fa-location-dot",
            description: ''
        },
        {
            id: 2,
            title: "+52 33 2832 6914",
            iconClassname: "fa-solid fa-phone",
            description: ''
        },
        {
            id: 3,
            title: CompanyEmail,
            iconClassname: "fa-solid fa-envelope",
            description: ''
        },
    ];
    //#endregion variables
    //#region states
    const [btnDisabled, setBtnDisabled] = React.useState<boolean>(false);
    const [showNotification, setShowNotification] = React.useState<boolean>(false);
    const [notificationProps, setNotificationProps] = React.useState<NotificationProps>(
        {
            message: 'Your contact information has been submitted successfully',
            description: 'We appreciate your interest in Y-Engineering.',
            type: 'success'
        }
    );
    //#endregion states
    /**
     * Function to handle the form submission for the newsletter subscription
     * @param contactInfo 
     */
    const suscribeNewsLetter = async (contactInfo: { email: string }) => {
        setBtnDisabled(true);
        
        // handle error response
        setNotificationProps({
            message: 'Thank you for subscribing to our newsletter.',
            type: 'success',
            description: 'You will be redirected to our newsletter subscription page in a few seconds.'
        });
        // open new tab to redirect to the magic link
        setTimeout(() => {
            window.open(`https://magic.beehiiv.com/v1/7016bc05-b8ef-4847-a26b-84b79f2c0370?email=${contactInfo.email}`);
        }, 3000);

        form.resetFields();
        setShowNotification(true);
        setBtnDisabled(false);
    };
    /**
     * Other pages links
     */
    const otherPages: IPageLink[] = [
        {
            title: 'Home',
            href: "/",
        },
        {
            title: 'About Us',
            href: "/about-us",
        },
        {
            title: 'Contact Us',
            href: "/contact-us",
        },
        {
            title: 'Portfolio',
            href: "/portfolio",
        },
    ];
    /**
     * Menu items for the services
     */
    const items: MenuItem[] = [
        {
            key: 'service-menu',
            label: (
                <div>
                    <i className="fa-solid fa-chevron-right text-white mr-5 icon-secondary-color"></i>
                    <span>{'Services'}</span>
                </div>
            ),
            children: [
                {
                    label: (
                        <Link href={'/services/product-development'} >
                            <i className="fa-solid fa-caret-right mr-3 icon-secondary-color"></i>
                            {'Product Development'}
                        </Link>
                    ),
                    key: "7",
                },
                {
                    label: (
                        <Link href={'/services/pcb-design'} >
                            <i className="fa-solid fa-caret-right mr-3 icon-secondary-color"></i>
                            {'PCB Design and Assembly'}
                        </Link>
                    ),
                    key: "8",
                },
                {
                    label: (
                        <Link href={'/services/mechanical-engineering'} >
                            <i className="fa-solid fa-caret-right mr-3 icon-secondary-color"></i>
                            {'Mechanical Engineering'}
                        </Link>
                    ),
                    key: "9",
                },
                {
                    label: (
                        <Link href={'/services/prototype-development'} >
                            <i className="fa-solid fa-caret-right mr-3 icon-secondary-color"></i>
                            {'Prototype Development'}
                        </Link>
                    ),
                    key: "10",
                },
                {
                    label: (
                        <Link href={'/services/design-for-manufacturability'} >
                            <i className="fa-solid fa-caret-right mr-3 icon-secondary-color"></i>
                            {'Design For Manufacturability'}
                        </Link>
                    ),
                    key: "11",
                },
                {
                    label: (
                        <Link href={'/services/firmware-development'} >
                            <i className="fa-solid fa-caret-right mr-3 icon-secondary-color"></i>
                            {'Firmware Development'}
                        </Link>
                    ),
                    key: "12",
                }
            ]
        }
    ]

    //# endregion variables
    return (
        <>
            {/* Notification */}
            <Notification
                message={notificationProps.message}
                description={notificationProps.description}
                showNotification={showNotification}
                setShowNotification={setShowNotification}
                type={notificationProps.type}
            />
            {/* Footer */}
            <Footer className="bg-main-color p-5">
                <Row className="p-0 w-11/12 lg:pt-10 lg:pl-8 xl:w-11/12 xl:mx-auto 2xl:w-10/12">
                    {/* Footer Img & Footer text */}
                    <Col span={24} md={12} lg={7}>
                        {/* Logo */}
                        <div className="w-fit h-fit mx-auto md:ml-0">
                            <Image
                                src={MainLogo.src}
                                alt={mainFooterAlt}
                                width={256}
                                height={256}
                                className="w-full h-1/3 max-w-64"
                            />
                        </div>
                        {/* Footer Text */}
                        <div className="p-0 pr-5 mt-4 w-full md:w-10/12 lg:w-4/5 lg:pr-0 xl:w-11/12">
                            <span
                                style={{ color: "#A1A1A1" }}
                                className="text-left font-light text-sm leading-6"
                            >
                                {'Y Engineering: Transforming ideas into market-ready innovations with expertise in design, prototyping, and manufacturing.'}
                            </span>
                        </div>
                    </Col>
                    {/* Contact Section */}
                    <Col span={24} md={12} lg={6} className="mt-4">
                        <div>
                            <span className="text-white font-semibold text-lg">
                                {'Contact Us'}
                            </span>
                        </div>
                        <div className="lg:w-11/12">
                            {contactInformation.map((contact) => {
                                return (
                                    <div key={contact.id} className="flex items-center mt-4">
                                        <i
                                            className={`${contact.iconClassname} text-white mr-5 icon-secondary-color`}
                                        ></i>
                                        <span className="text-white">{contact.title}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </Col>
                    {/* Other Pages Section */}
                    <Col span={24} md={12} lg={4} className="mt-5">
                        <div>
                            <span className="text-white font-semibold text-lg">
                                {'Other Pages'}
                            </span>
                        </div>
                        <div>
                            {otherPages.map((pageLink, index) => {
                                return (
                                    <div key={index} className="flex items-center mt-4">
                                        <i className="fa-solid fa-chevron-right text-white mr-5 icon-secondary-color"></i>
                                        <Link
                                            href={`${pageLink.href}`}
                                        >
                                            <span className="text-white">{pageLink.title}</span>
                                        </Link>
                                    </div>
                                );
                            })}
                            <Menu 
                                items={items}
                                className="bg-none"
                                mode="inline"
                                itemIcon={<></>}
                            />
                        </div>
                    </Col>
                    {/* Newsletter */}
                    <Col span={24} md={12} lg={7} className="mt-5">
                        {/* Newsletter Call to Action */}
                        <div>
                            <span className="text-white font-semibold text-lg">
                                {'Newsletter'}
                            </span>
                        </div>
                        <div className="mt-4 h-10 flex">
                            <div className="w-7/12">
                                <Form
                                    className="mx-auto"
                                    name="contact-form"
                                    layout="vertical"
                                    onFinish={suscribeNewsLetter}
                                    validateTrigger="onSubmit"
                                    form={form}
                                >
                                    <Form.Item
                                        name={'email'}
                                        className="m-0"
                                        validateFirst={false}
                                        rules={[
                                            RuleRequired(`Please enter your Email Address`),
                                            RuleEmail('Please enter a valid email address'),
                                        ]}
                                    >
                                        <Input
                                            type="text"
                                            placeholder={'example@gmail.com'}
                                            className="rounded-r-none h-10"
                                        />
                                    </Form.Item>
                                </Form>
                            </div>
                            <div className="w-5/12">
                                <button
                                    type="submit"
                                    className="bg-secondary-color-rgba text-white font-semibold tracking-widest h-10 p-2 rounded-r-lg flex items-center"
                                    onClick={form.submit}
                                    disabled={btnDisabled}
                                >
                                    {'SUBSCRIBE'}
                                    <Spin
                                        size="small"
                                        className={`ml-2 ${btnDisabled ? 'block' : 'hidden'}`}
                                        indicator={<LoadingOutlined spin className="text-white mr-5" />}
                                    />
                                </button>
                            </div>
                        </div>
                        {/* Get the latest news & updates */}
                        <div className="mt-4">
                            <span style={{ color: "#A1A1A1" }} className="text-sm">
                                {'Get the latest news & updates'}
                            </span>
                        </div>
                        {/* Social Media */}
                        <div className="mt-7">
                            <SocialMediaButton socialMedia="reddit" className="mr-3" />
                            <SocialMediaButton socialMedia="linkedin" className="mr-3" />
                            <SocialMediaButton socialMedia="youtube" className="mr-3" />
                        </div>
                    </Col>
                    {/* Divider */}
                    <Divider
                        style={{ borderColor: "#A0AABA2B", borderWidth: "1px" }}
                        className="mt-14"
                    />
                    {/* Copy Right */}
                    <Col span={24} className="mt-5 md:mt-0">
                        <div className="text-center">
                            <span style={{ color: "#A1A1A1" }} className="text-sm">
                                {'© 2024 Y Engineering. All Rights Reserved.'}
                            </span>
                        </div>
                    </Col>
                </Row>
            </Footer>
        </>
    );
};
