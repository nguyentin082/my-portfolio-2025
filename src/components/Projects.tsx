import { PROJECTS } from '../constants';
// import MyButton1 from './MyButton1';
// import MyButton2 from './MyButton2';
import { motion } from 'framer-motion';
import MyButton3 from './MyButton3';

function Projects() {
    return (
        <div className="pb-16">
            <motion.h2
                className="my-20 text-center text-4xl font-semibold"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
            >
                Projects
            </motion.h2>
            <div className="flex flex-col gap-12">
                {PROJECTS.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col lg:flex-row lg:items-center  p-6 rounded-xl shadow-lg"
                    >
                        {/* Hình ảnh */}
                        <motion.div
                            className="w-full lg:w-1/3 flex justify-center lg:justify-end"
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                width={250}
                                height={250}
                                className="rounded-xl shadow-md"
                            />
                        </motion.div>

                        {/* Nội dung */}
                        <motion.div
                            className="w-full lg:w-2/3 mt-6 lg:mt-0 lg:ml-12"
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                        >
                            <h3 className="mb-3 text-2xl font-semibold text-white text-center lg:text-left flex justify-center items-center lg:justify-start">
                                {project.title}
                                {project.urls?.deploy && (
                                    <MyButton3 url={project.urls?.deploy} />
                                )}
                            </h3>

                            <p className="mb-4 text-stone-400 leading-relaxed text-center lg:text-left">
                                {project.description}
                            </p>

                            {/* Công nghệ sử dụng */}
                            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="inline-block bg-stone-800 px-3 py-1 text-sm font-medium text-stone-300 rounded-lg"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
