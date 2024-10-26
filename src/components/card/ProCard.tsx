import "@/css/card/CardStyles.css";
import { Col } from "antd";

/**
 * interface for the ProCard functional component
 */
interface ProCardProps {
  index: number;
  iconClassname: string;
  title: string;
  description: string;
}
/**
 * Functional component for the card showing the Pro's of the company
 * @param ProCardProps
 * @returns
 */
export const ProCard: React.FC<ProCardProps> = ({
  index,
  iconClassname,
  title,
  description,
}) => {
  return (
    <Col span={24} md={index === 2 ? 24 : 12} lg={8}>
      <div className={`procard-container w-10/12 mx-auto p-5 shadow-2xl mb-7 main-font rounded-lg lg:h-full lg:pb-0 ${index === 2 ? 'md:w-11/12' : ''}`}>
        {/* Icon */}
        <div className="w-full text-center mb-4 mt-3">
          <i
            className={`${iconClassname} procard-icon text-tertiary-color text-5xl opacity-90`}
          ></i>
        </div>
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
      </div>
    </Col>
  );
};
