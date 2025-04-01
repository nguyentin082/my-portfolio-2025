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
    urls: {
        deploy?: string;
        colab?: string;
        feRepo?: string;
        beRepo?: string;
        papers?: string[];
        repo1?: string;
        repo2?: string;
    };
}[];
export const CONTACT: {
    address: string;
    phoneNo: string;
    email: string;
};
