import { ProjectService } from "@/services/projectService";
import { GetMetadata } from "@/utils/Metadata";
import { NextPage } from "next";
import dynamic from "next/dynamic";
const PortfolioContent = dynamic(() => import("@/components/portfolio/PortfolioContent").then((mod) => mod.default));

//#region services
const { getProjects } = ProjectService();
//#endregion services

/**
   * Function to get all projects
   * @returns 
   */
const getProjectsData = async () => {
  const projectsData = await getProjects();
  return {
    projects: projectsData,
  };
};
/**
 * Metadata for PortfolioPage
 */
export const metadata = GetMetadata("Y Engineering - Some of our recent projects", "Portfolio", ["Projects", "Portfolio", "Recent Projects", "Innovations", "Biomedical Projects", "Health", "Technology", "Silicon Valley"]);
/**
 * Component for PortfolioPage
 * @returns
 */
const PortfolioPage: NextPage = async () => {
  //#region variables
  const { projects } = await getProjectsData();
  //#endregion variables

  //#region functions
  return (
    <PortfolioContent projects={projects} />
  );
};

export default PortfolioPage;
