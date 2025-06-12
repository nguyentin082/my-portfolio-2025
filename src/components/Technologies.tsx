import { motion } from 'framer-motion';
import {
    FaPython,
    FaReact,
    FaNodeJs,
    FaDocker,
    FaGitAlt,
    FaAws,
} from 'react-icons/fa6';
import {
    SiTypescript,
    SiPostgresql,
    SiMysql,
    SiScikitlearn,
    SiNumpy,
    SiPandas,
    SiTensorflow,
    SiPytorch,
    SiFlask,
    SiNginx,
    SiFastapi,
    SiLangchain,
    SiNextdotjs,
    SiNestjs,
    SiMongodb,
} from 'react-icons/si';

const icons = [
    { component: FaPython, color: '#3776AB', duration: 2.5 },
    { component: SiNumpy, color: '#3184a0', duration: 3 },
    { component: SiPandas, color: '#6248c8', duration: 2.8 },
    { component: SiScikitlearn, color: '#F7931E', duration: 2.6 },
    { component: SiTensorflow, color: '#FF6F00', duration: 3.2 },
    { component: SiPytorch, color: '#EE4C2C', duration: 2.5 },
    { component: SiLangchain, color: '#34687C', duration: 2.7 },
    { component: SiPostgresql, color: '#336791', duration: 2.8 },
    { component: SiMysql, color: '#4479A1', duration: 3 },
    { component: SiMongodb, color: '#47A248', duration: 2.8 },
    { component: FaReact, color: '#61DAFB', duration: 2.6 },
    { component: SiNextdotjs, color: '#EEEEEE', duration: 2.9 },
    { component: FaNodeJs, color: '#339933', duration: 2.8 },
    { component: SiNestjs, color: '#E0234E', duration: 2.5 },
    { component: SiFlask, color: '#EEEEEE', duration: 2.6 },
    { component: SiFastapi, color: '#009688', duration: 2.4 },
    { component: SiTypescript, color: '#3178C6', duration: 2.6 },

    { component: FaGitAlt, color: '#F05032', duration: 3.1 },
    { component: SiNginx, color: '#009639', duration: 2.7 },
    { component: FaDocker, color: '#2496ED', duration: 2.9 },
    { component: FaAws, color: '#FF9900', duration: 3.1 },
];

const iconVariants = (duration: number) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse' as 'reverse' | 'loop' | 'mirror',
        },
    },
});

function Technologies() {
    return (
        <div className="pb-24">
            <motion.h2
                className="my-20 text-center text-4xl font-semibold"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
            >
                Technologies
            </motion.h2>
            <motion.div
                className="grid grid-cols-7 lg:gap-26 gap-12 justify-items-center"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
            >
                {icons.map(({ component: Icon, color, duration }, index) => (
                    <motion.div
                        key={index}
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(duration)}
                    >
                        <Icon
                            className="xl:text-8xl lg:text-7xl md:text-6xl text-5xl"
                            style={{ color }}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default Technologies;
