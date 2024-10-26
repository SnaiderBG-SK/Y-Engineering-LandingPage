import "@/css/pages/home/HomeStyles.css";
import { Carousel, Col, Divider, Row } from "antd";
import dynamic from "next/dynamic";

//#region components
import { ProCard } from "@/components/card/ProCard";
import { TextCarousel } from "@/components/carousel/TextCarousel";
import BackgroundSlider from "@/components/slider/BackgroundSlider";

const MainNavbar = dynamic(() => import("@/components/navbar/MainNavbar"));

//#region lazy components
const AboutCard = dynamic(() => import("@/components/card/AboutCard").then((module) => ({ default: module.AboutCard })));
const ServiceCard = dynamic(() => import("@/components/card/ServiceCard").then((module) => ({ default: module.ServiceCard })));
const HistoryCard = dynamic(() => import("@/components/card/HistoryCard").then((module) => ({ default: module.HistoryCard })));
const ReferenceCard = dynamic(() => import("@/components/card/ReferenceCard").then((module) => ({ default: module.ReferenceCard })));
const SkillCounter = dynamic(() => import("@/components/counter/SkillCounter").then((module) => ({ default: module.SkillCounter })));
const ContactForm = dynamic(() => import("@/components/form/ContactForm").then((module) => ({ default: module.ContactForm })));
const MainFooter = dynamic(() => import("@/components/footer/MainFooter").then((module) => ({ default: module.MainFooter })));
const PresentationCard = dynamic(() => import("@/components/card/PresentationCard").then((module) => ({ default: module.PresentationCard })));

//#region data
import { specialPresentationCard } from "@/data/img";
import { aboutImg, imgUrls, referenceImg } from "@/data/homePage";

//#region interfaces & services
import { HomeService } from "@/services/homeService";
import { SkillService } from "@/services/skillService";
import { CounterService } from "@/services/counterService";
import { ReviewService } from "@/services/reviewService";
import { IHomeInformation } from "@/interfaces/supabase/home";
import { ISkill } from "@/interfaces/supabase/skill";
import { ICounter } from "@/interfaces/supabase/counter";
import { IReview } from "@/interfaces/supabase/review";
import { IHistoryCard } from "@/interfaces/ICard";
import { NextPage } from "next";
import { GetMetadata } from "@/utils/Metadata";
import Head from "next/head";

//#region services
const { getHomeInformation } = HomeService();
const { getSkills } = SkillService();
const { getCounters } = CounterService();
const { getReviews } = ReviewService();
//#endregion services

/**
 * Function to get home page information
 */
const getHomePageInfo = async () => {
  const homeInfo: IHomeInformation = await getHomeInformation();
  const skillsInfo: ISkill[] = await getSkills(["home_skills", "services", "our_values_section", "contact_card_point"]);
  const skillsCounter: ICounter[] = await getCounters("home");
  const reviews: IReview[] = await getReviews();

  const historyCardInfo: IHistoryCard[] = [
    {
      title: "Our History",
      description: homeInfo?.history,
    },
    {
      title: "Our Team",
      description: homeInfo?.our_team,
    },
    {
      title: "Our Values",
      description: "",
    },
  ];

  return {
    homeInfo,
    skillCardsInfo: skillsInfo,
    skillCounters: skillsCounter,
    reviews,
    historyCardInfo
  };
};

/**
 * Metadata for HomePage
 */
export const metadata = GetMetadata("Y Engineering - Empowering Innovation Engineering Impact", "Home", ["Home", "Home Page", "Y Engineering", "Biomedical Engineering", "Innovation", "Empowering Innovation", "Engineering Impact", "Biomedical Projects", "Health", "Technology", "Silicon Valley"]);

//#region PageComponent
/**
 * HomePage NextPage Component
 * @returns
 */
