import { defineStore } from "pinia";

export const useAudioStore = defineStore("audioStore", {
  state: () => ({
    isPlayingMusic: false,
  }),
  actions: {
    play() {
      this.isPlayingMusic = true;
    },
    pause() {
      this.isPlayingMusic = false;
    },
  },
});
