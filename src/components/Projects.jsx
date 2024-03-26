
import { motion } from 'framer-motion';
// import anim3 from '../assets/Animation - 1711451341711.json'
// Sample project data
const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Description of Project 1 goes here...',
    animation: '../assets/Animation - 1711451341711.json', // Replace with your LottieFiles animation path
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description of Project 2 goes here...',
    animation: 'your-animation-2.json', // Replace with your LottieFiles animation path
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Description of Project 3 goes here...',
    animation: 'your-animation-3.json', // Replace with your LottieFiles animation path
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'Description of Project 4 goes here...',
    animation: 'your-animation-4.json', // Replace with your LottieFiles animation path
  },
];

const Projects = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {projects.map(project => (
        <motion.div
          key={project.id}
          className="p-4 bg-white rounded-lg shadow-md"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="mt-2">{project.description}</p>
          {/* LottieFiles animation */}
          <div className="mt-4">
            {/* Replace 'your-animation-1.json' with the animation path */}
            <lottie-player
              src={project.animation}
              background="transparent"
              speed="1"
              style={{ width: '100%', height: 'auto' }}
              loop
              autoplay
            ></lottie-player>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
