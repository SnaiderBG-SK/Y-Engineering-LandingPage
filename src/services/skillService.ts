import { ISkill } from "@/interfaces/supabase/skill";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

/**
 * Skill Service
 * @returns
 */
export const SkillService = () => {
    /**
     * Function to get skills
     * @returns Skill[]
     */
    const getSkills = async (types: string[]): Promise<ISkill[]> => {
        const { data: skills, error } = await supabase
            .from("skills_services_others")
            .select("*")
            .in("section", types);
        return skills!;
    };

    return {
        getSkills
    };
}