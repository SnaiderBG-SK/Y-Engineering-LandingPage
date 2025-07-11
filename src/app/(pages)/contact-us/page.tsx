import { ContactForm } from "@/components/form/ContactForm";
import { Col, Divider, Row } from "antd";
import { NextPage } from "next";

import { contactListItems } from "@/data/contact";
import { ContactListItem } from "@/components/general/ContactListItem";
import { GetMetadata } from "@/utils/Metadata";
import { SocialMediaButton } from "@/components/button/SocialMediaButton";

/**
 * Metadata for ContactPage
 */
export const metadata = GetMetadata("Y Engineering - Let's Get In Touch", "Contact Us", ["Contact", "Contact Us", "Get In Touch", "Biomedical Projects", "Health", "Technology", "Silicon Valley"]);

/**
 * Component for ContactPage
 * @returns
 */
const ContactPage: NextPage = () => {
  return (
    <>
      <div className="my-20 w-10/12 mx-auto lg:w-11/12 lg:mt-28 xl:w-9/12 2xl:w-8/12">
        <Row>
          {/* Contact Form */}
          <Col span={24} md={12}>
            <ContactForm />
          </Col>
          {/* Contact Information */}
          <Col span={24} md={12}>
            <div className="mt-20 w-11/12 md:mt-0 mx-auto">
              {/* Contact Subtitle */}
              <div>
                <span className="text-main-color font-semibold tracking-wide">
                  {'Contact Us'}
                </span>
              </div>
              {/* Contact Title */}
              <div className="mt-2 md:mt-4">
                <span className="font-bold text-2xl md:text-4xl text-pages-title-color">
                  {'Let\'s Get In Touch'}
                </span>
              </div>
              {/* Contact Description */}
              <div className="mt-2 md:mt-4">
                <span className="text-sm text-primary-gray-color">
                  {'If you would like to get in touch about a specific product, you can go here and include details.'}
                </span>
              </div>
              {/* Contact Information */}
              <Row className="mt-8">
                <Col span={24} md={18} xl={12}>
                  {
                    contactListItems.map((item, index) => (
                      <ContactListItem 
                        key={index}
                        index={index}
                        iconClassName={item.iconClassname}
                        title={item.title}
                        description={item.description}
                      />
                    ))
                  }
                </Col>
              </Row>
              {/* Divider */}
              <Divider className="mt-16" />
              {/* Follow Social Media */}
              <div className="mt-2">
                <span className="font-semibold text-lg">
                  Follow Us On Social Media
                </span>
              </div>
              {/* Social Media Icons */}
              <div className="mt-8">
                <SocialMediaButton socialMedia="linkedin" className="mr-3" dark />
                <SocialMediaButton socialMedia="youtube" className="mr-3" dark />
                <SocialMediaButton socialMedia="reddit" className="mr-3" dark />
              </div>
            </div>
          </Col>
        </Row>
      </div>
      {/* Location Map */}
      <div className="mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.506172455079!2d-75.4715087097528!3d39.79563641985125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6e3884a8e729f%3A0x1a48a86853c3106a!2s2803%20Philadelphia%20Pike%20b%201324%2C%20Claymont%2C%20DE%2019703%2C%20EE.%20UU.!5e0!3m2!1ses!2smx!4v1744681561015!5m2!1ses!2smx"
          className="w-full"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default ContactPage;
