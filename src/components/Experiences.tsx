import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';

function Experiences() {
    return (
        <div className="pb-4 mb-12">
            <motion.h2
                className="my-20 text-center text-4xl"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
            >
                Experiences
            </motion.h2>
            <div>
                {EXPERIENCES.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="mb-8 flex flex-wrap lg:justify-center"
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 100 }}
                        transition={{ duration: 1 }}
                    >
                        <motion.div
                            className="w-full lg:w-1/4"
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                        >
                            <p className="mb-2 text-sm text-stone-400">
                                {exp.year}
                            </p>
                        </motion.div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h3 className="mb-2 font-semibold">
                                {exp.role} -{' '}
                                <span className="text-sm text-stone-500">
                                    {exp.company}
                                </span>
                            </h3>
                            <p className="mb-4 text-stone-400">
                                {exp.description}
                            </p>
                            {exp.technologies.map((tech, index) => (
                                <span
                                    className=" mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
                                    key={index}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Experiences;
