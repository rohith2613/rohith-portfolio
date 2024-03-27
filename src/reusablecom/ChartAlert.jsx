// ChatAlert.js

import  { useState, useEffect } from 'react';

const ChatAlert = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000); // Adjust the duration as needed (in milliseconds)

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return visible ? (
    <div className="flex items-center  bg-gray-200 text-gray-400 py-2 px-4 rounded-md">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="size-10 rounded-full object-cover"
      />
      <div className="font-semibold">Hello there!</div>
      <div>Welcome to my portfolio. Feel free to look around!</div>
    </div>
  ) : null;
};

export default ChatAlert;
