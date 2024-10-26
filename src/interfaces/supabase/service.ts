export interface IService {
    id: number;
    service_identity: string;
    service_name: string;
    img_src: string;
    second_img_src: string;
    service_subtitle: string;
    service_description: string;
    service_footer: string;
    created_at: string;
}

export interface IServiceSection {
    id: number;
    service_id: number;
    section_title: string;
    section_description: string;
    order: number;
    is_list: boolean;
    created_at: string;
}