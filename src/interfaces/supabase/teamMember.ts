export interface ITeamMember {
    id: number;
    language_uuid: string;
    fullname: string;
    position: string;
    quote: string | null; 
    linkedin_url: string | null;
    webpage_url: string | null;
    img_src: string | null;
    created_at: string;
  }