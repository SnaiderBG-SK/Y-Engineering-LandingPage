import { ISendEmailBody } from "@/interfaces/IEmail";

/**
 * Function to send an email
 * @param data 
 * @returns 
 */
export const SendEmail = async (data: ISendEmailBody) => {
    try {
        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return response;
    } catch (error) {
        console.error(error);
    }
}