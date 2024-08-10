import React from 'react'
import { Header } from '../Components/Header';
import { Sidebar } from '../Components/Sidebar';
import { MailView } from '../Components/MailView';

export const Home = () => {

  const handleClick = (path) => {
    console.log(path)
  };

  return (
    <>
    <div className="h-screen w-screen dark:bg-black bg-white pl-14">
      <Sidebar onClick={handleClick} />
      <Header />
      <MailView/>
    </div>
    </>
  )
}
