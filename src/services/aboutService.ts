import { IAboutPage } from "@/interfaces/supabase/about";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

/**
 * About Service
 * @returns
 */
export const AboutService = () => {
    /**
     * Function to get about information
     * @returns AboutInformation
     */
    const getAboutInformation = async(): Promise<IAboutPage> => {
        const { data: about_information, error } = await supabase
            .from("about_information")
            .select("main_card_title, main_card_description, main_card_middle_section_title, main_card_middle_section_description, banner_title, banner_subtitle");
        return about_information![0] as IAboutPage;
    };

    return {
        getAboutInformation
    };
}