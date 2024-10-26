import { LinkedInUrl, YoutubeUrl } from "@/data/social";

//#region constants
const linkedinLogo = 'https://y-engineering.netlify.app/img/icons/icons8-linkedin-50.png';
const youtubeLogo = 'https://y-engineering.netlify.app/img/icons/icons8-youtube-50.png';
const portfolioUrl = 'https://yengineering.io/pdf/Y-Engineering-Portfolio-(2024).pdf';

/**
 * Service to handle Email Templates Rendering
 * @returns 
 */
export const EmailTemplatesService = () => {
    /**
     * Function to render the Portfolio Case Email Template
     * @returns 
     */
    const RenderPortfolioTemplate = () => {
        return `
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Y-Engineering Email Contact</title>
                </head>
                <body>
                    ${PortfolioTemplate()}
                </body>
                </html>
        `;
    };
    /**
     * Function to render the Contact Form Email Template
     * @returns 
     */
    const RenderContactFormTemplate = () => {
        return `
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Y-Engineering Email Contact</title>
                </head>
                <body>
                    ${ContactFormTemplate()}
                </body>
                </html>
        `;
    };
    /**
     * Function to render the NewsLetter Email Template
     * @returns 
     */
    const RenderNewsLetterTemplate = () => {
        return `
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Y-Engineering Email Contact</title>
                </head>
                <body>
                    ${NewsLetterTemplate()}
                </body>
                </html>
        `;
    };

    return {
        RenderPortfolioTemplate,
        RenderContactFormTemplate,
        RenderNewsLetterTemplate
    }
}
/**
 * Title and Logo Section
 */
const TitleAndLogo = `
    <!-- Logo -->
    <table role="presentation" width="100%" style="border-collapse: collapse;">
        <tr>
            <td style="padding-right: 32px; text-align: right;">
                <img src="https://y-engineering.netlify.app/img/YE_Email_Icon.png" alt="logo" />
            </td>
        </tr>
    </table>
    <!-- Title -->
    <div style="padding-left: 12px; padding-right: 12px;">
        <span style="font-size: 2.25rem; font-weight: bold; letter-spacing: 0.05em; font-family: sans-serif; color: #2B2B2B;">THANK YOU</span>
    </div>
    <!-- Divider -->
    <div style="padding-left: 12px; padding-right: 12px;">
        <div style="height: 8px; width: 25%; margin-top: 8px; background-color: #38B6FF;"></div>
    </div>
`;

/**
 * Contact Icons and Footer Section
 */
const contactIconsAndFooter = `
    <!-- Buttons Section -->
    <table role="presentation" width="100%" style="border-collapse: collapse; margin-top: 15px;">
        <tr>
            <td style="padding-left: 12px; margin-top: 20px;">
                <table role="presentation" style="border-collapse: collapse;">
                    <tr>
                        <td>
                            <a href="${LinkedInUrl}">
                                <img src="${linkedinLogo}" width="42px" alt="linkedin-logo" />
                            </a>
                        </td>
                        <td style="padding-left: 8px;">
                            <a href="${YoutubeUrl}">
                                <img src="${youtubeLogo}" width="42px" alt="youtube-logo" />
                            </a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    <!-- Copyright -->
    <table role="presentation" width="100%" style="border-collapse: collapse;">
        <tr>
            <td style="padding-left: 12px; padding-right: 12px; margin-top: 32px;">
                <div>
                    <span style="font-family: sans-serif; color: #2B2B2B;">Copyright © 2024 Y Engineering. All Rights Reserved.</span>
                </div>
                <div style="margin-top: 8px;">
                    <span style="font-family: sans-serif; color: #2B2B2B;">
                        Our email address is: <a href="mailto:hello@yengineering.io"><span style="text-decoration: underline;">hello@yengineering.io</span></a>
                    </span>
                </div>
            </td>
        </tr>
    </table>

`;
/**
 * Function to render the Banner Section of the Email Template
 * @param content 
 * @returns 
 */
const bannerSection = (content: string) => {
    return `
    <!-- Banner -->
    <div style="margin-top: 40px; padding: 36px; background-color: #2B2B2B;">
        ${content}
    </div>
    `;
}
/**
 * Function to render the Titles Section of the Email Template
 * @param mainTitle 
 * @param subTitle 
 * @returns 
 */
const titlesSection = (mainTitle: string, subTitle: string) => {
    return `
    <!-- Body -->
    <table role="presentation" width="100%" style="border-collapse: collapse; margin-top: 10px;">
        <tr>
            <td style="padding-left: 12px; padding-right: 12px; margin-top: 28px;">
                <span style="font-weight: bold; font-size: 1.125rem; font-family: sans-serif; color: #2B2B2B;">${mainTitle}</span>
            </td>
        </tr>
    </table>
    <table role="presentation" width="66.67%" style="border-collapse: collapse; margin-top: 28px;">
        <tr>
            <td style="padding-left: 12px; padding-right: 12px;">
                <span style="font-weight: bold; font-size: 1.125rem; font-family: sans-serif; color: #2B2B2B;">${subTitle}</span>
            </td>
        </tr>
    </table>
    `;
}
/**
 * Template for the Portfolio Case Email
 * @returns 
 */
