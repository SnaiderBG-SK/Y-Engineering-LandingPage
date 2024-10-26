import { IHomeInformation } from "@/interfaces/supabase/home";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

/**
 * Home Service
 * @returns
 */
export const HomeService = () => {
    /**
     * Function to get home information
     * @returns HomeInformation
     */
    const getHomeInformation = async (): Promise<IHomeInformation> => {
        const { data: home_information, error } = await supabase
            .from("home_information")
            .select("*");
        return home_information![0] as IHomeInformation;
    };
    /**
     * Function to get only the presentation card info
     * @returns 
     */
    const getPresentationCardInfo = async (): Promise<IHomeInformation> => {
        const { data: home_information, error } = await supabase
            .from("home_information")
            .select("contact_card_title, contact_card_subtitle");
        return home_information![0] as IHomeInformation;
    };

    return {
        getHomeInformation,
        getPresentationCardInfo
    };
}