"use client";

import React from "react";
import { Button, Col, Form, Input, Row, Spin } from "antd";
import { SendOutlined, LoadingOutlined } from "@ant-design/icons";
import { useForm } from "antd/lib/form/Form";
import {
    RuleEmail,
    RuleNoSpecialCharacters,
    RuleRequired,
} from "@/utils/FormRules";
import { SendEmail } from "@/services/emailService";
import dynamic from "next/dynamic";
import { NotificationProps } from "@/interfaces/INotification";
const Notification = dynamic(() => import("@/components/notification/Notification").then((module) => ({ default: module.Notification })));
/**
 * Interface for contactFormValues
 */
interface contactFormValues {
    name: string;
    lastname: string;
    email: string;
}
/**
 * Interface for PortfolioContactFormProps
 */
interface PortfolioContactFormProps {
    setShowModal?: (showModal: boolean) => void;
}

/**
 * Functional component that renders a contact form for the portfolio page modal
 * @returns 
 */
const PortfolioContactForm: React.FC<PortfolioContactFormProps> = ({ setShowModal = (mode: boolean) => { } }) => {
    //# region variables
    const [form] = useForm();
    const [btnDisabled, setBtnDisabled] = React.useState<boolean>(false);
    const [showNotification, setShowNotification] = React.useState<boolean>(false);
    const [notificationProps, setNotificationProps] = React.useState<NotificationProps>(
        { 
          message: 'Our portfolio has been sent successfully.',
          description: 'We appreciate your interest in Y-Engineering. Remember to check the spam folder if you do not receive the email.', 
          type: 'success' }
      );
    //# endregion variables

    //# region functions
    /**
     * Function to handle the form submission
     * @param formValues 
     */
    const onFinish = async (formValues: contactFormValues) => {
        setBtnDisabled(true);
        const newsLetterResponse = await SendEmail(
            {
                email: formValues.email,
                name: formValues.name,
                lastname: formValues.lastname,
                template: 'PortfolioTemplate'
            }
        );
        if (newsLetterResponse?.status === 200) {
            form.resetFields();
        } else {
            setNotificationProps({ message: 'An error occurred while submitting your information', type: 'error', description: 'Please try again later' });
        }
        // show the notification
        setTimeout(() => {
            setShowNotification(true);
        }, 10);
        setBtnDisabled(false);
        setShowModal(false);
    };

    //# endregion functions
    return (
        <>
            {/* Notification */}
            <Notification 
                message={notificationProps.message}
                description={notificationProps.description}
                showNotification={showNotification}
                type={notificationProps.type}
                setShowNotification={setShowNotification}
            />
            {/* Contact Form */}
            <Form
                className="mx-auto"
                name="portfolio-contact-form"
                layout="vertical"
                validateTrigger="onSubmit"
                onFinish={onFinish}
                form={form}
            >
                <Row gutter={8}>
                    {/* First Name */}
                    <Col xs={24} md={12} lg={6}>
                        <Form.Item
                            label={'First Name'}
                            name="name"
                            className="font-semibold"
                            rules={[
                                RuleRequired(`Please enter your First Name`),
                                RuleNoSpecialCharacters('Special characters are not allowed'),
                            ]}
                        >
                            <Input
                                className="font-normal border-none bg-white"
                                placeholder={'"E.g. John"'}
                            />
                        </Form.Item>
                    </Col>
                    {/* Last Name */}
                    <Col xs={24} md={12} lg={6}>
                        <Form.Item
                            label={'Last Name'}
                            name="lastname"
                            className="font-semibold"
                            rules={[
                                RuleRequired(`Please enter your Last Name`),
                                RuleNoSpecialCharacters('Special characters are not allowed'),
                            ]}
                        >
                            <Input
                                className="font-normal border-none bg-gray-100 hover:bg-gray-100"
                                placeholder={'"E.g. Doe"'}
                            />
                        </Form.Item>
                    </Col>
                    {/* Email */}
                    <Col xs={24} lg={7}>
                        <Form.Item
                            label={'Email Address'}
                            name="email"
                            className="font-semibold"
                            rules={[
                                RuleRequired(`Please enter your Email Address`),
                                RuleEmail('Please enter a valid email address'),
                            ]}
                        >
                            <Input
                                className="font-normal border-none bg-gray-100 hover:bg-gray-100"
                                placeholder={'example@gmail.com'}
                            />
                        </Form.Item>
                    </Col>
                    {/* Submit Btn */}
                    <Col xs={24} lg={3} className="flex items-center justify-end lg:justify-normal">
                        <Button className="flex items-center mt-2" onClick={form.submit} disabled={btnDisabled}>
                            <span className="font-semibold">{'Submit'}</span>
                            <SendOutlined className="font-semibold" />
                        </Button>
                    </Col>
                </Row>
                <Row className="justify-center">
                    {
                        btnDisabled && (
                            <Spin size="large" indicator={<LoadingOutlined spin style={{ color: '#FFF' }} />} />
                        )
                    }
                </Row>
            </Form>
        </>
    )
};

export default PortfolioContactForm;