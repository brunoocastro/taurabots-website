import { atom } from "recoil";

export const sessionAtom = atom({
  key: 'session',
  default: {
    user: null,
    token: null,
  },
});