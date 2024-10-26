import { IProject } from "@/interfaces/supabase/project";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

/**
 * Project Service
 * @returns
 */
export const ProjectService = () => {
    /**
     * Function to get all projects
     * @returns 
     */
    const getProjects = async (): Promise<IProject[]> => {
        const { data: projects, error } = await supabase
            .from("portfolio_projects")
            .select("id, title, description, main_img_src, tag_list, project_id, created_at");
        return projects as IProject[];
    };

    return {
        getProjects
    };
}