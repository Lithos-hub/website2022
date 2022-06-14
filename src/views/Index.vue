<template>
  <div class="index">
    <div class="flicker--fast index__connector index__topConnector"></div>
    <div class="flicker--mid index__connector index__rightConnector"></div>
    <div class="flicker--slow index__connector index__bottomConnector"></div>
    <div class="flicker--fast index__connector index__leftConnector"></div>
    <img
      src="../assets/img/corner.svg"
      alt="corner"
      class="flicker--mid index__corner index__corner--topLeft"
    />
    <img
      src="../assets/img/corner.svg"
      alt="corner"
      class="flicker--slow index__corner index__corner--topRight"
    />
    <img
      src="../assets/img/corner.svg"
      alt="corner"
      class="flicker--fast index__corner index__corner--bottomLeft"
    />
    <img
      src="../assets/img/corner.svg"
      alt="corner"
      class="flicker--fast index__corner index__corner--bottomRight"
    />
    <section class="index__innerWrapper">
      <section class="index__title">
        <h2>Carlos Segura García</h2>
        <h1>
          <span class="text-h1 flicker--fast">F</span>ron<span
            class="text-h1 flicker--slow"
            >t</span
          >-end <span class="text-h1 flicker--mid">D</span>evelop<span
            class="text-h1 flicker--fast"
            >e</span
          >r
        </h1>
        <div class="musicPlayer__wrapper">
          <button class="index__musicPlayer" @click="playMusic">
            <mdicon
              class="music__icon"
              :name="isPlayingMusic ? 'pause' : 'play'"
              size="40"
            />
          </button>
        </div>
        <p class="index__musicPlayer--tooltip">
          {{ !isPlayingMusic ? "Click to play" : "Click to pause" }}
        </p>
      </section>
      <nav class="navbar navbar__top d-flex space-between">
        <router-link to="/about">
          <div class="dot__wrapper">
            <div class="navbar__dot"></div>
            <span>Who I am</span>
          </div>
        </router-link>
        <router-link to="/cv">
          <div class="dot__wrapper">
            <div class="navbar__dot"></div>
            <span>Where I come from</span>
          </div>
        </router-link>
        <router-link to="/portfolio">
          <div class="dot__wrapper">
            <div class="navbar__dot"></div>
            <span>What I do</span>
          </div>
        </router-link>
      </nav>
      <nav class="navbar navbar__subBottom d-flex space-around">
        <mdicon
          class="contact__icon"
          name="github"
          size="30"
          @click="goTo('https://github.com/Lithos-hub')"
        />
        <mdicon
          class="contact__icon"
          name="gmail"
          size="30"
          @click="goTo('mailto:lithos.contact@gmail.com')"
        />
        <mdicon
          class="contact__icon"
          name="linkedin"
          size="30"
          @click="goTo('https://www.linkedin.com/in/carlos-segura-garcia/')"
        />
      </nav>
    </section>
    <div class="index__bottomSide"></div>
    <div class="index__leftSide"></div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useAudioStore } from "../stores/audioStore";

const audio = new Audio("audio/soundtrack.mp3");
audio.loop = true;

const audioStore = useAudioStore();

const isPlayingMusic = computed(() => audioStore.isPlayingMusic);

const playMusic = () => {
  if (audio.paused) {
    audio.play();
    audioStore.play();
  } else {
    audio.pause();
    audioStore.pause();
  }
};

const goTo = (link) => window.open(link, "_blank");
</script>

<style lang="scss" scoped>
@import "../scss/app.scss";
@import "../scss/variables.scss";

.flicker--fast {
  animation: flicker 5s linear infinite;
  animation-delay: 1s;
}
.flicker--mid {
  animation: flicker 8s linear infinite;
  animation-delay: 2s;
}
.flicker--slow {
  animation: flicker 12s linear infinite;
  animation-delay: 4s;
}
.music__icon {
  color: rgb(156, 203, 235);
}
.musicPlayer__wrapper {
  transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  filter: drop-shadow(0px 0px 50px rgb(0, 247, 255));
  &:hover {
    filter: drop-shadow(0px 0px 50px rgb(255, 0, 208));
  }
}

