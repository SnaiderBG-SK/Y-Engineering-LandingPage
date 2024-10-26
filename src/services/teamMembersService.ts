import { ITeamMember } from "@/interfaces/supabase/teamMember";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

/**
 * Team Members Service
 * @returns
 */
export const TeamMembersService = () => {
    /**
     * Function to get team members
     * @returns 
     */
    const getTeamMembers = async(): Promise<ITeamMember[]> => {
        const { data: teamMembers, error } = await supabase
            .from("team_members")
            .select("*");
        return teamMembers! as ITeamMember[];
    };

    return {
        getTeamMembers
    };
};