import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import Img from '../assets/project/parallax3.avif'
import Title from '../reusablecom/Title';

const Skill = () => {
  const skillVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='mt-8'>
     <div className='text-center mb-8'>
      <Title name1={"Skills"} />
     </div>
    
    <Parallax bgImage={Img} strength={500}>
      <div className="container mx-auto py-12">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={skillVariants}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-lg font-semibold mb-2">MongoDB</h3>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={skillVariants}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-lg font-semibold mb-2">Express.js</h3>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={skillVariants}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-lg font-semibold mb-2">React</h3>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={skillVariants}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-lg font-semibold mb-2">Node.js</h3>
          </motion.div>
          {/* Add more skills here */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={skillVariants}
            transition={{ delay: 1.0 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-lg font-semibold mb-2">Redux</h3>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={skillVariants}
            transition={{ delay: 1.2 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-lg font-semibold mb-2">Python</h3>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={skillVariants}
            transition={{ delay: 1.4 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-lg font-semibold mb-2">TypeScript</h3>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={skillVariants}
            transition={{ delay: 1.6 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-lg font-semibold mb-2">RESTful APIs</h3>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={skillVariants}
            transition={{ delay: 1.8 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-lg font-semibold mb-2">Tailwind CSS</h3>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={skillVariants}
            transition={{ delay: 2.0 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-lg font-semibold mb-2">Git & Version Control</h3>
          </motion.div>
        </div>
      </div>
    </Parallax>
    </div>
  );
};

export default Skill;
