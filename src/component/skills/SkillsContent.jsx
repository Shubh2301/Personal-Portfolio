import { motion } from 'motion/react'
import { skills } from '../../data/skill'
import SkillBar from './SkillBar'

const SkillsContent = () => {
  return (
    <div className='p-6 max-w-4xl mx-auto'>
        <motion.h2 initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} className='text-2xl font-bold mb-6 '> Skills & Experties</motion.h2>
        {
            skills.map((skillGroup,groupIndex)=> <motion.div>
                <h3 className='text-xl font-semibold mb-4 text-blue-400' key={groupIndex} >{skillGroup.category}</h3>
                <div className='space-y-4'>
                    {
                        skillGroup.items.map((skill,index)=> <SkillBar key={skill.name} name={skill.name} level={skill.level} index={index}/>)
                    }


                </div>

                
                </motion.div>
            
        )
        }
    </div>
  )
}

export default SkillsContent