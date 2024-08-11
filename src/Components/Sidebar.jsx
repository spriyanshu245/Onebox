import { useState } from "react";
import { RiHome5Fill, RiMailFill, RiUserSearchLine } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { SiElasticstack } from "react-icons/si";
import { FaInbox } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import logo from '../assets/logo.svg';

export const Sidebar = ({onClick}) => {

  const [click, setClick] = useState('/');

  const handleClick = (path) => {
    setClick(path)
    onClick(path);
};
  
  return (
    <div className="dark:bg-[#101113] bg-white overflow-y-scroll no-scrollbar h-screen w-14 flex flex-col justify-between items-center py-6 border-r-2 dark:border-[#343A40] border-[#E0E0E0] left-0 top-0 fixed z-10">
      <div className="rounded-xl">
        <img src={logo} className="h-8 object-left" alt="Logo" />
      </div>
      <div className="text-[#AEAEAE] text-2xl space-y-10">
        <div className={`cursor-pointer p-1 ${click === '/home' ? 'bg-gray-600 rounded-lg' : ''}`} onClick={() => handleClick('/home')}>
            <RiHome5Fill />
        </div>
        <div className={`cursor-pointer p-1 ${click === '/search' ? 'bg-gray-600 rounded-lg' : ''}`} onClick={() => handleClick('/search')}>
          <RiUserSearchLine />
        </div>
        <div className={`cursor-pointer p-1 ${click === '/mail' ? 'bg-gray-600 rounded-lg' : ''}`} onClick={() => handleClick('/mail')}>
          <RiMailFill />
        </div>
        <div className={`cursor-pointer p-1 ${click === '/send' ? 'bg-gray-600 rounded-lg' : ''}`} onClick={() => handleClick('/send')}>
          <IoIosSend />
        </div>
        <div className={`cursor-pointer p-1 ${click === '/list' ? 'bg-gray-600 rounded-lg' : ''}`} onClick={() => handleClick('/list')}>
          <SiElasticstack />
        </div>
        <div className={`cursor-pointer p-1 ${click === '/inbox' ? 'bg-gray-600  rounded-lg' : ''}`} onClick={() => handleClick('/inbox')}>
          <FaInbox />
        </div>
        <div className={`cursor-pointer p-1 ${click === '/stats' ? 'bg-gray-600 rounded-lg' : ''}`} onClick={() => handleClick('/stats')}>
          <IoStatsChartSharp />
        </div>
      </div>
      <div className="text-white bg-green-500 p-2 rounded-full">
        PS
      </div>
    </div>
  );
}