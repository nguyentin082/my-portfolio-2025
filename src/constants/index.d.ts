export const HERO_CONTENT: string;
export const ABOUT_TEXT: string;
export const EXPERIENCES: {
    year: string;
    role: string;
    company: string;
    description: string;
    technologies: string[];
}[];
export interface Project {
    title: string;
    image: string;
    description: string;
    technologies: string[];
    urls: {
        deploy?: string;
        colab?: string;
        feRepo?: string;
        beRepo?: string;
        papers?: string[];
        repo1?: string;
        repo2?: string;
    };
}
declare const PROJECTS: Project[];

export const CONTACT: {
    address: string;
    phoneNo: string;
    email: string;
};
