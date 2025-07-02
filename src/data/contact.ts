import { IContact } from "@/interfaces/contact";
import { CompanyEmail } from "./social";

export const contactListItems: IContact[] = [
    {
        id: 1,
        title: "Office",
        iconClassname: "fas fa-map-marker-alt",
        description: "2803 Philadelphia Pike, Claymont, Delaware, 19703",
    },
    {
        id: 2,
        title: "Office",
        iconClassname: "fas fa-map-marker-alt",
        description: "890-A Marina Vallarta, Jal. 45140, Mexico",
    },
    {
        id: 3,
        title: "Calling Support",
        iconClassname: "fas fa-phone-alt",
        description: "+52 33 2832 6914",
    },
    {
        id: 4,
        title: "Email",
        iconClassname: "fas fa-envelope",
        description: CompanyEmail,
    }
];
