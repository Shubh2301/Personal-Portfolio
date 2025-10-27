import { motion } from 'motion/react'
import { Github, Linkedin } from 'lucide-react'

const About = () => {
  return (
    <div className='p-6 max-w-4xl flex'>
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className='bg-gray-800 rounded-lg p-6'>
        <h2 className='text-2xl font-bold mb-5'>About Me</h2>
        <p className='mb-1 text-gray-400 text-lg'>Hi,I'm Shubham,a passionate Front-End Developer with a strong foundation in building responsive and intractive web interface. I enjoy turning ideas into visually appealing,user-friendly websites. I specialize in bringing design to life with React.js and smooth animation using GSAP. As a fresher,I'm constantly exploring new web technologies and improving my skill to build projects that make a real impact.</p>
        <h3 className='text-xl font-semibold mb-3'>Education</h3>
        <div className="space-y-4 mb-6">
            <div className="border-l-2 border-blue-500 pl-4">
                <h3 className='font-semibold text-blue-100'>Diploma in Computer Engineering</h3>
                <p className='text-gray-400'>Passing Year-2022</p>
            </div>
            <h1 className='text-xl font-semibold mb-3'>Let's Connect</h1>
            <div className='flex space-x-4 overflow-hidden mt-2'>
                <a href="https://github.com/Shubh2301" target='_blank' rel='noopener noreferrer' className='flex items-center text-gray-300 hover:text-blue-400'>
                <Github className='mr-3' size={22}/>
                </a>
                <a href="https://github.com/Shubh2301" target='_blank' rel='noopener noreferrer' className='flex items-center text-gray-300 hover:text-blue-400'>
                <Linkedin className='mr-3' size={22}/>
                </a>
            </div>
        </div>
      </motion.div>
    </div>
  )
}

export default About