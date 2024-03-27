
import { motion } from 'framer-motion';
import Title from '../reusablecom/Title';
import { TbWorld } from "react-icons/tb";
import { FaGithub } from 'react-icons/fa6';
import P1 from '../assets/project/Meubles.png';
import P2 from '../assets/project/github.png';
import P3 from '../assets/project/bs.png';
import P4 from '../assets/project/car.png';

import P5 from '../assets/project/pokemon.png';
import P6 from '../assets/project/portfolio.png';


const projects = [
  {
    id: 1,
    title: 'Meubles-store',
    description: 'a dynamic web application showcasing mastery in ReactJs, Redux, Tailwindcss, and robust Authentication',
    skills: ['React','Redux','Tailwindcss','Responsive'],
    github: 'https://github.com/rohith2613/Meubles-React-project',
    live:'https://meubles-rohith.netlify.app/',
    image: P1,   
  },
  {
    id: 2,
    title: 'Github Users',
    description: 'a dynamic web application showcasing mastery in ReactJs, Redux, Tailwindcss, and robust Authentication',
    skills: ['React','API fetch','Tailwindcss','Responsive'],
    github: 'https://github.com/rohith2613/github_user_app1',
    live:'https://githubuser-rohith.netlify.app/', 
    image: P2,   
  },
  {
    id: 3,
    title: 'Brand-shark (Company-site)',
    description: 'It is a company website I got an assignment to do this task.',
    skills: ['HTML','CSS','Tailwindcss','Responsive'],
    github: 'https://github.com/rohith2613/bs-assignment',
    live:'https://comforting-pony-d62e71.netlify.app/', 
    image: P3,   
  },
  {
    id: 4,
    title: 'Car Manufacture Site',
    description: 'Description of Project 4 goes here...',
    skills: ['React','Responsive','Tailwindcss','daisUI'],
    github: 'https://github.com/rohith2613/Car-manufacture',
    live:'https://deead-cars.netlify.app', 
    image: P4,   
  },
  {
    id: 5,
    title: 'Portfolio Site',
    description: 'I create a portfolio using ReactJs , tailwindcss and use animations',
    skills: ['React','framer-motion','Tailwindcss','Lottie-files'],
    github: 'https://github.com/rohith2613/rohith-portfolio',
    live:'https://deead-cars.netlify.app', 
    image: P6,   
  },
  {
    id: 6,
    title: 'Pokemon App',
    description: 'I create a Pokemon App using ReactJs , tailwindcss and use animations',
    skills: ['React','API','Tailwindcss','Resopnsive'],
    github: 'https://github.com/rohith2613/pokemon-app',
    live:'https://pokemon-app-rohith.vercel.app/', 
    image: P5,   
  },
];

const Project = () => {
  return (
    <div className="px-4 py-8">
      <div className='text-center mb-8'>
        <Title name1={"Projects"} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map(project => (
          <motion.div
            key={project.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            <img src={project.image} alt="Shoes" className="w-full h-56 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
              <div className="mt-2">
                {project.skills && project.skills.map((skill, index) => (
                  <span key={index} className="badge badge-secondary mr-2">{skill}</span>
                ))}
              </div>
            </div>
            <div className="p-4 bg-gray-100">
              <div className="flex justify-between">
                <a target='_blank' href={project.github} rel="noopener noreferrer">
                  <button className="btn btn-warning"><FaGithub /></button>
                </a>
                <a href={project.live} target='_blank' rel="noopener noreferrer">
                  <button className="btn btn-info"><TbWorld /></button>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
