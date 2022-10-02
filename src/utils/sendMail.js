import useContract from "./useContract";

async function sendMail(reciever, subject, body, timestamp, hash, filename) {
  let IPFS_HASH = "",
    FILENAME = "";
  if (hash === "") {
    IPFS_HASH = "";
  } else {
    IPFS_HASH = hash;
  }
  if (filename === "") {
    FILENAME = "";
  } else {
    FILENAME = filename;
  }
  try {
    const MailContract = useContract();
    const sendMail = await MailContract.sendMail(
      reciever,
      subject,
      body,
      timestamp,
      IPFS_HASH,
      FILENAME
    );
    return sendMail;
  } catch (error) {
    throw new Error("Something went wrong");
  }
}
export default getInBox;
