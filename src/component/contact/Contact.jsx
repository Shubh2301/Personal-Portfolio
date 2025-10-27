import React from 'react'
import { motion } from 'motion/react'
import { Mail,Phone,MapPin } from 'lucide-react'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className='p-6 max-w-4xl mx-auto'>

       <motion.h2 initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} className='text-2xl font-bold mb-6'>Get in Touch</motion.h2>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
            <motion.div initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} className='mb-8'>
                <p className='text-gray-300 mb-6'>
                   Feel free to reach out to me through any of the social platforms.I'm always open to new opportunities and connections.
                </p>
                <div className="space-y-4">
                    <div className='flex items-center text-gray-300'>
                        <Mail size={22} className='mr-3 text-blue-400'/>
                        <span>shubhamkamble3011@gmail.com</span>
                    </div>
                    <div className='flex items-center text-gray-300'>
                        <Phone size={22} className='mr-3 text-blue-400'/>
                        <span>+91-9420551980</span>
                    </div>
                    <div className='flex items-center text-gray-300'>
                        <MapPin size={22} className='mr-3 text-blue-400'/>
                        <span>Kolhapur,India</span>
                    </div>
                </div>
            </motion.div>
        </div>
        <motion.div initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}}>
            {/* Conatct form */}
            <ContactForm/>
        </motion.div>
       </div>

    </div>
  )
}

export default Contact