import React from "react";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "preact/hooks";
import Compose from "../components/Compose";
import MailBox from "../components/MailBox";
import useStore from "../utils/store";
import getSentMails from "../utils/getSentMails";

export default function Dashboard() {
  const [modal, setModal] = useState(false);
  const store = useStore();
  const allMails = store.sentMails;
  useEffect(() => {
    // fetchMails();
    getSentMails().then((res) => {
      store.setSentMails(res);
    });
  }, []);
  return (
    <div className="flex flex-row">
      <Sidebar modal={modal} setModal={setModal} />
      <div className="bg-slate-500">
        <div className="text-4xl text-white">SentBox</div>
        {mails &&
          mails.map((mail, i) => {
            var date = convertDate(mail.timeStamp);
            // .then((res)=>{date=res});
            console.log(date);
            return (
              <div className="bg-slate-300 w-screen my-2 p-4 mx-2 rounded-lg">
                <span>From : {mail.sender}</span>
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
