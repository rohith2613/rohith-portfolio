/* eslint-disable react/prop-types */

import { motion } from 'framer-motion';


const Title = ({name1,name2}) => {
  return (
    <motion.h1
      className="text-3xl font-extrabold text-transparent sm:text-5xl"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <span className="bg-gradient-to-r from-orange-500 via- to-blue-600 bg-clip-text">
        {name1}
      </span>
      <br className="sm:hidden" />
      <motion.span
        className="bg-gradient-to-r from-orange-500 via- to-blue-600 bg-clip-text sm:block"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        {name2}
      </motion.span>
    </motion.h1>
  );
};

export default Title;
