import { ISendEmailBody } from '@/interfaces/IEmail';
import { EmailTemplatesService } from '@/utils/emailTemplates';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';
const pdfUrl = 'https://y-engineering.netlify.app/pdf/Y-Engineering-Portfolio-(2024).pdf';

const { RenderPortfolioTemplate, RenderContactFormTemplate, RenderNewsLetterTemplate } = EmailTemplatesService();

/**
 * Interface for SmtpConfig
 */
interface SmtpConfig {
    host: string;
    port: number;
    secure: boolean;
    auth: {
        user: string;
        pass: string;
    };
}
/**
 * smtp configuration object
 */
const smtpConfig: SmtpConfig = {
    host: String(process.env.NEXT_PUBLIC_SMTP_HOST),
    port: Number(process.env.NEXT_PUBLIC_SMTP_PORT),
    secure: true,
    auth: {
        user: String(process.env.NEXT_PUBLIC_SMTP_USER),
        pass: String(process.env.NEXT_PUBLIC_SMTP_PASS),
    },
};

/**
 * Function to handle the POST request for the sendEmail API
 * @param req 
 * @param res 
 * @returns 
 */
export async function POST(req: Request, res: Response) {
    try {
        if (req.method !== 'POST') return new Response('Method Not Allowed', { status: 405 });

        // 1. Read the request body (it's already a ReadableStream)
        const rawBody = await req.text(); // Get the body as text

        // 2. Parse the JSON body
        const requestBody: ISendEmailBody = JSON.parse(rawBody);
        // 3. Render the HTML Email Body
        const htmlMailBody =
            requestBody.template === 'PortfolioTemplate' ?
                RenderPortfolioTemplate()
                : requestBody.template === 'ContactTemplate' ?
                    RenderContactFormTemplate()
                    : RenderNewsLetterTemplate();
        
        // 3. Fetch the PDF from Hosting
        const pdfResponse = requestBody.template === 'PortfolioTemplate' ? await fetch(pdfUrl) : null;

        // 4. Ensure the response is successful (status code 200-299)
        if (requestBody.template === 'PortfolioTemplate' && !pdfResponse!.ok) {
            return new Response(`Failed to fetch files: ${pdfResponse!.statusText}`);
        }

        // 5. Get the content as an ArrayBuffer and convert to Buffer
        const pdfBuffer = requestBody.template === 'PortfolioTemplate' ? Buffer.from(await pdfResponse!.arrayBuffer()) : null;
        
        // 6. Prepare the attachments
        const mailAttachments = requestBody.template === 'PortfolioTemplate' ? [{
            filename: 'Y-Engineering-Portfolio-(2024).pdf',
            content: pdfBuffer,
        }] : [];

        // 7. Prepare the mail options
        const mailOptions = {
            from: '"Marcelo Neyra Naya" <hello@yengineering.io>',
            to: requestBody.email,
            subject: 'Welcome to YEngineering',
            text: '',
            html: htmlMailBody,
            attachments: mailAttachments,
        };

        // 8. Send the email
        const emailResponse = await SendEmail(mailOptions);
        if (!emailResponse || (emailResponse?.rejected && emailResponse.rejected.length > 0)) {
            return new Response(`There was an error with email api: ${emailResponse?.response}`, { status: 500 });
        }
        return new Response('Email Sent', { status: 200 });
    } catch (error) {
        return new Response(`Internal Server Error: ${error}`, { status: 500 });
    };
}

/**
 * 
 * @param mailOptions 
 */
const SendEmail = async (mailOptions: any) => {
    try {
        const transporter = nodemailer.createTransport(smtpConfig);
        const info = await transporter.sendMail(mailOptions);
        return info;
    } catch (error) {
        console.error(error);
    }
};