import { IFAQ } from "@/interfaces/supabase/faq";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

/**
 * FAQ Service
 * @returns
 */
export const FAQService = () => {
    /**
     * Function to get FAQs
     * @returns FAQs
     */
    const getFAQs = async(): Promise<IFAQ[]> => {
        const { data: faqs, error } = await supabase
            .from("faq")
            .select("*");
        return faqs! as IFAQ[];
    }

    return {
        getFAQs
    };
}