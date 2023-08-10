import { motion } from 'framer-motion'

const loadingContainer = {
  width: '5rem',
  height: '5rem',
  display: 'flex',
  justifyContent: 'space-around',
}
const loadingCircle = {
  display: 'block',
  width: '1.2rem',
  height: '1.2rem',
  backgroundColor: '#3A36DB',
  borderRadius: '0.5rem',
}

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const loadingCircleVariants = {
  start: {
    y: '0%',
  },
  end: {
    y: '60%',
  },
}
const loadingCircleTransition = {
  duration: 0.4,
  yoyo: Infinity,
  ease: 'easeInOut',
}

export default function Loader() {
  return (
    <div className='flex justify-center'>
      <div className='flex fixed w-full justify-center items-center h-screen'>
        <motion.div
          style={loadingContainer}
          variants={loadingContainerVariants}
          initial='start'
          animate='end'
        >
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
        </motion.div>
      </div>
    </div>
  )
}
