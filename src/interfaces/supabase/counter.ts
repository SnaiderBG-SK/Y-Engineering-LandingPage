export interface ICounter {
    id: number;
    language_uuid: string;
    page: string;
    count: string; // Assuming the count remains a string representation
    subtitle: string;
    icon_className: string | null;
    created_at: string; // Assuming the date format remains consistent
}