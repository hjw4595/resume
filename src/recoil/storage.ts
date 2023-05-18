import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "darkmode",
  storage: localStorage,
});

type Mode = boolean;

export const darkmode = atom<Mode>({
  key: "mode",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
