
import Title from '../reusablecom/Title';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import anim4 from '../assets/Animation - 1711459797422.json'
import img1 from '../assets/MERN1.jpeg'
import img2 from '../assets/MERN.jpeg'
import img3 from '../assets/Database.png'
import img4 from '../assets/devops.png'
import img5 from '../assets/maintaince.jpeg'
import img6 from '../assets/UI.jpeg'

const Services = () => {
  return (
    <div className="py-10 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Title name1="Services" name2={"I offered"} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <p className="text-lg font-bold text-gray-700">
            As a MERN stack developer, I offer the following services:
          </p>
          <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-40 ' >
            <div className=''>
              <Lottie animationData={anim4} />
            </div>
            <div className='mt-6'>
            <div className="carousel carousel-center max-w-full p-4 space-x-4 bg-gray-200 rounded-box">
  <div className="carousel-item">
    <img src={img1} className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src={img2} className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src={img3} className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src={img4} className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src={img5} className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src={img6} className="rounded-box" />
  </div> 

</div>
            </div>
          </div>
          
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
