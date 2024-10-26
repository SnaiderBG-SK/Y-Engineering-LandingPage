import "@/css/pages/about/AboutStyles.css";
{/* FC components */ }
import { AboutCard } from "@/components/card/AboutCard";
{/* Services */ }
import { SkillService } from "@/services/skillService";
import { CounterService } from "@/services/counterService";
import { FAQService } from "@/services/faqService";
import { TeamMembersService } from "@/services/teamMembersService";
import { AboutService } from "@/services/aboutService";
import { HomeService } from "@/services/homeService";
{/* NextJS */ }
import { NextPage } from "next";
import Link from "next/link";
{/* Others */ }
import { Col, Collapse, CollapseProps, Divider, Row } from "antd";
import Image from "next/image";
import { GetMetadata } from "@/utils/Metadata";
import Head from "next/head";
import dynamic from "next/dynamic";

// #region lazy components
const ImgBackground = dynamic(() => import("@/components/general/ImgBackground"));
const TeamMemberImgCard = dynamic(() => import("@/components/card/TeamMemberImgCard").then((module) => ({ default: module.TeamMemberImgCard })));
const ProCard = dynamic(() => import("@/components/card/ProCard").then((module) => ({ default: module.ProCard })));
const PresentationCard = dynamic(() => import("@/components/card/PresentationCard").then((module) => ({ default: module.PresentationCard })));
const SkillCounterIcon = dynamic(() => import("@/components/counter/SkillCounterIcon").then((module) => ({ default: module.SkillCounterIcon })));
const AnchorButton = dynamic(() => import("@/components/button/AnchorButton").then((module) => ({ default: module.AnchorButton })));


//#region services
const { getSkills } = SkillService();
const { getCounters } = CounterService();
const { getFAQs } = FAQService();
const { getTeamMembers } = TeamMembersService();
const { getAboutInformation } = AboutService();
const { getPresentationCardInfo } = HomeService();
//#endregion services

/**
 * Function to fetch all the information needed for the about page
 * @returns 
 */
const getAboutPageInfo = async () => {
  // Create an array of promises with explicit typing
  const [
    aboutSkillsPromise,
    skillsCounterPromise,
    faqQuestionsPromise,
    teamMembersPromise,
    aboutInfoPromise,
    presentCardInfoPromise
  ] = [
      getSkills(["about_card_skill", "aboutPage_aptitudes", "contact_card_point"]),
      getCounters("about"),
      getFAQs(),
      getTeamMembers(),
      getAboutInformation(),
      getPresentationCardInfo()
    ];

  // Execute all promises concurrently
  const [
    aboutSkills,
    skillsCounter,
    faqQuestions,
    teamMembers,
    aboutInfo,
    presentCardInfo
  ] = await Promise.all([
    aboutSkillsPromise,
    skillsCounterPromise,
    faqQuestionsPromise,
    teamMembersPromise,
    aboutInfoPromise,
    presentCardInfoPromise
  ]);

  // Process the faqQuestions
  const faqItems: CollapseProps["items"] = faqQuestions.map((faqQuestion, index) => {
    return {
      key: index,
      label: faqQuestion.question,
      children: <p style={{ paddingLeft: 24 }} className="font-normal">{faqQuestion.answer}</p>,
      className: "font-bold",
    };
  });

  // Return all the results
  return {
    aboutSkills,
    skillsCounter,
    teamMembers,
    aboutInfo,
    presentCardInfo,
    faqItems
  };
};

/**
 * Metadata for AboutUsPage
 */
export const metadata = GetMetadata("Y Engineering - Our Team Story", "About Us", ["About Us", "Our Team", "Our Story", "Innovation", "Empowering Innovation", "Engineering Impact", "Biomedical Projects", "Health", "Technology", "Silicon Valley"]);

/**
 * About Us Page
 * @returns
 */
