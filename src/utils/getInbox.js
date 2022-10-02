import useContract from "./useContract";

async function getInBox() {
  try {
    const MailContract = useContract();
    const allMails = await MailContract.getMyInBox();
    console.log(allMails);
    return allMails;
  } catch (error) {
    throw new Error("Something went wrong");
  }
}
export default getInBox;
