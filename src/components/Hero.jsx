import Lottie from "lottie-react"
import anim1 from '../assets/Animation - 1711449684726.json';
import button1 from '../assets/Animation - 1711451341711.json';
import { FaLinkedin, FaSquareGithub, FaSquareInstagram } from "react-icons/fa6";

import Title from "../reusablecom/Title";


const Hero = () => {
  return (

<section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
    <Title name1="Sriramula Rohith" name2="Software Developer" />

      <p className="hidden text-gray-500 md:mt-4 md:block">
      Welcome to my portfolio! I’m Rohith, a passionate full-stack developer with a knack for creating efficient, scalable, and user-friendly web applications. With a strong foundation in both front-end and back-end development, I strive to deliver solutions that not only meet functional requirements but also provide a seamless user experience. Explore my projects to see how I use technology to solve problems and create value.
      </p>

      <div className="mt-4 md:mt-8">
        {/* <a
          href="#"
          className="inline-block rounded bg-orange-400 px-12 py-3 text-sm font-medium text-white transition hover:bg-orange-500 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Hire Me
        </a> */}
        <a href="#">
        <Lottie className="h-16" animationData={button1} />
        </a>
        
      </div>
      <div className="mt-8 flex gap-x-12  justify-center">
        <a className="inline-block rounded bg-blue-700 px-7 py-3 text-xl font-medium text-white transition hover:bg-blue-500 focus:outline-none focus:ring focus:ring-orange-500" href="https://www.linkedin.com/in/rohith-sriramula-3962412a5/" target="_blank"><FaLinkedin /></a>
        <a className="inline-block rounded bg-blue-700 px-7 py-3 text-xl font-medium text-white transition hover:bg-blue-500 focus:outline-none focus:ring focus:ring-orange-500"  href="https://github.com/rohith2613" target="_blank"><FaSquareGithub /></a>
        <a className="inline-block rounded bg-blue-700 px-7 py-3 text-xl font-medium text-white transition hover:bg-blue-500 focus:outline-none focus:ring focus:ring-orange-500"  href="#"><FaSquareInstagram /></a>
      </div>
    </div>
  </div>

  <Lottie className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]" animationData={anim1}  />



  
</section>
  )
}

export default Hero
