import React, { useState } from 'react'
import { motion } from 'motion/react';
import { Send } from 'lucide-react';

const ContactForm = () => {
    const[formData,setFormData]=useState({
        name:"",
        email:"",
        message:""
    })
 const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData);
 };
 const handleChange=()=>{
    setFormData({
        ...formData,
        [e.target.value]:e.target.value
    })
 }

  return (
    <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.5}} onSubmit={handleSubmit} className='space-y-6 bg-gray-800 rounded-lg p-6'>
        <div>
            <label htmlFor="name" className='block text-sm font-medium mb-2'>Name</label>
            <input type="text" id="name" name='name' value={formData.name} onChange={handleChange} className='w-full px-3 py-2 bg-gray-700 rounded-md border border-gray-600 focus:border-blue-500 focus:ring-blue-500' required />
            
             <label htmlFor="email" className='block text-sm font-medium mb-3'>Email</label>
            <input type="email" id="email" name='email' value={formData.email} onChange={handleChange} className='w-full px-3 py-2 bg-gray-700 rounded-md border border-gray-600 focus:border-blue-500 focus:ring-blue-500' required />     
            <label htmlFor="message" className='block text-sm font-medium mb-2'>Message</label>
            <textarea name="message" id="message" value={formData.message} onChange={handleChange} rows={4} className='w-full px-3 py-2 bg-gray-700 rounded-md border border-gray-600 focus:border-blue-500 focus:ring-blue-500' required></textarea>
        </div>
        <motion.button whileHover={{scale:1.03}} whileTap={{scale:0.98}} type='submit' className='w-full flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-800'>
            <Send size={19} className='mr-2'/>
        </motion.button>

    </motion.div>
  )
}

export default ContactForm