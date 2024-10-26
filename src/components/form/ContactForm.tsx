"use client";

import { Col, Divider, Form, Input, Row, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import React from "react";
import { useForm } from "antd/lib/form/Form";
import {
  RuleEmail,
  RuleNoSpecialCharacters,
  RuleRequired,
} from "@/utils/FormRules";
import { SendEmail } from "@/services/emailService";
import dynamic from "next/dynamic";
import { IContactFormValues } from "@/interfaces/contact";
import { ContactService } from "@/services/contactService";
import { NotificationProps } from "@/interfaces/INotification";
const Notification = dynamic(() => import("@/components/notification/Notification").then((module) => ({ default: module.Notification })));
/**
 * Functional component that renders a contact form
 * @returns
 */
export const ContactForm: React.FC = () => {
  //# region variables
  const [form] = useForm();
  const [btnDisabled, setBtnDisabled] = React.useState<boolean>(false);
  const [showNotification, setShowNotification] = React.useState<boolean>(false);
  const [notificationProps, setNotificationProps] = React.useState<NotificationProps>(
    {
      message: 'Your contact information has been submitted successfully',
      description: 'We appreciate your interest in Y-Engineering. Remember to check the spam folder if you do not receive the email.',
      type: 'success'
    }
  );
  const { PostContactInformation } = ContactService();
  //# endregion variables

  //# region functions
  /**
     * Function to handle the form submission
     * @param formValues 
     */
  const onFinish = async (formValues: IContactFormValues) => {
    setBtnDisabled(true);
    // save the contact information to the database
    const contactResponse = await PostContactInformation(formValues);
    if (contactResponse?.status !== 200) {
      setNotificationProps({ 
        message: 'An error occurred while submitting your contact information', 
        type: 'error', 
        description: 'Please try again later' 
      });
      setBtnDisabled(false);
      setTimeout(() => {
        setShowNotification(true);
      }, 10);
      return;
    }
    // send the email
    const newsLetterResponse = await SendEmail(
      {
        email: formValues.email,
        name: formValues.name,
        lastname: formValues.lastname,
        template: 'ContactTemplate'
      }
    );
    if (newsLetterResponse?.status !== 200) {
      setNotificationProps({ message: 'An error occurred while submitting your contact information', type: 'error', description: 'Please try again later' });
      setBtnDisabled(false);

      setTimeout(() => {
        setShowNotification(true);
      }, 10);
      return;
    }

    form.resetFields();
    setShowNotification(true);
    setBtnDisabled(false);
  };
  //# endregion functions

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
      {/* FormContent */}
      <div className="w-11/12">
        <div className="mx-auto">
          <span className="font-bold text-xl">{'Your Details'}</span>
        </div>
        <div className="mx-auto">
          <span className="text-sm text-primary-gray-color">
            {'Let us know how to get back to you'}
          </span>
        </div>
        <div className="mx-auto" style={{ marginTop: "-15px" }}>
          <Divider />
        </div>
        <Form
          className="mx-auto"
          name="contact-form"
          layout="vertical"
          validateTrigger="onSubmit"
          onFinish={onFinish}
          form={form}
        >
          {/* Fullname */}
          <Row gutter={16}>
            {/* First Name */}
            <Col span={12}>
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
                  className="font-normal border-none bg-gray-100 hover:bg-gray-100"
                  placeholder={'"E.g. John"'}
                />
              </Form.Item>
            </Col>
            {/* Last Name */}
            <Col span={12}>
              {/* Lastname */}
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
          </Row>
          {/* Email */}
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
          {/* Message */}
          <Form.Item
            label={'Comments / Questions'}
            name="message"
            className="font-semibold"
            rules={[
              RuleRequired(`Please enter your message`),
              RuleNoSpecialCharacters('Special characters are not allowed'),
            ]}
          >
            <Input.TextArea
              placeholder={'Type your message here'}
              rows={4}
              className="font-normal border-none bg-gray-100 hover:bg-gray-100"
              autoSize={{ minRows: 4, maxRows: 8 }}
            />
          </Form.Item>
          {/* Submit button */}
          <Row justify="end">
            {
              btnDisabled && (
                <Spin size="large" indicator={<LoadingOutlined spin className="text-tertiary-color mr-5" />} />
              )
            }
            <button
              onClick={form.submit}
              disabled={btnDisabled}
              className="border-none px-3 py-2 text-white rounded-md bg-tertiary-color font-bold"
            >
              {'SEND MESSAGE'}
            </button>
          </Row>
        </Form>
      </div>
    </>
  );
};
