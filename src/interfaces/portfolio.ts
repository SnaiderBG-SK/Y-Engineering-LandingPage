import { IProjectImage } from "./image";

export interface IProject {
    id: string;
    img: IProjectImage;
    title: string;
    description: string;
    tags: string[];
};