import project1 from '../assets/projects/messiVSronaldoThumnail.png';
import project2 from '../assets/projects/NewsCategoryClassifyThumnail.png';
import project3 from '../assets/projects/massivemimo.jpg';
import project4 from '../assets/projects/vietnamhousethumnail.jpg';

export const HERO_CONTENT = `Data Scientist & Machine Learning Engineer driven by data-driven impact, eager to tackle complexchallenges and develop scalable AI solutions. Proficient in predictive modeling, statistical analysis, anddeploying machine learning models to production. Skilled in leveraging advanced algorithms and cutting-edge tools to optimize decision-making and business outcomes.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
    {
        year: 'Aug 2023 - Nov 2023',
        role: 'Intern Software Engineer (Front-end)',
        company: 'VNPT Ho Chi Minh City (IT Center)',
        description: `Developed and maintained front-end applications using Angular.js and Flutter. Collaborated with the backend team to integrate APIs, ensuring seamless data flow. Optimized UI/UX for better user experience and performance.`,
        technologies: ['Flutter', 'Angular.js'],
    },
];

export const PROJECTS = [
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
    {
        title: 'Vietnam Housing Price Prediction',
        image: project4,
        description: 'Pending...',
        technologies: ['Pending...'],
        urls: [],
    },
];

export const CONTACT = {
    address: 'Le Van Sy, District 3, Ho Chi Minh City',
    phoneNo: '(+84) 83 721 6129',
    email: 'nguyentin082@gmail.com',
};
