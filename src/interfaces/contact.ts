
export interface IContact {
    id: number | undefined;
    title: string;
    iconClassname: string;
    description: string;
}

export interface IContactFormValues {
    name: string;
    lastname: string;
    email: string;
    message: string;
  }