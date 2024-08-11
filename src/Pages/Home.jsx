import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Header } from '../Components/Header';
import { Sidebar } from '../Components/Sidebar';
import { MailView } from '../Components/MailView';
import { HomeView } from '../Components/HomeView';


export const Home = () => {
  const [token_, setToken_] = useState([])
  const [selectedMenu, setSelectedMenu] = useState([])

  const Navigate = useNavigate();

  const token = new URLSearchParams(window.location.search).get('token');

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", `Bearer ${token}`);
      setToken_(token)
    }
    else { Navigate("/login") }
  }, [token_]);

  const handleClick = (path) => {
    setSelectedMenu(path)
  };

  return (
    <>
      <div className="h-screen w-screen dark:bg-black bg-white pl-14">
        <Sidebar onClick={handleClick} />
        <Header />
        {selectedMenu === "/inbox" ? <MailView /> : <HomeView />}
      </div>
    </>
  )
}
