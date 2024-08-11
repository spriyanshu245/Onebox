import axios from "axios";
import { useState } from "react";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaCaretDown,FaEye,FaImage,FaRegSmile,FaUserMinus } from "react-icons/fa";
import { IoMdCode } from "react-icons/io";
import { IoLinkSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { TbSquareLetterA } from "react-icons/tb";

export const ReplyModal = ({ threadId, Close, fromEmail }) => {

    const [to, setTo] = useState(fromEmail ? fromEmail : '');
    const [from, setFrom] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const handleSendReply = async () => {
        const token = localStorage.getItem("token");
        try {
            const res = await axios.post(
                `https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadId}`,
                {
                    to: to,
                    from: from,
                    subject: subject,
                    body: body,
                }, 
                {
                    headers: {
                        Authorization: token,
                    },
                }
            );
            Close();
            console.log(res)
            alert(res)
        }
        
        catch (error) {
            console.error("Error :", error);
            alert(error)
            Close();
        }
    };

    return (
        <div className="bg-gray-400/25 fixed top-10 left-8 flex flex-wrap justify-center items-center h-full w-full z-20">
            <div className="bg-[#141517] w-1/2 h-5/6 rounded-lg border border-[#41464B]">
                <div className="flex justify-between items-center px-4 bg-[#23272C] rounded-t-lg py-2 border-b border-[#41464B]">
                    <div className="pl-4 text-sm">Reply</div>
                    <div onClick={Close}>
                        {" "}
                        <RxCross2 className="text-xl cursor-pointer" />
                    </div>
                </div>
                <div className="flex text-sm py-2 border-b border-[#41464B] pl-8">
                    <div className="text-[#BAB9BD]">To :</div>
                    <input
                        className="bg-transparent ml-4 w-4/5"
                        placeholder="Recipient's Email"
                        name="to"
                        required
                        value={to}
                        onChange={(event) => setTo(event.target.value)}
                    />
                </div>

                <div className="flex text-sm py-2 border-b border-[#41464B] pl-8">
                    <div className="text-[#BAB9BD]">From :</div>
                    <input
                        className="bg-transparent ml-4 w-4/5"
                        placeholder="Your Email"
                        name="from"
                        required
                        value={from}
                        onChange={(event) => setFrom(event.target.value)}
                    />
                </div>

                <div className="flex text-sm py-2 border-b border-[#41464B] pl-8">
                    <div className="text-[#BAB9BD]">Subject :</div>
                    <input
                        className="bg-transparent ml-4 w-4/5"
                        placeholder="Subject"
                        name="subject"
                        value={subject}
                        onChange={(event) => setSubject(event.target.value)}
                    />
                </div>

                <div className="flex text-sm py-2 border-b border-[#41464B] px-4 pr-8 pt-8 h-2/3">
                    <textarea
                        className="bg-transparent ml-4 w-full h-4/5"
                        placeholder="Message Body"
                        name="body"
                        required
                        value={body}
                        onChange={(event) => setBody(event.target.value)}
                    />
                </div>

                <div className="flex space-x-8 items-center h-16 ml-8 flex-wrap">
                    <div
                        className="bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] px-5 py-1 rounded-md flex items-center cursor-pointer"
                        onClick={handleSendReply}
                    >
                        Send <FaCaretDown className="ml-4" />
                    </div>
                    <div className="flex items-center text-[#ADADAD]">
                        <BsLightningChargeFill className="mr-3" />
                        Variables
                    </div>
                    <div className="flex items-center text-[#ADADAD]">
                        <FaEye className="mr-3" />
                        Preview Email
                    </div>
                    <span className="flex flex-row space-x-3 content-evenly text-xl text-[#ADADAD]">
                        <TbSquareLetterA />
                        <IoLinkSharp />
                        <FaImage />
                        <FaRegSmile />
                        <FaRegSmile />
                        <FaUserMinus />
                        <IoMdCode />
                    </span>
                </div>
            </div>
        </div>
    )
}

// {
//     "toName": "Mitrajit",
//     "to": "chandra.rupam@gmail.com",
//     "from": "mitrajit2022@gmail.com",
//     "fromName": "Mitrajit",
//     "subject": "Optimize Your Recruitment Efforts with Expert Support",
//     "body": "<p>Hello how are you</p>",
//     "references": [
//         "<dea5a0c2-336f-1dc3-4994-191a0ad3891a@gmail.com>",
//         "<CAN5Dvwu24av80BmEg9ZVDWaP2+hTOrBQn9KhjfFkZZX_Do88FA@mail.gmail.com>",
//         "<CAN5DvwuzPAhoBEpQGRUOFqZF5erXc=B98Ew_5zbHF5dmeKWZMQ@mail.gmail.com>",
//         "<a1383d57-fdee-60c0-d46f-6bc440409e84@gmail.com>"
//     ],
//     "inReplyTo": "<a1383d57-fdee-60c0-d46f-6bc440409e84@gmail.com>"
// }
