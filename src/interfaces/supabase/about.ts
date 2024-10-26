export interface IAboutPage {
    id: number;
    language_uuid: string;
    created_at: string;
    main_card_title: string;
    main_card_description: string;
    main_card_middle_section_title: string;
    main_card_middle_section_description: string;
    banner_title: string;
    banner_subtitle: string | null;
}