const HomePage: NextPage = async () => {
  //#region variables
  const { homeInfo, reviews, skillCardsInfo, skillCounters, historyCardInfo } = await getHomePageInfo();
  //#endregion variables

  /**
   * Function to get counter type
   * @param Values
   * @returns string
   */
  const getCounterType = (value: string) => {
    // validate if string has a '+' or a '%' character
    if (value.includes("+")) return "number";
    else if (value.includes("%")) return "percentage";
  };
  //# endregion variables

  return (
    <>
      <Head>
        <link rel="preload" href="/img/home/aboutCardImg.webp" fetchPriority="low" as="image" />
      </Head>
      {/* Img Background Slider */}
      <BackgroundSlider imgUrls={imgUrls}>
        {/* Navbar */}
        <MainNavbar opacity={true} />
        {/* Title & Subtitles */}
        <div className="w-4/5 ml-10 bg-slider-text-container md:w-1/2 md:mt-10percent lg:ml-24 lg:mt-50percent 2xl:ml-60">
          {/* Main Title */}
          <span className="text-gray-600 main-font font-bold leading-tight text-4xl md:text-3xl md:leading-snug lg:text-4xl xl:text-5xl 2xl:text-6xl">
            {homeInfo?.main_title}
          </span>
          {/* Text Carousel */}
          <div className="w-5/6 mt-8 md:w-full xl:w-9/12">
            <TextCarousel carouselMessages={[homeInfo?.main_subtitles!]} />
          </div>
        </div>
      </BackgroundSlider>
      {/* Pros Cards */}
      <Row className="pro-card-container mt-10 h-fit xl:w-10/12 xl:mx-auto 2xl:w-9/12">
        {skillCardsInfo
          .filter((serviceCard) => serviceCard.section === "home_skills")
          .map((skillCard, index) => {
            return (
              <ProCard
                key={index}
                index={index}
                iconClassname={skillCard.icon_class || ""}
                title={skillCard.title}
                description={skillCard.description}
              />
            );
          })}
      </Row>
      {/* About Section */}
      <AboutCard
        aboutImg={aboutImg}
        aboutTitle={homeInfo?.about_us_title!}
        aboutText={homeInfo?.about_us_description!}
      />
      {/* Our Services */}
      <Row className="mt-8 xl:w-10/12 xl:mx-auto 2xl:w-9/12">
        {/* Title */}
        <div className="mx-auto text-center">
          <span className="text-2xl main-font font-bold opacity-80 lg:text-3xl">
            Our Services
          </span>
        </div>
        {/* Divider */}
        <div className="w-11/12 mx-auto">
          <Divider />
        </div>
        {/* Service Cards */}
        <div className="w-11/12 mx-auto">
          <Row className="h-fit">
            {/* Map where section = "services" */}
            {skillCardsInfo
              .filter((serviceCard) => serviceCard.section === "services")
              .map((serviceCard, index) => {
                return (
                  <ServiceCard
                    key={index}
                    index={index + 1}
                    title={serviceCard.title}
                    description={serviceCard.description}
                    serviceUrl={`/${serviceCard.href}`}
                  />
                );
              })
            }
          </Row>
        </div>
      </Row>
      {/* History / Story / Values */}
      <Row className="mt-10 md:mt-48 mb-10 h-fit md:mb-24 xl:w-10/12 xl:mx-auto 2xl:w-9/12">
        {historyCardInfo.map((historyCard, index) => {
          return (
            <HistoryCard
              key={index}
              title={historyCard.title}
              description={index !== 2 ? historyCard.description : skillCardsInfo}
            />
          );
        })}
      </Row>
      {/* References */}
      <Row className="mt-10 md:mb-24 lg:w-11/12 lg:mx-auto lg:mt-28 xl:w-9/12 2xl:w-7/12">
        {/* Image */}
        <Col span={24} md={12} className="">
          <div
            className="bg-center bg-no-repeat bg-cover h-60 rounded-l-lg md:h-full"
            style={{ backgroundImage: `url(${referenceImg.src})` }}
          >
          </div>
        </Col>
        {/* Reference Section */}
        <Col span={24} md={12} className="bg-secondary-color-rgba rounded-r-lg">
          {/* References Title */}
          <div className="text-center mt-8">
            <span className="text-main-color text-xl font-bold tracking-wide">
              Turning Ideas into Reality — What Our Clients Say
            </span>
          </div>
          {/* References Carousel */}
          <Carousel autoplay autoplaySpeed={4000}>
            {reviews.map((review, index) => {
              return (
                <div key={index}>
                  <ReferenceCard reference={review} />
                </div>
              );
            })}
          </Carousel>
        </Col>
      </Row>
      {/* Counter Section */}
      <div
        className="counter-container bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(/img/home/counterBannerImg.webp)`
        }}
      >
        <Row
          className="mt-10 h-full py-7 lg:px-16 2xl:px-20"
          style={{ backgroundColor: "rgb(0,0,0,0.7)" }}
        >
          {skillCounters.map((skillCounter, index) => {
            return (
              <Col span={24} md={8} className="md:mt-10" key={index}>
                <SkillCounter
                  skillName={skillCounter.subtitle}
                  skillCountTotal={parseInt(
                    skillCounter.count.replace(/[+%]/g, "")
                  )}
                  counterType={getCounterType(skillCounter.count)!}
                />
              </Col>
            );
          })}
        </Row>
      </div>
      {/* Special Presentation and Contact Section */}
      <Row className="my-10 w-10/12 mx-auto lg:w-11/12 lg:mt-28 xl:w-9/12 2xl:w-7/12">
        {/* Presentation Card */}
        <PresentationCard
          cardTitle={homeInfo?.contact_card_title!}
          cardImage={specialPresentationCard}
          cardKeyPoints={skillCardsInfo.filter((serviceCard) => serviceCard.section === "contact_card_point")}
          showCTA={true}
          cardDescription={homeInfo?.contact_card_subtitle!}
        />
        {/* Contact Section */}
        <Col span={24} lg={12} className="my-16 lg:pl-5 lg:my-0">
          <ContactForm />
        </Col>
      </Row>
      {/* Footer */}
      <MainFooter />
    </>
  );
};

export default HomePage;