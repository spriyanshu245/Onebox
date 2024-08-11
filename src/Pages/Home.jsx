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
    else { Navigate("/Onebox/login") }
  }, [token_]);

  const handleClick = (path) => {
    setSelectedMenu(path)
  };

  return (
    <>
      <div className="h-screen w-screen dark:bg-black bg-white pl-14 overflow-hidden">
        <Sidebar onClick={handleClick} />
        <Header />
        {selectedMenu === "/inbox" ? <MailView /> : <HomeView />}
      </div>
    </>
  )
}

// var data = '{\n    "toName": "Mitrajit",\n    "to": "chandra.rupam@gmail.com",\n    "from": "mitrajit2022@gmail.com",\n    "fromName": "Mitrajit",\n    "subject": "Optimize Your Recruitment Efforts with Expert Support",\n    "body": "<p>Hello how are you</p>",\n    "references": [\n        "<dea5a0c2-336f-1dc3-4994-191a0ad3891a@gmail.com>",\n        "<CAN5Dvwu24av80BmEg9ZVDWaP2+hTOrBQn9KhjfFkZZX_Do88FA@mail.gmail.com>",\n        "<CAN5DvwuzPAhoBEpQGRUOFqZF5erXc=B98Ew_5zbHF5dmeKWZMQ@mail.gmail.com>",\n        "<a1383d57-fdee-60c0-d46f-6bc440409e84@gmail.com>"\n    ],\n    "inReplyTo": "<a1383d57-fdee-60c0-d46f-6bc440409e84@gmail.com>"\n}';

