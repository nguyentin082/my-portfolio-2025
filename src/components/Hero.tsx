import profilePicture from '../assets/profile-pic.png';
import { HERO_CONTENT } from '../constants/index';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5,
        },
    },
};
const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
        },
    },
};

function Hero() {
    return (
        <div className="pb-4 lg:mb-36">
            <div className="flex flex-wrap lg:flex-row-reverse">
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:p-8">
                        <motion.img
                            src={profilePicture}
                            alt="SniT'Picture"
                            className="border border-stone-900 rounded-3xl lg:w-full w-1/2"
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                        />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <motion.div
                        className="flex flex-col items-center lg:items-start mt-10"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <motion.h2
                            className="pb-2 text-5xl tracking-tighter lg:text-8xl"
                            variants={childVariants}
                        >
                            Nguyen Hoang Trung Tin
                        </motion.h2>
                        <motion.span
                            className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
                            variants={childVariants}
                        >
                            Data Scientist / Machine Learning Engineer
                        </motion.span>
                        <motion.p
                            className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
                            variants={childVariants}
                        >
                            {HERO_CONTENT}
                        </motion.p>
                        <motion.a
                            href="/DSMLE.pdf"
                            target="_blank"
                            download
                            className="bg-white rounded-full p-4 text-md font-bold text-stone-800 mb-10"
                            variants={childVariants}
                        >
                            Download Resume
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
