export interface IProject {
    id: number;
    language_uuid: string;
    title: string;
    description: string;
    tag_list: string;
    project_id: string;
    main_img_src: string | null;
    created_at: string;
}