<template>
  <section class="options">
    <div :class="isLargeScreen ? 'button__wrapper gridOptions' : 'button__wrapper blockOptions'">
      <button
        v-for="option in options"
        :class="option.active ? 'mainButton active--btn' : 'mainButton'"
        @click="emit('action', option.emit)"
      >
        {{ option.text }}
      </button>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  options: {
    type: Array,
    default: () => [],
  },
});
const { options } = props;

const isLargeScreen = computed(() => window.innerWidth >= 768);

const emit = defineEmits(["action"]);
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";
@import "../scss/app.scss";

.active--btn {
  background: white;
  color: $mainDark;
}

.button__wrapper {
    filter: drop-shadow(0px 0px 50px rgb(255, 0, 208));
    margin: 0 auto;
    width: 100%;
}

.gridOptions {
  display: flex;
  justify-content: space-around;
}

.blockOptions {
  display: block;
  top: 25vh;
  button {
    margin-block: 1em;
  }
}

@media screen and (max-width: 768px) {
  .options {
    margin-top: 2vh;
  }
.mainButton {
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  border-top: 1px solid white;
  border-bottom: 1px solid cyan;
  border-inline: none;
  background: transparent;
  padding: 15px;
  border-radius: 18px;
  width: 120px;
  height: auto;
  font-size: 12px;
  color: white;
  clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);

  &:hover {
    background: $mainDark;
    color: white;
  }

  &:active {
    background: white;
  }
}
}
@media screen and (min-width: 768px) {
    .options {
    margin-top: 0;
  }
.mainButton {
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  border-top: 1px solid white;
  border-bottom: 1px solid cyan;
  border-inline: none;
  background: transparent;
  padding: 25px;
  border-radius: 25px;
  width: 250px;
  height: auto;
  font-size: 1.2em;
  color: white;
  clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);

  &:hover {
    background: $mainDark;
    color: white;
  }

  &:active {
    background: white;
  }
}
}
</style>
