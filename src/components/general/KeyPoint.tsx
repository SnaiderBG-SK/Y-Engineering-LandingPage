import { ISkill } from "@/interfaces/supabase/skill";
import { Col, Row } from "antd";

/**
 * Interface for KeyPoint
 */
interface KeyPointProps {
  keyPoint?: ISkill;
  keyPointText: string;
  iconClassNameColor?: string;
  textClassNameColor?: string;
}
/**
 * Functional component for KeyPoint Text
 * @param param0
 * @returns
 */
export const KeyPoint: React.FC<KeyPointProps> = ({
  keyPoint,
  keyPointText,
  iconClassNameColor,
  textClassNameColor,
}) => {
  return (
    <Row key={0} className="mb-4 w-full">
      {/* Check Icon */}
      <Col span={2} className="my-auto">
        <span className={`w-full ${iconClassNameColor}`}>
          <i className="fa-solid fa-check"></i>
        </span>
      </Col>
      {/* Key Point Text */}
      <Col span={22} className="mt-auto opacity-90">
        <span className={`${textClassNameColor} text-sm md:text-base`}>
          {keyPoint ? (
            <>
              <strong>{`${keyPoint.title}: `}</strong>
              {keyPoint.description}
            </>
          ) : (
            keyPointText
          )}
        </span>
      </Col>
    </Row>
  );
};
