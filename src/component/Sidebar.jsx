import React from 'react'
import { Files,Code,User,Mail, Github, Linkedin } from 'lucide-react';
import { motion } from "motion/react"

const Sidebar = ({activeTab,setActiveTab}) => {
    const sidebarItems=[
        {icon: <Files size={26}/> ,id:"projects",label:"projects"},
        {icon: <Code  size={26}/> ,id:"skills",label:"skills"},
         {icon: <User size={26}/> ,id:"about",label:"about"},
        {icon: <Mail size={26}/> ,id:"contact",label:"contact"},
    ]
  return (
    <div className='w-16 bg-gray-900 h-screen flex flex-col py-4 items-center'>
       {sidebarItems.map((item)=> <motion.button 
       whileHover={{scale:1.2}} whileTap={{scale:0.95}}
       onClick={()=>setActiveTab(item.id)}
       key={item.id} className={`p-3 mb-2 ${activeTab ===item.id? 'border-l-3 border-l-blue-600 text-white': "text-gray-400 hover:text-white"}`} > {item.icon} </motion.button>)}
        <div className='mt-auto'>
            <motion.a href='https://github.com/Shubh2301' target='_blank' rel='noopener noreferrer' whileHover={{scale:1.2}} className='p-3 text-gray-400 hover:text-white block mb-2'>
                <Github size={26}/>
            </motion.a>
            <motion.a href='https://github.com/Shubh2301' target='_blank' rel='noopener noreferrer' whileHover={{scale:1.2}} className='p-3 text-gray-400 hover:text-white block mb-2'>
                <Linkedin size={26}/>
            </motion.a>
        </div>
    </div>
  )
}

export default Sidebar