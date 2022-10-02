import React from "react";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "preact/hooks";
import Compose from "../components/Compose";
import useStore from "../utils/store";

export default function Dashboard() {
  const [modal, setModal] = useState(false);
  let data = window.location.pathname.slice(8);
  const store = useStore();
  let currentMail = store.allMails[parseInt(data)];
  return (
    <div className="flex flex-row">
      <Sidebar modal={modal} setModal={setModal} />
      <div className="bg-slate-500 w-screen h-screen overflow-y-auto overflow-x-hidden">
        <div className="text-4xl text-white px-8">SentBox</div>
        <div className="h-screen mx-5 my-5 rounded-md bg-slate-300 p-10">
          <div className="text-3xl">From : {currentMail.sender}</div>
          <div className="text-2xl my-4">Subject : {currentMail.subject}</div>
          <div className="text-2xl my-4">{currentMail.body}</div>
        </div>
      </div>
      {modal && <Compose setModal={setModal} />}
    </div>
  );
}
