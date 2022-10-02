import convertDate from "../utils/convertDate";


export default function MailBox({mails}) {
    var date= '';
    

// console.log(formattedTime);

  return (
    <div>
        {mails && mails.map((mail,i)=>{
            var date = convertDate(mail.timeStamp)
            // .then((res)=>{date=res});
            console.log(date);
            return <div>
                <h1>{mail.subject}</h1>
                <span>{mail.sender}</span>
                <br/>
                <span>{date}</span>
            </div>
        })}
    </div>
  )
}
