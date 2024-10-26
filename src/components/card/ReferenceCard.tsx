import { IReview } from "@/interfaces/supabase/review";
import Image from "next/image";

/**
 * Interface for the reference card in the home page reference carousel
 */
interface ReferenceCardProps {
  reference: IReview;
}
/**
 * Functional component for the reference card in the home page reference carousel
 * @param param0 
 * @returns 
 */
export const ReferenceCard: React.FC<ReferenceCardProps> = ({ reference }) => {
  return (
    <>
      {/* User Icon */}
      <div className="text-center mt-8">
        {reference.user_img ? (
          <Image
            src={reference.user_img}
            alt={reference.name}
            width={64}
            height={64}
            loading={"lazy"}
            className="w-16 h-16 rounded-full mx-auto"
          />
        ) : (
          <i className="fas fa-user-circle text-main-color text-6xl"></i>
        )}
      </div>
      {/* User Name */}
      <div className="text-center">
        <span className="text-main-color text-lg font-semibold">
          {reference.name}
        </span>
      </div>
      {/* User Position */}
      <div className="w-9/12 mx-auto text-center">
        <span className="text-main-color text-xs opacity-70">
          {reference.position}
        </span>
      </div>
      {/* User Review */}
      <div className="w-10/12 mx-auto mt-5 text-center mb-20">
        <span className="text-main-color text-sm leading-6 italic">
          {`"${reference.review}"`}
        </span>
      </div>
    </>
  );
};
