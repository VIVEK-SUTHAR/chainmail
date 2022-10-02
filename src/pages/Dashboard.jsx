import React from 'react'
import Sidebar from '../components/Sidebar'
import { useState } from 'preact/hooks'
import Compose from '../components/Compose'
import MailBox from "../components/MailBox";
export default function Dashboard() {
  const store = useStore();
  const allMails = store.allMails;
  useEffect(() => {
    // fetchMails();
    getInBox()
    .then((res)=>{store.setAllMails(res)});
    console.log(store.allMails);
  }, [allMails]);
//   async function fetchMails() {
//     // let allMails = await getInBox()
//     store.setAllMails(allMails);
//     console.log(store.allMails);
//   }
  return (
    <div className="flex flex-row">
      <Sidebar />
      <MailBox mails={allMails} />
      </div>
  );
}