const PortfolioTemplate = () => {
    return `
    <div style="display: grid;">
        <div style="width: 90%; max-width: 700px; height: auto; margin: auto; padding: 20px; background-color: #F3F5F9;">
            <!-- Logo -->
            ${TitleAndLogo}
            <!-- Titles -->
            ${titlesSection('For reaching out to Y Engineering!', 'Here is our Portfolio, highlighting some of our recent projects!')}
            <!-- Banner -->
            ${bannerSection(`
                <table role="presentation" width="100%" style="border-collapse: collapse;">
                    <tr>
                        <td>
                            <div>
                                <span style="color: white; font-weight: bold; font-size: 1.25rem; font-family: sans-serif;">
                                    If you'd like to talk about how we can help with your project, click the button below to book a meeting with us!
                                </span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style="margin-top: 8px;">
                            <!-- Divider -->
                            <div style="height: 4px; background-color: white; width: 41.67%;"></div>
                        </td>
                    </tr>
                </table>
                <table role="presentation" width="100%" style="border-collapse: collapse; margin-top: 40px;">
                    <tr>
                        <td>
                            <!-- Book Meeting Button -->
                            <table role="presentation" width="100%" style="border-collapse: collapse;">
                                <tr>
                                    <td style="text-align: center;">
                                        <a href="${LinkedInUrl}" target="_blank" style="background-color: white; padding: 20px 40px; border-radius: 0.5rem; text-decoration: none;">
                                            <span style="font-weight: 600; font-size: 1.125rem; color: #000;">Book Meeting</span>
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            `)}
            ${contactIconsAndFooter}
        </div>
    </div>
    `;
}
/**
 * Template for the Contact Form Email
 * @returns 
 */
const ContactFormTemplate = () => {
    return `
    <div style="display: grid;">
        <div style="width: 90%; max-width: 700px; height: auto; margin: auto; padding: 20px; background-color: #F3F5F9;">
            <!-- Logo -->
            ${TitleAndLogo}
            <!-- Titles -->
            ${titlesSection('For reaching out to Y Engineering!', 'Whe have received your contact information and are excited to see how we can help turn you ideas to reality.')}
            <!-- Banner -->
            ${bannerSection(`
                <table role="presentation" width="100%" style="border-collapse: collapse;">
                    <tr>
                        <td>
                            <div>
                                <span style="color: white; font-weight: bold; font-size: 1.25rem; font-family: sans-serif;">
                                    One of our representatives will be in touch with you shortly to discuss your needs and arrange a convenient time for a meeting.
                                </span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style="margin-top: 12px;">
                            <div>
                                <span style="color: white; font-weight: bold; font-size: 1.25rem; font-family: sans-serif;">
                                    In the meantime, if you have any immediate questions or additional information to share, please feel free to reply to this email.
                                </span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style="margin-top: 8px;">
                            <!-- Divider -->
                            <div style="height: 8px; background-color: white; width: 60%;"></div>
                        </td>
                    </tr>
                </table>
            `)}
            ${contactIconsAndFooter}
        </div>
    </div>
    `;
};
/**
 * Function to render the NewsLetter Email Template
 * @returns 
 */
const NewsLetterTemplate = () => {
    return `
    <div style="display: grid;">
        <div style="width: 90%; max-width: 700px; height: auto; margin: auto; padding: 20px; background-color: #F3F5F9;">
            <!-- Logo -->
            ${TitleAndLogo}
            <!-- Titles -->
            ${titlesSection('For subscribing to our newsletter', 'We are excited to share our journey with you and keep you informed about the innovative solutions we\'re developing!')}
            <!-- Banner -->
            ${bannerSection(`
                <table role="presentation" width="100%" style="border-collapse: collapse;">
                    <tr>
                        <td>
                            <div>
                                <span style="color: white; font-weight: bold; font-size: 1.25rem; font-family: sans-serif;">
                                    Download our portfolio here!
                                </span>
                            </div>
                        </td>
                    </tr>
                </table>
                <table role="presentation" width="100%" style="border-collapse: collapse; margin-top: 40px;">
                    <tr>
                        <td>
                            <!-- Button -->
                            <table role="presentation" width="100%" style="border-collapse: collapse;">
                                <tr>
                                    <td style="text-align: center;">
                                        <a href="${portfolioUrl}" target="_blank" style="background-color: white; padding: 20px 40px; border-radius: 0.5rem; text-decoration: none;">
                                            <span style="font-weight: 600; font-size: 1.125rem; color: #000;">Download Portfolio</span>
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            `)}
            ${contactIconsAndFooter}
        </div>
    </div>
    `;
};