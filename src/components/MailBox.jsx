import convertDate from "../utils/convertDate";

export default function MailBox({ mails }) {

  return (
    <div className="bg-slate-500 flex-1 ">
    <div className="text-4xl text-white p-4 font-semibold">All Mails</div>
    <hr className="border-black border-t-2 mx-4"/>
      {mails &&
        mails.map((mail, i) => {
          var date = convertDate(mail.timeStamp);
          // .then((res)=>{date=res});
          console.log(date);
          return (
            <div className="bg-slate-300 w-screen my-2 p-4 mx-2 rounded-sm">
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
  );
}
