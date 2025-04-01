declare module 'index.js' {
    export const HERO_CONTENT: string;
    export const ABOUT_TEXT: string;
    export const EXPERIENCES: {
        year: string;
        role: string;
        company: string;
        description: string;
        technologies: string[];
    }[];
    export const PROJECTS: {
        title: string;
        image: string;
        description: string;
        technologies: string[];
        urls: object[];
    }[];
    export const CONTACT: {
        address: string;
        phoneNo: string;
        email: string;
    };
}
