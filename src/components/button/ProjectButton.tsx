import { Link } from "next-view-transitions";

/**
 * Interface for the project button
 */
interface ProjectButtonProps {
    type: "primary" | "secondary" | "tertiary";
    buttonText?: string;
    children?: React.ReactNode;
    callBack?: () => void;
    border?: boolean;
    isLink?: boolean;
    href?: string;
    rounded?: boolean;
}
/**
 * Functional component for the project button
 * @param param0 
 * @returns 
 */
export const ProjectButton: React.FC<ProjectButtonProps> = ({ type, buttonText, children, callBack, border = true, isLink, href, rounded }) => {
    /**
     * Function to get the button background color
     * @param type 
     * @returns 
     */
    const getButtonBg = (type: string) => {
        switch (type) {
            case "primary":
                return "bg-secondary-color";
            case "secondary":
                return "bg-white";
            case "tertiary":
                return "bg-main-color";
        }
    }
    /**
     * Function to get the border class
     * @param border 
     * @returns 
     */
    const getBorderClass = (border: boolean) => {
        switch (border) {
            case true:
                return "border border-solid border-main-color";
            case false:
                return "border-none";
        }
    }
    /**
     * Function to get the text color for the button
     * @param type 
     * @returns 
     */
    const getTextColor = (type: string) => {
        switch (type) {
            case "primary":
                return "text-white";
            case "secondary":
                return "text-main-color";
            default:
                return "text-white";
        }
    }

    const borderClass = getBorderClass(border || false);
    const bgColorClass = getButtonBg(type);
    const textColorClass = getTextColor(type);
    return (
        <>
            {
                isLink
                    ? <Link
                        className={`px-3 py-2 ${rounded ? 'rounded' : ''} ${borderClass} ${bgColorClass}`}
                        href={href!}
                    >
                        {
                            children
                                ? children
                                : <span className={textColorClass}>{buttonText}</span>
                        }
                    </Link>
                    : <button
                        className={`px-3 py-2 ${rounded ? 'rounded' : ''} ${borderClass} ${bgColorClass}`}
                        onClick={callBack}
                    >
                        {
                            children
                                ? children
                                : <span className={textColorClass}>{buttonText}</span>
                        }
                    </button>
            }
        </>
    );
};