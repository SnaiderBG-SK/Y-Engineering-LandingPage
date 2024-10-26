import { IProjectImage } from "./image";
import { ISkill } from "./supabase/skill";

export interface IProCard {
    iconClassname: string;
    title: string;
    description: string;
};

export interface IServiceCard {
    title: string;
    description: string;
    serviceUrl: string;
};

export interface IHistoryCard {
    title: string;
    description: string;
};

export interface IPresentationCard {
    cardTitle: string;
    cardDescription: string;
    cardImage: IProjectImage;
    cardKeyPoints: ISkill[];
    className?: string;
    showCTA?: boolean;
};