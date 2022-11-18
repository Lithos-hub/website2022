<template>
  <div class="app__wrapper">
    <div id="cursor"></div>
    <router-view></router-view>
    <div id="bg-blur">
      <div class="fixed object-none bg-1" />
      <div class="fixed object-none bg-2" />
      <div class="fixed object-none bg-3" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useAudioStore } from "./stores/audioStore";

const audioStore = useAudioStore();
const route = useRoute();
const audioFX1 = new Audio("audio/btn1.mp3");
const audioFX2 = new Audio("audio/btn2.mp3");
const audioFX3 = new Audio("audio/btn4.mp3");

const listenMouseTorch = () => {
  let cursor = document.querySelector("#cursor");
  if (window.innerWidth >= 768) {
    window.addEventListener("mousemove", (e) => {
      cursor.style.transition = "all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)";
      cursor.style.top = e.clientY + 5 + "px";
      cursor.style.left = e.clientX + 5 + "px";
    });
  } else {
    // => The light cursor doesn't have so much sense on mobile devices, so we'll hidden it
    cursor.style.display = "none";
  }
};

const listenSoundsFX = (isEnable) => {
  if (!isEnable) return;

  const stopAudio = (audio) => {
    audio.currentTime = 0;
    audio.pause();
  };

  const linksList = document.querySelectorAll("a");
  linksList.forEach((link) => {
    link.addEventListener("mouseenter", () => audioFX1.play());
    link.addEventListener("mouseleave", () => stopAudio(audioFX1));
  });
  const buttonsList = document.querySelectorAll("button");
  buttonsList.forEach((button) => {
    button.addEventListener("mouseenter", () => audioFX2.play());
    button.addEventListener("mouseleave", () => stopAudio(audioFX2));
  });
  const articlesList = document.querySelectorAll("article");
  articlesList.forEach((article) => {
    article.addEventListener("mouseenter", () => audioFX3.play());
    article.addEventListener("mouseleave", () => stopAudio(audioFX3));
  });
};

watch(
  () => route.path,
  (newVal, oldVal) => {
    if (newVal !== oldVal && audioStore.isPlayingMusic) {
      setTimeout(() => {
        listenSoundsFX(true);
      }, 1000);
    }
  }
);

watch(
  () => audioStore.isPlayingMusic,
  (newVal) => (newVal ? listenSoundsFX(true) : listenSoundsFX(false))
);

onMounted(() => listenMouseTorch());
</script>

<style lang="scss">
@import "./scss/variables.scss";
@import "./scss/app.scss";
* {
  cursor: none;
}
#cursor {
  position: fixed;
  background: rgba(255, 255, 255, 0.53);
  box-shadow: 0px 0px 2px white, 0px 0px 5px cyan, 0px 0px 8px purple,
    0px 0px 10px pink, 0px 0px 15px cyan, 0px 0px 20px blue;
  filter: drop-shadow(0px 0px 5px rgb(164, 249, 255));
  width: 5px;
  height: 5px;
  border-radius: 50%;
  z-index: 999;
  mix-blend-mode: screen;
  animation: cursor-blink 0.5s infinite;
}

#app {
  font-family: "Quicksand", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $mainDark;
  background: radial-gradient(#361443, #041317);
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  background-size: cover;
  box-shadow: inset 0px 0px 100px #1b021e, inset 0px 0px 50px black;
  animation: flash 1s cubic-bezier(0.165, 0.84, 0.44, 1) alternate;
  mix-blend-mode: screen;

  &:after {
    content: "";
    position: fixed;
    inset: 0;
    top: 25%;
    left: 25%;
    width: 100vw;
    aspect-ratio: 1/1;
    box-shadow: inset 30px -25px 50px #00c8ff, inset -30px 25px 50px #b700ff;
    mix-blend-mode: lighten;
    border-radius: 100%;
    z-index: -2;
    filter: blur(1rem);
    animation: rotate 15s linear infinite;
  }
}

