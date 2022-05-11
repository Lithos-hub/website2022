<template>
  <div class="index">
    <div class="index__title">
      <h2>Carlos Segura García</h2>
      <h1>Front-end Developer</h1>
    </div>
    <div class="index__connector index__topConnector"></div>
    <div class="index__connector index__rightConnector"></div>
    <div class="index__connector index__bottomConnector"></div>
    <div class="index__connector index__leftConnector"></div>
    <img
      src="../assets/img/corner.svg"
      alt="corner"
      class="index__corner index__corner--topLeft"
    />
    <img
      src="../assets/img/corner.svg"
      alt="corner"
      class="index__corner index__corner--topRight"
    />
    <img
      src="../assets/img/corner.svg"
      alt="corner"
      class="index__corner index__corner--bottomLeft"
    />
    <img
      src="../assets/img/corner.svg"
      alt="corner"
      class="index__corner index__corner--bottomRight"
    />
    <nav class="navbar navbar__top d-flex space-between">
      <router-link to="/">
        <div class="dot__wrapper">
          <div class="navbar__dot"></div>
          <span>Home</span>
        </div>
      </router-link>
      <router-link to="/about">
        <div class="dot__wrapper">
          <div class="navbar__dot"></div>
          <span>Who I am</span>
        </div>
      </router-link>
    </nav>
    <nav class="navbar navbar__bottom d-flex space-between">
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
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../scss/app.scss";
@import "../scss/variables.scss";

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
    position: absolute;
    filter: drop-shadow(0px 0px 5px #00ccff);
  }
  .index__corner--topLeft {
    top: 49px;
    left: 96px;
    width: 100px;
    height: 100px;
    transform: rotate(90deg);
  }
  .index__corner--topRight {
    top: 42px;
    right: 96px;
    width: 100px;
    height: 100px;
    transform: rotate(180deg);
  }
  .index__corner--bottomLeft {
    bottom: 49px;
    left: 103px;
    width: 100px;
    height: 100px;
    transform: rotate(0deg);
  }
  .index__corner--bottomRight {
    padding: 0;
    bottom: 56px;
    right: 89px;
    width: 100px;
    height: 100px;
    transform: rotate(270deg);
  }

  .index__connector {
    background: white;
    position: absolute;
    box-shadow: 0px 0px 2px white, 0px 0px 10px rgb(0, 89, 255),
      0px 0px 20px rgb(0, 204, 255);
  }

  .index__topConnector {
    width: 83.5vw;
    height: 2px;
    top: 59px;
    right: 153px;
  }
  .index__rightConnector {
    width: 2px;
    height: 77vh;
    top: 105px;
    right: 106px;
  }
  .index__bottomConnector {
    width: 83.5vw;
    height: 2px;
    bottom: 66px;
    right: 153px;
  }
  .index__leftConnector {
    width: 2px;
    height: 76.5vh;
    top: 120px;
    left: 113px;
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
      // cursor: pointer;
      background: white;
      box-shadow: 0px 0px 2px white, 0px 0px 10px yellow, 0px 0px 20px blue;
      border-radius: 25px;
      color: $mainDark;

      .navbar__dot {
      background: $mainDark;
      box-shadow: 0px 0px 2px black, 0px 0px 10px #202020, 0px 0px 20px #303030;
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
}
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
    height: 10px;
    width: 10px;
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
}
</style>
