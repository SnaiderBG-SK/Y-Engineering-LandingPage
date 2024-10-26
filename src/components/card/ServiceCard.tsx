import "@/css/card/CardStyles.css";
import { Col } from "antd";
import { Link } from "next-view-transitions";

/**
 * interface for the ServiceCard component
 */
interface ServiceCardProps {
  index: number;
  title: string;
  description: string;
  serviceUrl: string;
}
/**
 * Functional component for the ServiceCard component
 * @param ProCardProps
 * @returns
 */
export const ServiceCard: React.FC<ServiceCardProps> = ({
  index,
  title,
  description,
  serviceUrl,
}) => {
  //text-secondary-color
  return (
    <Col span={24} md={index % 3 === 0 ? 24 : 12} className="md:mt-10" lg={8}>
      <div className={`procard-container w-10/12 mx-auto p-5 shadow-2xl mb-7 main-font rounded-lg md:h-full md:pb-0 ${index % 3 === 0 ? 'md:w-11/12' : ''}`}>
        <Link href={serviceUrl}>
          {/* Title */}
          <div className="w-full text-center mb-4">
            <span className="procard-title font-semibold text-lg opacity-70">
              {title}
            </span>
          </div>
          {/* Description */}
          <div className="w-full text-center mb-3">
            <span className="procard-description text-sm font-normal text-gray-400">
              {description}
            </span>
          </div>
          {/* Readmore Button */}
          <div className="w-full text-center">
            <span className="service-card-cta-btn text-tertiary-color main-font tracking-wider font-semibold">
              READ MORE
              <i className="fa-solid fa-arrow-right ml-3"></i>
            </span>
          </div>
        </Link>
      </div>
    </Col>
  );
};
