
import { motion } from 'framer-motion';
import Title from '../reusablecom/Title';
import { FaBuildingCircleArrowRight } from 'react-icons/fa6';

const Experience = () => {
  return (
    <>
      <div className='text-center'>
        <Title name1={"Experience"} />
      </div>

      <div className='mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8 mt-6 ml-3'>
        <ol className="items-center sm:flex">
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mb-6 sm:mb-0"
          >
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-orange-600 sm:ring-8 dark:ring-gray-800 shrink-0">
                <FaBuildingCircleArrowRight />
              </div>
              <div className="hidden sm:flex w-full bg-gray-700 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg font-bold text-gray-900 dark:text-black">AeroAgies</h3>
              <time className="block mb-2 text-sm font-semibold leading-none text-gray-400 dark:text-gray-800">UI Developer</time>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-800">February, 2024 - currently</time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">• Build reusable React components and optimize them for performance across devices and browsers.
Translate designs into high-quality, performant React code.</p>
            </div>
          </motion.li>
          
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden mb-6 sm:mb-0 md:block"
          >
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-orange-600 sm:ring-8 dark:ring-gray-800 shrink-0">
                <FaBuildingCircleArrowRight />
              </div>
              <div className="hidden sm:flex w-full bg-gray-700 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg font-bold text-gray-900 dark:text-black">Afame Technologies</h3>
              <time className="block mb-2 text-sm font-semibold leading-none text-gray-400 dark:text-gray-800">Web  Developer</time>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-800">March, 2024 - currently</time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">I`ll be focusing on MERN Stack and related projects, and I can`t wait to bring my skills to the table!</p>
            </div>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden mb-6 sm:mb-0 md:block "
          >
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-orange-600 sm:ring-8 dark:ring-gray-800 shrink-0">
                <FaBuildingCircleArrowRight />
              </div>
              <div className="hidden sm:flex w-full bg-gray-700 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg font-bold text-gray-900 dark:text-black">Trip Fox</h3>
              <time className="block mb-2 text-sm font-semibold leading-none text-gray-400 dark:text-gray-800">Lead Web Developer Intern</time>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-800">February, 2024 - currently</time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">I`ll be focusing on MERN Stack and related projects, and I can`t wait to bring my skills to the table!</p>
            </div>
          </motion.li>

          
        </ol>
      </div>
    </>
  )
}

export default Experience;
