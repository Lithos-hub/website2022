<template>
<div class="app__wrapper">
  <div id="cursor"></div>
  <div class="background__noise"></div>
  <router-view class="routerView"></router-view>
</div>
</template>

<script setup>
import { onMounted } from 'vue';

const listenMouseTorch = () => {
  let cursor = document.querySelector('#cursor');
  window.addEventListener('mousemove', (e) => {
    cursor.style.transition = "all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)";
    cursor.style.top = e.clientY + 'px';
    cursor.style.left = e.clientX + 'px';
  })
}

onMounted(() => listenMouseTorch())
</script>


<style lang="scss">
@import './scss/variables.scss';
@import './scss/app.scss';
* {
  cursor: none;
}
#cursor {
  position: fixed;
  background: rgba(255, 255, 255, 0.53);
  box-shadow: 0px 0px 2px white, 0px 0px 5px cyan, 0px 0px 8px purple, 0px 0px 10px pink, 0px 0px 15px cyan, 0px 0px 20px blue;
  filter: drop-shadow(0px 0px 5px rgb(164, 249, 255));
  width: 15px;
  height: 15px;
  border-radius: 50%;
  z-index: 999;
  mix-blend-mode: screen;
  animation: cursor-blink 0.5s infinite;
}

#app {
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $mainDark;
  background: radial-gradient(#201026, #041317);
  background-size: cover;
  margin: 0 auto;
  width: 100%;
  height: 100%;
}
.background__noise {
  background-image: url('./assets/img/noise.png');
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: backgroundMotion 50ms infinite cubic-bezier(0.165, 0.84, 0.44, 1)
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
    box-shadow: 0px 0px 2px white, 0px 0px 5px cyan, 0px 0px 18px purple, 0px 0px 10px pink, 0px 0px 10px cyan, 0px 0px 20px blue; 
  }
  25% {
    box-shadow: 0px 0px 10px white, 0px 0px 10px cyan, 0px 0px 21px purple, 0px 0px 25px pink, 0px 0px 20px cyan, 0px 0px 30px blue;  
  }
  50% {
    box-shadow: 0px 0px 4px white, 0px 0px 7px cyan, 0px 0px 24px purple, 0px 0px 12px pink, 0px 0px 20px cyan, 0px 0px 20px blue;  
  }
  75% {
    box-shadow: 0px 0px 8px white, 0px 0px 9px cyan, 0px 0px 15px purple, 0px 0px 20px pink, 0px 0px 20px cyan, 0px 0px 10px blue;  
  }
  100% {
    box-shadow: 0px 0px 12px white, 0px 0px 5px cyan, 0px 0px 20px purple, 0px 0px 15px pink, 0px 0px 25px cyan, 0px 0px 33px blue;  
  }
}
</style>