@keyframes cursor-blink {
  0% {
    box-shadow: 0px 0px 2px white, 0px 0px 5px cyan, 0px 0px 18px purple,
      0px 0px 10px pink, 0px 0px 10px cyan, 0px 0px 20px blue;
  }
  25% {
    box-shadow: 0px 0px 10px white, 0px 0px 10px cyan, 0px 0px 21px purple,
      0px 0px 25px pink, 0px 0px 20px cyan, 0px 0px 30px blue;
  }
  50% {
    box-shadow: 0px 0px 4px white, 0px 0px 7px cyan, 0px 0px 24px purple,
      0px 0px 12px pink, 0px 0px 20px cyan, 0px 0px 20px blue;
  }
  75% {
    box-shadow: 0px 0px 8px white, 0px 0px 9px cyan, 0px 0px 15px purple,
      0px 0px 20px pink, 0px 0px 20px cyan, 0px 0px 10px blue;
  }
  100% {
    box-shadow: 0px 0px 12px white, 0px 0px 5px cyan, 0px 0px 20px purple,
      0px 0px 15px pink, 0px 0px 25px cyan, 0px 0px 33px blue;
  }
}

@keyframes flash {
  0% {
    opacity: 0;
    box-shadow: none;
  }
  100% {
    opacity: 1;
    box-shadow: inset 0px 0px 100px #1b021e, inset 0px 0px 50px black;
  }
}

* >>> body :not(#bg-blur) {
  z-index: 1;
}

#bg-blur {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  filter: blur(12rem);
  z-index: -1;
}

.bg-1 {
  background: radial-gradient(#0edfd4, transparent);
  animation: motion1 12s ease-out infinite;
  border-radius: 50%;
  mix-blend-mode: exclusion;
  z-index: -1;
  opacity: 0.25;
}
.bg-2 {
  background: radial-gradient(#df1515, transparent);
  animation: motion2 15s ease-in infinite alternate;
  border-radius: 50%;
  mix-blend-mode: color-dodge;
  z-index: -1;
  opacity: 0.25;
}
.bg-3 {
  background: radial-gradient(rgb(225, 0, 255), transparent);
  animation: motion3 12s ease infinite alternate;
  border-radius: 50%;
  mix-blend-mode: screen;
  z-index: -1;
  opacity: 0.25;
}

@keyframes motion1 {
  0% {
    opacity: 0.25;
    transform: translate(0%, 0%);
    width: 100%;
    height: 100%;
  }
  25% {
    opacity: 0.25;
    transform: translate(-25%, 25%);
    width: 80%;
    height: 80%;
  }
  50% {
    opacity: 0.4;
    transform: translate(0%, 50%);
    width: 75%;
    height: 75%;
  }
  75% {
    opacity: 0.5;
    transform: translate(25%, 25%);
    width: 80%;
    height: 80%;
  }
  100% {
    opacity: 0.25;
    transform: translate(0%, 0%);
    width: 100%;
    height: 100%;
  }
}

@keyframes motion2 {
  0% {
    opacity: 0.25;
    transform: translate(0%, 80%);
    width: 80%;
    height: 90%;
  }
  25% {
    opacity: 0.25;
    transform: translate(-20%, 60%);
    width: 70%;
    height: 70%;
  }
  50% {
    opacity: 0.4;
    transform: translate(0%, 40%);
    width: 80%;
    height: 80%;
  }
  75% {
    opacity: 0.5;
    transform: translate(25%, 80%);
    width: 60%;
    height: 60%;
  }
  100% {
    opacity: 0.25;
    transform: translate(0%, 80%);
    width: 80%;
    height: 90%;
  }
}

@keyframes motion3 {
  0% {
    opacity: 0.25;
    transform: translate(50%, 10%);
    width: 30%;
    height: 30%;
  }
  25% {
    opacity: 0.25;
    transform: translate(70%, 0%);
    width: 50%;
    height: 50%;
  }
  50% {
    opacity: 0.4;
    transform: translate(80%, -10%);
    width: 30%;
    height: 30%;
  }
  75% {
    opacity: 0.5;
    transform: translate(70%, 0%);
    width: 50%;
    height: 50%;
  }
  100% {
    opacity: 0.25;
    transform: translate(50%, 0%);
    width: 70%;
    height: 70%;
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg) translate(0%, 0%);
  }
  to {
    transform: rotate(360deg) translate(0%, 0%);
  }
}
</style>
