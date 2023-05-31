import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "darkmode",
  storage: localStorage,
});

export interface Mode {
  mode: boolean;
}

export const darkmode = atom<boolean>({
  key: "mode",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
