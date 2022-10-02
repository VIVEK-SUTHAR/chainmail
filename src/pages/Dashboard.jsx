import React from 'react'
import Sidebar from '../components/Sidebar'
import { useState } from 'preact/hooks'
import Compose from '../components/Compose'
export default function Dashboard() {
  const [modal,setModal]=useState(false)
  return (
    <div>
        <Sidebar modal={modal} setModal={setModal} />
        {modal && <Compose setModal={setModal}/> }
    </div>
  );
}
