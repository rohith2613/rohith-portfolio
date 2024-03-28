import Lottie from 'lottie-react';
import annim5 from '../assets/Animation - 1711473578108.json';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Title from '../reusablecom/Title';

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xymb2od', 'template_ahwmcbt', formRef.current, {
        publicKey: 'aCCfea2GMTFpYT37D',
        
      })
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
          setSuccess(true);
          setError(false);
          alert('Message sent successfully!');
        },
        (error) => {
          console.error('Error sending email:', error);
          setError(true);
          setSuccess(false);
        }
      );
  };

  return (
    <div className='mt-8'>
      <div className='text-center'>
      <Title  name1={"Contact Me"} />
      <h1 className='text-lg mt-2 font-mono text-black font-bold'>Let’s Create Something Amazing Together</h1>
      </div>
    
    
    <section className=" relative flex flex-wrap lg:h-screen lg:items-center justify-center">
      
      
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 flex items-center justify-between">
        {/* <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Contact Me</h1>
          <p className="mt-4 text-gray-500">
            Let’s collaborate to create impactful digital experiences. Reach out, and let’s build something amazing together.
          </p>
        </div> */}
        

        <form ref={formRef} onSubmit={sendEmail} className="mt-8 w-full max-w-md bg-gray-100 p-4 rounded-xl m-auto">
        <h1 className='font-semibold mb-2 underline text-gray-400'>Mail me directly through this form </h1>
          <div className="mb-4">
            <label htmlFor="name" className="block text-black">Name:</label>
            <input type="text" id="name" name="name"  required className="w-full bg-orange-400 border-gray-300 p-2 rounded-md text-black shadow-sm focus:border-gray-500 focus:ring focus:ring-orange-800 focus:ring-opacity-50" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-black">Email:</label>
            <input type="email" id="email" name="email"  required className="w-full bg-orange-400 border-gray-300 p-2 rounded-md text-black shadow-sm focus:border-gray-500 focus:ring focus:ring-orange-800 focus:ring-opacity-50" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-black">Message:</label>
            <textarea id="message" name="message"  required className="w-full bg-orange-400 border-gray-300 p-2 rounded-md text-black shadow-sm focus:border-gray-500 focus:ring focus:ring-orange-800 focus:ring-opacity-50"></textarea>
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-vlue-700">Send</button>
          {error && ""}
          {success && ""}
          
        </form>
      </div>

      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2 flex justify-center items-center">
        <Lottie animationData={annim5} className='h-96' />
      </div>
    </section>
    </div>
  );
};

export default Contact;
