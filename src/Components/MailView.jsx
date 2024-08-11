import { useEffect, useState } from "react";
import axios from "axios";
import { ActivitesTab } from "./ActivitesTab"
import { AllMail } from "./AllMail"
import { MailFeed } from "./MailFeed"
import logo from '../assets/logo.svg';

export const MailView = () => {

  const [allMails, setAllMails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMail, setSelectedMail] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const res = await axios.get(
        "https://hiring.reachinbox.xyz/api/v1/onebox/list",
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setAllMails(res.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error :", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);


  if (loading) {
    return (
      <div className="bg-[#ECEFF3] dark:bg-black dark:text-white text-[#5B5F66] flex h-screen w-full justify-center items-center">
        <div className="animate-pulse">
          <img src={logo} className="h-11 w-12 bg-[#5B5F66] dark:bg-white rounded-full scale-100 animate-ping" alt="Loading" />
        </div>
      </div>
    );
  }
  const handleSelect = (threadId) => {
    setSelectedMail(threadId);
  };

  return (
    <>
      <div className="bg-[#ECEFF3] dark:bg-black text-white pt-16 flex w-full  h-full">
        <div className="w-1/4 ">
          <AllMail allMails={allMails} handleSelect={handleSelect} fetchData={fetchData}/>
        </div>
        <div className="w-2/4">
          <MailFeed threadId={selectedMail} fetchData={fetchData}/>
        </div>
        <div className="w-1/4">
          <ActivitesTab />
        </div>
      </div>
    </>
  )
}
