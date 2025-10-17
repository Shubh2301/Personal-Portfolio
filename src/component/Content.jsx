import React from 'react'
import { projects } from '../data/Project'
import { ExternalLink, Github } from 'lucide-react'
import { motion } from 'motion/react'

const Content = () => {
    const contentVariants={
        hidden:{opacity:0, y:-5},
        visible:{opacity:1,y:0}
    }
    const renderProjects=()=>{
        return(
            <div className='grid  grid-cols-1 md:grid-cols-2 gap-2 p-6 overflow-hidden'>
            {
                projects.map((project, index) => {
                    return (
                        <motion.div className='bg-gray-800 rounded-lg overflow-hidden' initial="hidden" animate="visible" variants={contentVariants}>
                            <img src={project.Image} alt={project.title} className='w-full h-48 object-cover' />
                            <div className="p-4">
                                <h3 className='text-xl font-bold mb-2'> {project.title} </h3>
                                <p className='text-gray-300 mb-4'>{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {
                                        project.technologies.map((tech)=><span key={tech} className='px-2 py-1 m-2 bg-gray-700 rounded-md text-sm'>{tech}</span>)
                                    }
                                </div>
                                <div className="flex gap-4">
                                    {
                                        project.githubUrl && (
                                            <a href="" className='flex items-center text-gray-300 hover:text-blue-400'>
                                             <Github size={20} className='mr-1'/> Code
                                            </a>
                                        )
                                    }
                                    {
                                        project.liveUrl && (
                                            <a href="" className='flex items-center text-gray-300 hover:text-blue-400'>
                                                <ExternalLink size={20} className='mr-1'/> Live Demo
                                            </a>
                                        )
                                    }
                                </div>
                            </div>
                        </motion.div>
                    )
                })
            }

        </div>
        )
    }
    return (
        <motion.div initial="hidden" animate="visible" variants={contentVariants} className='flex-1 overflow-auto bg-gray-900 text-gray-100'>
            {renderProjects()}

        </motion.div>
        
    )
}

export default Content