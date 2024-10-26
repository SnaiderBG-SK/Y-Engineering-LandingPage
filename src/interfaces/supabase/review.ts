export interface IReview {
    id: number;
    language_uuid: string;
    name: string;
    position: string;
    company: string;
    review: string;
    user_img?: string; // Allow null for the user_img property
    created_at: string; // Assuming the date format remains consistent
  }