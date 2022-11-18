<template>
  <section class="carrousel__wrapper">
    <article
      :class="
        isCompact ? 'cv__card--compact reflections' : 'cv__card reflections'
      "
      v-for="(element, i) in list"
      :key="i"
    >
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
        <hr v-if="!isCompact" />
      </header>
      <section class="card__body" v-if="!isCompact">
        <ul v-if="!isCompact">
          <li
            class="sublist__items"
            v-for="(item, i) in element.sublist"
            :key="i"
          >
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
      </section>
      <img
        v-else
        class="tech-image"
        :src="element.tech_image"
        :alt="`Picture of ${element.tech_image} logo`"
      />
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
  isCompact: {
    type: Boolean,
    default: false,
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
  return `${diffYears} ${diffYears > 1 ? "years" : "year"}, ${diffMonths} ${
    diffMonths > 1 ? "months" : "month"
  }`;
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
    height: 100vh;
    top: 10vh;
    position: relative;
    transform: none;
    margin: 0 auto;
    border-radius: 0px 0px 0px 0px;
    background: $mainDark;
  }

  .cv__card {
    position: relative;
    padding-block: 10px;
    height: 100%;
    width: 100%;
    margin-inline: 0;
    margin-bottom: 0;
    border-radius: 0;
    border-block: 1px solid white;
  }

  .cv__card--compact {
    position: relative;
    width: 100%;
    height: 400px;
    margin-bottom: -2rem;
    border-block: 1px solid cyan;
  }

  h5 {
    position: relative;
    top: 2%;
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
    padding-top: 2rem;
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
    color: rgb(255, 171, 54);
  }

  ul {
    position: relative;
    left: 0;
    height: auto;
    list-style: none;
    padding: 0;
    padding-bottom: 2em;
    margin: 0 auto;

    .sublist__items {
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

  .tech-image {
    max-height: 170px;
    margin-top: 3rem;
    max-width: 150px;
    margin-bottom: 2rem;
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

  .cv__card {
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

  .cv__card--compact {
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

    .sublist__items {
      padding-inline: 0px;
      margin: 0;
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

  .tech-image {
    max-height: 200px;
    margin-top: 5rem;
    max-width: 200px;
  }
}
</style>
