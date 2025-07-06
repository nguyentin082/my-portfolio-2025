import project1 from '../assets/projects/messiVSronaldoThumnail.png';
import project2 from '../assets/projects/NewsCategoryClassifyThumnail.png';
import project3 from '../assets/projects/massivemimo.jpg';
import project4 from '../assets/projects/AIsolution.png';
import { Project } from './index.d';
export const HERO_CONTENT = `Artificial Intelligence Software Engineer with a solid foundation in machine learning and deep learning, focusing on building practical AI applications. Experienced in turning data into intelligent solutions. Passionate about applying AI to solve real-world challenges in a scalable and efficient way.`;

export const EXPERIENCES = [
    {
        year: 'April 2025 - NOW',
        role: 'Artificial Intelligence Software Engineer',
        company: 'Jumpstart Disruptive Innovations Pte. Ltd. (TechJDI)',
        description: `Developed a comprehensive AI system for B2B clients, serving as both AI Engineer and Backend Developer. This involved extensive API integration, leveraging Natural Language Processing (NLP) for intelligent interactions and Computer Vision for advanced functionalities.`,
        technologies: ['PandasAI', 'LangChain', 'NestJS', 'MongoDB', 'AWS S3'],
    },
    {
        year: 'Aug 2023 - Nov 2023',
        role: 'Intern Software Engineer (Front-end)',
        company: 'VNPT Ho Chi Minh City (IT Center)',
        description: `Developed and maintained front-end applications using Angular.js and Flutter. Collaborated with the backend team to integrate APIs, ensuring seamless data flow. Optimized UI/UX for better user experience and performance.`,
        technologies: ['Flutter', 'Angular.js'],
    },
];

export const PROJECTS: Project[] = [
    {
        title: 'Artificial Intelligence Solution',
        image: project4,
        description:
            'AI system for B2B with integrated solutions: data analysis assistant, face recognition, retirement planning, and real estate advisor. Includes full-stack frontend/backend, admin UI, and supports user interactions via Email, Telegram, and web.',
        technologies: [
            'LangChain',
            'InsightFace',
            'PandasAI',
            'NextJS',
            'NestJS',
            'MongoDB',
            'AWS S3',
            'Milvus',
        ],
        urls: {},
    },
    {
        title: 'Ronaldo VS Messi Image Classification',
        image: project1,
        description:
            'Built a pipeline integrating Haarcascade (OpenCV) and SVM to detect and classify Ronaldo and Messi’s faces. Deployed as a web service, allowing users to upload images for real-time classification.',
        technologies: [
            'OpenCV',
            'Scikit-learn',
            'Wavelet Transformer',
            'Cross-validation',
            'ReactJS',
            'Flask',
            'Docker',
            'VPS',
        ],
        urls: {
            deploy: 'https://fe-messi-ronaldo-image-classification.vercel.app/',
            colab: 'https://colab.research.google.com/drive/1n_ktaqsGBQhiA42YHBD9OSYzzf1DWUiH?usp=sharing',
            feRepo: 'https://github.com/nguyentin082/fe-messi-ronaldo-image-classification',
            beRepo: 'https://github.com/nguyentin082/be-messi-ronaldo-image-classification',
        },
    },
    {
        title: 'News Category Classification',
        image: project2,
        description:
            'This project develops an AI/ML-powered news classifier that categorizes articles and provides an interactive web UI for exploration.',
        technologies: [
            'NLTK',
            'TF-IDF',
            'SVM',
            'ReactJS',
            'FastAPI',
            'Docker',
            'Cloudflare',
            'VPS',
        ],
        urls: {
            deploy: 'https://fe-news-category-classification.vercel.app/',
            colab: 'https://colab.research.google.com/drive/1ch2u8wuOrBlNQ9Vgb_ZeGp3ioPaPCSl-',
            feRepo: 'https://github.com/nguyentin082/fe-news-category-classification',
            beRepo: 'https://github.com/nguyentin082/be-news-category-classification',
            papers: ['https://ieeexplore.ieee.org/document/7569223'],
        },
    },
    {
        title: 'Machine Learning-Based CSI Feedback With Variable Length in FDD Massive MIMO',
        image: project3,
        description:
            'A Optimized CSI feedback in FDD Massive MIMO using PCA-KMeans and compared it with Autoencoder-based learning to reduce overhead while preserving accuracy.',
        technologies: [
            'TensorFlow',
            'Keras',
            'PCA',
            'K-means Clustering',
            'AutoEncoder',
            'Matplotlib',
        ],
        urls: {
            repo1: 'https://github.com/nguyentin082/PCA_Kmeans_CSI_MassiveMIMO',
            repo2: 'https://github.com/nguyentin082/AutoEncoder_CSI_MassiveMIMO',
            papers: [
                'https://ieeexplore.ieee.org/document/9928062',
                'https://ieeexplore.ieee.org/document/9593213',
            ],
        },
    },
];

export const CONTACT = {
    address: 'Le Van Sy, District 3, Ho Chi Minh City',
    phoneNo: '(+84) 83 721 6129',
    email: 'nguyentin082@gmail.com',
};
