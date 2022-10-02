import { useState } from "preact/hooks";
import sendMail from "../utils/sendMail";

export default function Compose({ setModal }) {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  async function sendMAIL() {
    if (to.length != 42) {
      alert("Enter Correct Eth Address")
      return;
    }
    let txn = await sendMail(to, subject, body, "", "");
    alert("Mail sent");
    setModal(false);
  }
  return (
    <section className="absolute top-1/4 left-1/4 overflow-y-hidden w-3/5 bg-[#f2f6fc] shadow-lg z-50">
      <div className=" h-96 border-black rounded-2xl">
        <nav>
          <ul className="list-none">
            <li onClick={() => setModal(false)}>
              <svg
                className="hover:bg-red-600 transition ease-in-out w-12"
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
              >
                <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
              </svg>
            </li>
          </ul>
        </nav>
        <div className="flex items-center px-4">
          <h4 className="text-lg">To: </h4>
          <input
            className="p-2 m-2 bg-[#f2f6fc] w-full focus:outline-none"
            type="text"
            onChange={(e) => {
              e.preventDefault();
              setTo(e.target.value);
            }}
            name=""
            value={to}
            id=""
          />
        </div>
        <hr className="border-t-2 mx-4 border-black" />
        <div className="flex items-center px-4">
          <h4 className="text-lg">Subject: </h4>
          <input
            className="p-2 m-2 bg-[#f2f6fc] w-full focus:outline-none overflow-hidden"
            type="text"
            value={subject}
            onChange={(e) => {
              e.preventDefault();
              setSubject(e.target.value);
            }}
            name=""
            id=""
          />
        </div>
        <hr className="border-t-2 mx-4 border-black" />
        <div className="flex items-center px-4">
          <h4 className="text-lg">Body: </h4>
          <textarea
            className="p-2 m-2 w-full bg-[#f2f6fc] flex items-center focus:outline-none overflow-hidden"
            onChange={(e) => {
              e.preventDefault();
              setBody(e.target.value);
            }}
            type="text"
            name=""
            id=""
          />
        </div>
        <button className="bg-red-500 text-2xl p-2 mx-5 rounded-md" onClick={sendMAIL}>
          Send
        </button>
      </div>
    </section>
  );
}
