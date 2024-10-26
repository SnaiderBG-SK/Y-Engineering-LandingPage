/**
 * Interface to send an email
 */
export interface ISendEmailBody {
    name: string;
    lastname: string;
    email: string;
    template: "PortfolioTemplate" | "NewsLetterTemplate" | "ContactTemplate";
}