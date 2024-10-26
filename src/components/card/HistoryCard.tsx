import { ISkill } from "@/interfaces/supabase/skill";
import { Col } from "antd";
/**
 * Interface for the history / story / values card
 */
interface HistoryCardProps {
  title: string;
  description: string | ISkill[];
}
/**
 * Functional component for the history / story / values card
 * @param param0
 * @returns
 */
export const HistoryCard: React.FC<HistoryCardProps> = ({
  title,
  description,
}) => {
  return (
    <Col span={24} md={8} className="mt-8 md:mt-0">
      <div className="w-11/12 mx-auto mt-5 shadow-md rounded-lg py-7 h-full">
        <div className="text-center">
          <span
            style={{ fontSize: "1.4rem" }}
            className="main-font font-bold opacity-90 lg:text-3xl"
          >
            {title}
          </span>
        </div>
        <div className="w-11/12 mx-auto text-center mt-3">
          <p className="text-primary-gray-color text-sm opacity-70 leading-8 md:text-base md:leading-8">
            {Array.isArray(description)
              ? description
                  .filter(
                    (serviceCard) =>
                      serviceCard.section === "our_values_section"
                  )
                  .map((serviceCard) => (
                    <span key={serviceCard.id} className="block mt-5">
                      {serviceCard.title}
                    </span>
                  ))
              : description}
          </p>
        </div>
      </div>
    </Col>
  );
};
