import create from "zustand";

const useStore = create((set) => ({
  currentAccount: "",
  allMails: [],
  sentMails: [],
  setAllMails: (value) => set({ allMails: value }),
  setSentMails: (value) => set({ sentMails: value }),
  setCurrentAccount: (value) => set({ currentAccount: value }),
}));

export default useStore;
