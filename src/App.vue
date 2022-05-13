<template>
  <div class="app__wrapper">
    <div id="cursor"></div>
    <div class="background__noise"></div>
    <router-view class="routerView"></router-view>
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
  if (window.innerWidth >= 768) { // => This doesn't make much sense on mobile devices
    window.addEventListener("mousemove", (e) => {
      cursor.style.transition = "all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)";
      cursor.style.top = e.clientY + 5 + "px";
      cursor.style.left = e.clientX + 5 + "px";
    });
  } else {
    cursor.style.display = "none";
  }
};

const listenSoundsFX = (isEnable) => {
  if (isEnable) {
    const linksList = document.querySelectorAll("a");
    linksList.forEach((link) => {
      link.addEventListener("mouseenter", () => audioFX1.play());
      link.addEventListener("mouseleave", () => {
        audioFX1.currentTime = 0;
        audioFX1.pause();
      });
    });
    const buttonsList = document.querySelectorAll("button");
    buttonsList.forEach((button) => {
      button.addEventListener("mouseenter", () => audioFX2.play());
      button.addEventListener("mouseleave", () => {
        audioFX2.currentTime = 0;
        audioFX2.pause();
      });
    });
    const articlesList = document.querySelectorAll("article");
    articlesList.forEach((article) => {
      article.addEventListener("mouseenter", () => audioFX3.play());
      article.addEventListener("mouseleave", () => {
        audioFX3.currentTime = 0;
        audioFX3.pause();
      });
    });
  }
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
  background-size: 0% 0%;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  box-shadow: inset 0px 0px 100px #1b021e, inset 0px 0px 50px black;
  animation: flash 1s cubic-bezier(0.165, 0.84, 0.44, 1),
    gradientMotion 10s cubic-bezier(0.165, 0.84, 0.44, 1) infinite
      alternate-reverse;
  mix-blend-mode: screen;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    box-shadow: inset 0px 0px 100px #1b021e, inset 0px 0px 50px black;
    mix-blend-mode: color-dodge;
    z-index: -1;
    animation: flash 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
}
.background__noise {
  background-image: url("./assets/img/noise.png");
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: backgroundMotion 1s infinite linear alternate-reverse;
}

@keyframes backgroundMotion {
  0% {
    background-position: 0 0;
  }
  25% {
    background-position: 100% 0;
  }
  50% {
    background-position: 0 100%;
  }
  75% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0 0;
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

@keyframes gradientMotion {
  0% {
    background-size: 100% 100%;
  }
  100% {
    background-size: 300% 200%;
  }
}
</style>
