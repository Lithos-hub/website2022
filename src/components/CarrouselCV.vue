<template>
  <section class="carrousel__wrapper">
    <article class="cv__card reflections" v-for="(element, i) in list" :key="i">
      <header class="cv__card--header">
        <h3>{{ element.title }}</h3>
        <h4>{{ element.subtitle }}</h4>
        <h5>{{ element.date }}</h5>
        <h6 v-if="element.startExperience">
          Total:
          {{
            calculateTotalTime(element.startExperience, element.endExperience)
          }}
        </h6>
        <hr />
      </header>
      <ul>
        <li v-for="(item, i) in element.sublist" :key="i">
          <div>
            <mdicon name="check" size="20" />
          </div>
          <div>
            <p>
              {{ item }}
            </p>
          </div>
        </li>
      </ul>
    </article>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});

const listenScrollX = () => {
  let carrousel = document.querySelectorAll(".carrousel__wrapper");
  carrousel.forEach((carr) =>
    carr.addEventListener("wheel", function (e) {
      carr.scrollLeft += e.deltaY;
    })
  );
};

const calculateTotalTime = (startDate, endDate) => {
  const start = new Date(startDate);
  let today = "";
  if (!endDate) {
    today = new Date();
  } else {
    today = new Date(endDate);
  }
  // Get the difference between the two dates in years and months
  const diff = new Date(today.getTime() - start.getTime());
  const diffYears = diff.getUTCFullYear() - 1970;
  const diffMonths = diff.getUTCMonth();
  return `${diffYears} years, ${diffMonths} months`;
};

onMounted(() => {
  listenScrollX();
});
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";
@import "../scss/app.scss";

@media screen and (max-width: 767px) {
  .carrousel__wrapper {
    display: block;
    background: transparent;
    width: 100%;
    max-width: 100vw;
    height: 100%;
    position: relative;
    top: 30vh;
    left: 0;
    transform: none;
    margin: 0;
    overflow-x: scroll;
    border-radius: 0px 0px 0px 0px;
    gap: 1em;
  }

  article {
    position: relative;
    padding-block: 50px;
    height: auto;
    width: 100%;
    margin-inline: 0;
    margin-bottom: 0;
    width: 100%;
    border-radius: 0;
  }
  h5 {
    position: relative;
    top: 0%;
    left: 0%;
    width: 100%;
    transform: none;
    letter-spacing: 5px;
    text-transform: uppercase;
  }
  hr {
    position: relative;
    top: 40%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
  }
  h3 {
    width: 95%;
    background: $gradientPrimary;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  h4 {
    color: cyan;
    font-size: 12px;
    font-weight: lighter;
  }
  h5 {
    color: white;
  }
  h6 {
    color: rgb(87, 87, 212);
  }

  ul {
    position: relative;
    left: 0;
    height: auto;
    list-style: none;
    padding: 0;
    padding-bottom: 2em;
    margin: 0 auto;

    li {
      padding-inline: 10px;
      display: flex;
      background: $gradientSecondary;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-align: left;

      div:first-child {
        color: white;
        margin-block: auto;
        margin-right: 10px;
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .carrousel__wrapper {
    display: flex;
    background: transparent;
    width: 100%;
    max-width: 90vw;
    height: auto;
    position: fixed;
    top: 60vh;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    overflow-x: scroll;
    border-radius: 25px 25px 0px 0px;
    gap: 1em;
  }

  article {
    position: relative;
    padding: 25px;
    height: 500px;
    min-width: 350px;
    width: auto;
    margin-inline: 2em;
    margin-bottom: 1em;
    width: 100%;
    border-radius: 25px;
  }
  h5 {
    position: absolute;
    top: 30%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    letter-spacing: 5px;
    text-transform: uppercase;
  }

  h6 {
    position: absolute;
    color: rgb(255, 171, 54);
    top: 32%;
    left: 50%;
    width: 100%;
    font-weight: lighter;
    font-size: 15px;
    transform: translate(-50%, -50%);
  }
  hr {
    position: absolute;
    top: 40%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
  }
  h3 {
    background: $gradientPrimary;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  h4 {
    color: cyan;
    font-size: 12px;
    font-weight: lighter;
  }
  h5 {
    color: white;
  }

  ul {
    position: relative;
    top: 10rem;
    left: 0;
    height: auto;
    list-style: none;
    padding: 0;
    padding-bottom: 2em;
    margin: 0 auto;

    li {
      padding-inline: 10px;
      display: flex;
      background: $gradientSecondary;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-align: left;

      div:first-child {
        color: white;
        margin-block: auto;
        margin-right: 10px;
      }
    }
  }
}
</style>
