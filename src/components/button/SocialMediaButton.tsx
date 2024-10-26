import { LinkedInUrl, RedditUrl, YoutubeUrl } from "@/data/social";

/**
 * Interface for SocialMediaButton
 */
interface SocialMediaButtonProps {
    socialMedia: 'reddit' | 'linkedin' | 'youtube';
    className?: string;
    dark?: boolean;
};
/**
 * Functional component for SocialMediaButton
 * @param param0 
 * @returns 
 */
export const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({ socialMedia, className, dark = false }) => {
    const socialMediaIcon = socialMedia === 'reddit'
        ? 'fa-reddit'
        : socialMedia === 'linkedin'
            ? 'fa-linkedin-in'
            : 'fa-youtube';

    const href = socialMedia === 'reddit'
        ? RedditUrl
        : socialMedia === 'linkedin'
            ? LinkedInUrl
            : YoutubeUrl
    return (
        <a
            className={`${dark ? 'bg-main-color' : 'bg-secondary-color'} p-3 ${className}`}
            style={{ borderRadius: "100%" }}
            href={href}
            target="_blank"
        >
            <span className="text-lg">
                <i className={`fa-brands ${socialMediaIcon} ${dark ? 'text-secondary-color' : 'text-main-color'}`}></i>
            </span>
        </a>
    );
};