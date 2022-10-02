import React from "react";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "preact/hooks";
import Compose from "../components/Compose";
import MailBox from "../components/MailBox";
import useStore from "../utils/store";
import getSentMails from "../utils/getSentMails";
import convertDate from "../utils/convertDate";

export default function Dashboard() {
  const [modal, setModal] = useState(false);
  const store = useStore();
  const allMails = store.sentMails;
  useEffect(() => {
    // fetchMails();
    getSentMails().then((res) => {
      store.setSentMails(res);
      console.log(store.sentMails);
    });
  }, []);
  return (
    <div className="flex flex-row">
      <Sidebar modal={modal} setModal={setModal} />
      <div className="bg-slate-500 min-w-screen h-screen overflow-y-auto overflow-x-hidden">
        <div className="text-4xl text-white p-6 font-semibold ">SentBox</div>
        <hr className="border-t-2 border-black mx-4"/>
        {allMails &&
          allMails.map((mail, i) => {
            var date = convertDate(mail.timeStamp);
            // .then((res)=>{date=res});
            console.log(date);
            return (
              <div className="bg-slate-300 w-screen my-2 p-4 mx-2 rounded-sm ">
                <span>To : {mail.reciever}</span>
                <h1>Subject: {mail.subject}</h1>
                <br />
                <span>At {date}</span>
                <br />
                <span>{mail.body}</span>
              </div>
            );
          })}
      </div>
      {modal && <Compose setModal={setModal} />}
    </div>
  );
}
