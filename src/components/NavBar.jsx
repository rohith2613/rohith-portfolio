import Resume from '../assets/top-resume_compressed.pdf';
import { IoIosCloudDownload } from "react-icons/io";
import ChatAlert from '../reusablecom/ChartAlert';



const Navbar = () => {
  return (
    <nav className="bg-gray-50 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-gray-50 font-semibold">
          <ChatAlert />
        </div>
        <div>
         
          <a href={Resume} download className="text-gray-500 bg-orange-500 p-2 rounded-lg flex items-center gap-2 hover:text-gray-300">Resume <span><IoIosCloudDownload /></span></a>
          
          
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
