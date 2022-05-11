<template>
  <div class="goback">
    <router-link to="/">
      <div class="dot__wrapper">
        <div class="navbar__dot"></div>
        <span>Go back</span>
      </div>
    </router-link>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../scss/variables.scss";
@import "../scss/app.scss";

.goback {
  position: fixed;
  top: 1vh;
  left: 0;

  button {
    background: none;
  }
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
  margin-inline: 1vw;
  padding: 10px;
  width: auto;
  height: auto;

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
</style>
