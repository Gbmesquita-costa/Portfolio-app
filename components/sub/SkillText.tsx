"use client"

import { motion } from 'framer-motion';
import { slideInFromTop } from "@/utils/motion";

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center mb-14'>
      <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Making apps with modern technologies
        </motion.div>
    </div>
  )
}

export default SkillText