button {
  border: none;
  background: none;
  outline: none;
}

button,
.index__musicPlayer {
  transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  position: relative;
  margin: 0 auto;
  width: 100px;
  height: 60px;
  padding: 5px;
  clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
  filter: drop-shadow(0px 0px 50px rgb(0, 247, 255));
  border-top: 1px solid white;
  border-bottom: 1px solid cyan;
  border-radius: 10px;

  &:hover {
    transform: scale(1.2);
    filter: drop-shadow(0px 0px 50px rgb(255, 0, 208));

    .music__icon {
      color: white;
    }
  }

  &:active {
    background: white;
    transform: scale(1.2);
  }
}

.index__musicPlayer--tooltip {
  position: relative;
  margin: 0 auto;
  margin-top: 25px;
  width: 100px;
  height: 50px;
  background: linear-gradient(120deg, #b700ff, #00c8ff);
  filter: brightness(2);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes flicker {
  0%,
  19.999%,
  22%,
  62.999%,
  64%,
  64.999%,
  70%,
  100% {
    opacity: 0.99;
  }
  20%,
  21.999%,
  63%,
  63.999%,
  65%,
  69.999% {
    opacity: 0.7;
  }
}

@media screen and (min-width: 768px) {
  span {
    font-size: 18px;
  }
  .index__title {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h2 {
      color: rgba(255, 255, 255, 0.733);
      font-weight: lighter;
    }

    h1 {
      color: rgb(255, 255, 255);
      font-weight: lighter;
      text-shadow: 0px 0px 2px white, 0px 0px 10px cyan, 0px 0px 20px blue;
      text-transform: uppercase;
      letter-spacing: 10px;
    }
  }

  .index__corner {
    position: fixed;
    filter: drop-shadow(0px 0px 5px #00ccff);
    z-index: 1;
    width: 200px;
    height: 200px;
  }
  .index__corner--topLeft {
    top: -40px;
    left: -40px;
    transform: rotate(90deg);
  }
  .index__corner--topRight {
    top: -40px;
    right: -25px;
    transform: rotate(180deg);
  }
  .index__corner--bottomRight {
    bottom: -25px;
    right: -40px;
    transform: rotate(270deg);
  }
  .index__corner--bottomLeft {
    bottom: -40px;
    left: -30px;
    transform: rotate(0deg);
  }

  .index__connector {
    z-index: 0;
    position: absolute;
    background: white;
    box-shadow: 0px 0px 2px white, 0px 0px 10px rgb(0, 89, 255),
      0px 0px 20px rgb(0, 204, 255);
  }

  .index__topConnector {
    width: 100%;
    height: 2px;
    top: 0;
    right: 0;
  }
  .index__rightConnector {
    width: 2px;
    height: 100%;
    top: 0;
    right: 0;
  }
  .index__bottomConnector {
    width: 100%;
    height: 2px;
    bottom: 0;
    right: 0;
  }
  .index__leftConnector {
    width: 2px;
    height: 100%;
    top: 0;
    left: 0;
  }

  .navbar__top {
    position: fixed;
    top: 10vh;
    left: 50%;
    transform: translateX(-50%);
    width: 95vw;
    height: 40px;
  }
  .navbar__bottom {
    position: fixed;
    bottom: 10vh;
    left: 50%;
    transform: translateX(-50%);
    width: 95vw;
    height: 40px;
  }

  .navbar__dot {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background: white;
    box-shadow: 0px 0px 2px white, 0px 0px 10px yellow, 0px 0px 20px blue;
    margin-block: auto;
  }

  .dot__wrapper {
    position: relative;
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    display: flex;
    margin-block: auto;
    margin-inline: 5vw;
    padding: 10px;
    width: auto;
    height: 25px;

    &:hover {
      background: white;
      box-shadow: 0px 0px 2px white, 0px 0px 10px yellow, 0px 0px 20px blue;
      border-radius: 25px;
      color: $mainDark;

      .navbar__dot {
        background: $mainDark;
        box-shadow: 0px 0px 2px black, 0px 0px 10px #202020,
          0px 0px 20px #303030;
      }

      span {
        color: $mainDark;
        font-weight: bold;
      }
    }

    span {
      margin-left: 1vw;
      color: white;
    }
  }

  .contact__icon {
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    color: white;
    filter: drop-shadow(0px 0px 10px rgb(0, 123, 255));
    padding: 5px;
    width: 30px;
    height: 30px;

    &:hover {
      background: white;
      box-shadow: 0px 0px 2px white, 0px 0px 10px cyan,
        0px 0px 20px rgb(234, 0, 255);
      color: #101010;
      filter: brightness(2);
      border-radius: 50%;
      padding: 5px;
    }
  }

  .navbar__subBottom {
    position: fixed;
    bottom: 1vh;
    left: 0;
    width: 100%;
    height: 40px;
    padding-block: 10px;
  }
}
// MOBILES DEVICES
@media screen and (max-width: 767px) {
  span {
    font-size: 14px;
  }
  .index__title {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h2 {
      color: rgba(255, 255, 255, 0.733);
      font-weight: lighter;
    }

    h1 {
      color: rgb(255, 255, 255);
      font-weight: lighter;
      text-shadow: 0px 0px 2px white, 0px 0px 10px cyan, 0px 0px 20px blue;
      text-transform: uppercase;
      letter-spacing: 10px;
    }
  }

  .index__corner {
    position: absolute;
    filter: drop-shadow(0px 0px 5px #00ccff);
  }
  .index__corner--topLeft {
    top: 10px;
    left: 3px;
    width: 75px;
    height: 75px;
    transform: rotate(90deg);
  }
  .index__corner--topRight {
    top: 5px;
    right: 10px;
    width: 75px;
    height: 75px;
    transform: rotate(180deg);
  }
  .index__corner--bottomLeft {
    bottom: 8px;
    left: 8px;
    width: 75px;
    height: 75px;
    transform: rotate(0deg);
  }
  .index__corner--bottomRight {
    padding: 0;
    bottom: 13px;
    right: 5px;
    width: 75px;
    height: 75px;
    transform: rotate(270deg);
  }

  .index__connector {
    background: white;
    position: absolute;
    box-shadow: 0px 0px 2px white, 0px 0px 10px rgb(0, 89, 255),
      0px 0px 20px rgb(0, 204, 255);
  }

  .index__topConnector {
    width: 70vw;
    height: 1px;
    top: 18px;
    right: 55px;
  }
  .index__rightConnector {
    width: 1px;
    height: 87vh;
    top: 50px;
    right: 18px;
  }
  .index__bottomConnector {
    width: 72vw;
    height: 1px;
    bottom: 21px;
    right: 50px;
  }
  .index__leftConnector {
    width: 1px;
    height: 85vh;
    top: 60px;
    left: 16px;
  }

  .navbar__top {
    position: fixed;
    top: 10vh;
    left: 50%;
    transform: translateX(-50%);
    width: 90vw;
    height: 40px;
  }
  .navbar__bottom {
    position: fixed;
    bottom: 10vh;
    left: 50%;
    transform: translateX(-50%);
    width: 90vw;
    height: 40px;
  }

  .navbar__dot {
    max-height: 10px;
    max-width: 10px;
    border-radius: 50%;
    background: white;
    box-shadow: 0px 0px 2px white, 0px 0px 10px yellow, 0px 0px 20px blue;
    margin-block: auto;
  }

  .dot__wrapper {
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    display: flex;
    margin-block: auto;
    margin-inline: 5vw;
    padding: 10px;
    width: auto;
    height: auto;

    span {
      margin-left: 1vw;
      color: white;
    }
  }
  .contact__icon {
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    color: white;
    filter: drop-shadow(0px 0px 10px rgb(0, 123, 255));
    padding: 5px;
    width: 30px;
    height: 30px;

    &:hover {
      background: white;
      box-shadow: 0px 0px 2px white, 0px 0px 10px cyan,
        0px 0px 20px rgb(234, 0, 255);
      color: #101010;
      filter: brightness(2);
      border-radius: 50%;
      padding: 5px;
    }
  }

  .navbar__subBottom {
    position: fixed;
    bottom: 4vh;
    left: 0;
    width: 100%;
    height: 40px;
    padding-block: 10px;
  }
}
</style>
