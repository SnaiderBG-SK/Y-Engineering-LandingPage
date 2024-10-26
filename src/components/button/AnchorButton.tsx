import { Link } from "next-view-transitions";

/**
 * interface for the AnchorButton component
 */
interface AnchorButtonProps {
    anchorUrl: string;
    buttonText: string;
};
/**
 * Functional component for the Call to Action anchor button
 * @param param0 
 * @returns 
 */
export const AnchorButton: React.FC<AnchorButtonProps> = ({
    anchorUrl,
    buttonText
}) => {
  return (
    <Link
      href={anchorUrl}
      className="bg-main-color text-white font-semibold px-8 py-4 rounded-md tracking-widest hover:text-white"
    >
      {buttonText}
    </Link>
  );
};