const AboutUsPage: NextPage = async () => {
  //#region variables
  const { aboutInfo, faqItems, presentCardInfo, skillsCounter, aboutSkills, teamMembers } = await getAboutPageInfo();
  //#endregion variables
  //#region functions

  //#endregion functions
  return (
    <>
      <Head>
        <link rel="preload" href="/img/home/aboutCardImg.webp" fetchPriority="high" as="image" />
        <link rel="preload" href="/img/about/getTouchImg.webp" fetchPriority="low" as="image" />
        <link rel="preload" href="/img/about/aboutBannerImg.webp" fetchPriority="low" as="image" />
        <link rel="preload" href="/img/about/trust-by/forbes_logo.webp" fetchPriority="low" as="image" />
        <link rel="preload" href="/img/about/trust-by/medgadget_logo.webp" fetchPriority="low" as="image" />
        <link rel="preload" href="/img/about/trust-by/sharktank_logo.webp" fetchPriority="low" as="image" />
      </Head>
      {/* About Section */}
      <AboutCard
        aboutImg={{
          src: "/img/home/aboutCardImg.webp",
          alt: "Y Engineering | About Us",
          loading: "lazy",
        }}
        aboutTitle={aboutInfo?.main_card_title || ""}
        aboutText={aboutInfo?.main_card_description || ""}
        keyPointsTexts={aboutSkills.filter((serviceCard) => serviceCard.section === "about_card_skill").map((serviceCard) => serviceCard.title)}
      >
        <div className="pl-8 border-tertiary-color border-4 border-solid border-t-0 border-r-0 border-b-0 md:pl-10">
          <div>
            <span className="font-semibold italic text-base leading-6 md:text-lg md:leading-7">
              {aboutInfo?.main_card_middle_section_title}
            </span>
          </div>
          <div className="mt-7">
            <span className="main-font text-primary-gray-color text-sm opacity-70 leading-7 md:text-base md:leading-7 text-justify">
              {aboutInfo?.main_card_middle_section_description}
            </span>
          </div>
        </div>
      </AboutCard>
      {/* Pros Cards */}
      <Row className="pro-card-container mt-10 lg:mb-20 xl:w-10/12 xl:mx-auto 2xl:w-9/12">
        {aboutSkills
          .filter((serviceCard) => serviceCard.section === "aboutPage_aptitudes")
          .map((proCard, index) => {
            return (
              <ProCard
                key={index}
                index={index}
                iconClassname={proCard.icon_class || ""}
                title={proCard.title}
                description={proCard.description}
              />
            );
          })}
      </Row>
      {/* About Hero */}
      <ImgBackground imgSrc={"/img/about/aboutBannerImg.webp"} limitHeight>
        <div
          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
          className="h-full w-full pt-10 xl:pt-14"
        >
          {/* About Hero Title */}
          <div className="w-11/12 mx-auto text-center md:w-2/3 xl:w-3/4">
            <span
              className="main-font text-white text-2xl font-bold md:text-4xl md:leading-normal lg:text-5xl lg:leading-tight xl:leading-snug"
            // style={{ lineHeight: "4rem" }}
            >
              {aboutInfo?.banner_title}
            </span>
          </div>
          {/* About Hero Text */}
          <div className="w-11/12 mx-auto mt-8 text-center md:w-1/2 lg:w-7/12 ">
            <span className="main-font text-white text-sm opacity-80 md:text-base lg:text-xl">
              {aboutInfo?.banner_subtitle}
            </span>
          </div>
        </div>
      </ImgBackground>
      {/* Presentation Card */}
      <PresentationCard
        cardTitle={presentCardInfo?.contact_card_title!}
        cardKeyPoints={aboutSkills.filter((serviceCard) => serviceCard.section === "contact_card_point")}
        cardImage={{
          src: "/img/about/getTouchImg.webp",
          alt: "yengineering contact",
          loading: "lazy",
        }}
        className="w-10/12 mx-auto lg:w-8/12"
        cardDescription={presentCardInfo?.contact_card_subtitle!}
      />
      {/* Divider */}
      <Divider className="mt-16 border-2" />
      {/* Meet Our Team Title */}
      <Row className="w-11/12 mx-auto mt-10">
        {/* Title */}
        <div className="mx-auto text-center">
          <span className="text-2xl main-font font-bold opacity-80 lg:text-3xl">
            Meet Our Team
          </span>
        </div>
        <div className="mx-auto text-center w-5/6 md:w-full md:mt-1">
          <span className="text-xs text-primary-gray-color font-semibold">
            Discover the experts driving innovation at Y Engineering.
          </span>
        </div>
      </Row>
      {/* Team Section */}
      <Row className="w-11/12 mx-auto mt-10 md:w-full xl:w-9/12">
        {teamMembers.map((teamMember, index) => (
          <TeamMemberImgCard
            key={index}
            teamMember={teamMember}
            className="mx-auto"
          />
        ))}
      </Row>
      {/* Divider */}
      <Divider className="border-2" />
      {/* FAQ */}
      <Row className="w-11/12 mx-auto my-10 h-fit xl:w-10/12 xl:mx-auto 2xl:w-9/12">
        {/* FAQ Title Section */}
        <Col span={24} md={12}>
          {/* FAQ Title */}
          <div className="w-full text-center md:text-left">
            <span className="text-2xl main-font font-bold opacity-90 lg:text-3xl">
              {"Frequently Asked Questions"}
            </span>
          </div>
          {/* FAQ Subtitle */}
          <div className="w-10/12 mx-auto mt-2 text-center md:mx-0 md:text-left md:mt-4">
            <span className="text-xs text-primary-gray-color font-semibold">
              {"Find answers to frequently asked questions about Y Engineering's approach to business, culture, and core values."}
            </span>
          </div>
          {/* CTA Button */}
          <div className="w-full mt-10 text-center md:text-left">
            <AnchorButton
              anchorUrl={'/contact-us'}
              buttonText={"Contact Us"}
            />
          </div>
        </Col>
        {/* FAQ Content Section */}
        <Col span={24} md={12} className="mt-16 md:mt-0">
          <Collapse
            items={faqItems}
            bordered={false}
            defaultActiveKey={["1", "2", "3", "4"]}
          />
        </Col>
      </Row>
      {/* Divider */}
      <Divider className="border-2" />
      {/* Counter Section */}
      <Row className="h-full py-7 w-11/12 mx-auto md:mt-10 lg:px-16 xl:w-10/12 2xl:px-20 2xl:w-9/12">
        {skillsCounter.map((skillCounter, index) => {
          return (
            <Col span={12} md={6} className="mt-8 md:mt-0" key={index}>
              <SkillCounterIcon
                skillName={skillCounter.subtitle}
                skillCountTotal={parseInt(
                  skillCounter.count.replace(/[+%]/g, "")
                )}
                iconClassName={skillCounter.icon_className || "fa-regular fa-face-smile"}
              />
            </Col>
          );
        })}
      </Row>
      {/* Trusted by */}
      <Row className="w-11/12 mx-auto my-20 xl:w-10/12 2xl:w-9/12">
        {/* Brands Section */}
        <Col span={24}>
          {/* Title Section */}
          <div className="mx-auto text-center">
            <span className="text-2xl main-font font-bold opacity-80 lg:text-3xl">
              {"We've Been Covered"}
            </span>
          </div>
          {/* Subtitle Section */}
          <div className="mx-auto text-center w-5/6 md:w-full md:mt-1">
            <span className="text-xs text-primary-gray-color font-semibold">
              {"Some of the companies we have worked with"}
            </span>
          </div>
          {/* Trusted by Logos */}
          <div className="w-full flex justify-center mt-8 mb-20">
            <Link
              href="https://www.youtube.com/watch?v=frLd3orsV6g"
              className="mx-5"
              target="_blank"
            >
              <Image
                height={50}
                width={63}
                src="/img/about/trust-by/sharktank_logo.webp"
                alt="trusted by"
                loading="lazy"
              />
            </Link>
            <Link href="" className="mx-5" target="_blank">
              <Image
                height={50}
                width={188}
                src="/img/about/trust-by/medgadget_logo.webp"
                alt="trusted by"
                loading="lazy"
              />
            </Link>
            <Link href="https://www.forbes.com.mx/30-promesas-2020-soluciones-kenko-salud/" className="mx-5" target="_blank">
              <Image
                height={50}
                width={95}
                src="/img/about/trust-by/forbes_logo.webp"
                alt="trusted by"
                loading="lazy"
              />
            </Link>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default AboutUsPage;