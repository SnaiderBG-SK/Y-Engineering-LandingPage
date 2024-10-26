import { IContactFormValues } from "@/interfaces/contact";

/**
 * Contact Service
 * @returns
 */
export const ContactService = () => {
    /**
     * Function to post contact information
     * @param contactInformation 
     * @returns 
     */
    const PostContactInformation = async (contactInformation: IContactFormValues) => {
        try {
            const response = await fetch('/api/postContactInfo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contactInformation),
            });
            return response;
        } catch (error) {
            console.error(error);
        };
    };
    return {
        PostContactInformation
    };
};