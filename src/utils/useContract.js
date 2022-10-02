import { ethers } from "ethers";
import { CONTRACT_ADDRESS, ABI } from "../constants";
const useContract = () => {
  try {
    const { ethereum } = window;
    if (!ethereum) return;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
    return contract;
  } catch (error) {
    throw new Error("Something went wrong");
  }
};
export default useContract;
