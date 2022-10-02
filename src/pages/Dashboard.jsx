import React from "react";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "preact/hooks";
import Compose from "../components/Compose";
import MailBox from "../components/MailBox";
import useStore from "../utils/store";
import getInBox from "../utils/getInbox";

export default function Dashboard() {
  const [modal, setModal] = useState(false);
  const store = useStore();
  const allMails = store.allMails;
  useEffect(() => {
    // fetchMails();
    getInBox().then((res) => {
      store.setAllMails(res);
    });
    console.log(store.allMails);
  }, []);
  return (
    <div className="flex flex-row overflow-y-scroll">
      <Sidebar modal={modal} setModal={setModal} />
      <MailBox mails={allMails} />
      {modal && <Compose setModal={setModal} />}
    </div>
  );
}
