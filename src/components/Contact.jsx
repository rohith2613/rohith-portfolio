
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      whileHover={{ scale: 1.1 }}
    >
      <h2>Contact Me</h2>
      <p>Email: your@email.com</p>
      <p>Phone: +1234567890</p>
    </motion.section>
  );
};

export default Contact;
