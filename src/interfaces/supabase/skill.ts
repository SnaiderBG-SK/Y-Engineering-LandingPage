export interface ISkill {
    id: number;
    language_uuid: string;
    title: string;
    description: string;
    created_at: string; // Assuming the date format remains consistent
    section: string;
    icon_class: string | null; // Allow null for the icon_class property
    href: string | null; // Allow null for the href property
  }