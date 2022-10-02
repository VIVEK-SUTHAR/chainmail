import useContract from "./useContract";

async function getSentMails() {
  try {
    const MailContract = useContract();
    const allMails = await MailContract.getSentEmails();
    console.log(allMails);
    return allMails;
  } catch (error) {
    throw new Error("Something went wrong");
  }
}
export default getSentMails;
