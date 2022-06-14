<template>
<Goback />
  <div class="about">
    <section class="text__wrapper">
      <p>Hi, I'm <strong>Carlos</strong>.</p>
      <p>
        I started learning Web Development in <strong>October 2019</strong>,
        but, up to that point, I was quite a different person.
      </p>
      <p>
        When I was 9 years old I started studying <strong>music</strong> and
        shortly after I turned 14, I fell in love with the electric guitar.
      </p>
      <p>
        At the age of 23 I started composing my first songs and now, in 2021, I
        have more than 7 hours of music composed, more than 140 songs and 12
        albums released!
      </p>
      <p>
        In 2020 I finished my university studies in <strong>Musicology</strong>.
        With such a damaged job market (something that the COVID made even
        worse) and a degree that disappointed me deeply, I seriously considered
        starting a <strong>new and totally different path.</strong>
      </p>
      <p>
        Since I was a child I have always liked computer science, although I had
        no idea what programming was. So, in <strong>October 2019</strong>,
        during my last Degree year, I started learning <strong>Python</strong>,
        and over the months I learned more and more and with different
        technologies oriented to front-end development. In fact, my final Degree
        project was about the
        <strong>Artificial Intelligence in music composition</strong>, so this
        shows that my interest in technology was growing all the time.
      </p>
      <p>
        At the same time as working as a
        <strong>front-end developer</strong> since <strong>March 2021</strong>,
        I am studying an official
        <strong>Higher Education in Web Application Development</strong> while
        continuing my self-taught training in fields such as
        <strong>Cloud Computing.</strong>
      </p>
      <p>
        Meanwhile, I usually develop my own apps in order to learn and improve
        my skills.
      </p>

      <p>Visit my <strong>portfolio</strong> to take a look!</p>
    </section>
  </div>
</template>

<script setup>
// COMPONENTS
import Goback from '../components/Goback.vue';

</script>

<style lang="scss" scoped>

@media screen and (max-width: 767px) {
.text__wrapper {
  padding: 0;
  margin: 0;
  position: absolute;
  top: 58%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  p {
    background: linear-gradient(120deg, rgb(255, 0, 183), #00c8ff);
    background-clip: text;
    -webkit-background-clip: text;
    font-size: 13px;
    line-height: 22px;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
  }
  strong {
    background: linear-gradient(120deg, rgb(255, 255, 255), #00fff7);
    background-clip: text;
    -webkit-background-clip: text;
    font-size: 1.2em;
  }
}
}
@media screen and (min-width: 768px) {
  .text__wrapper {
  padding: 0;
  margin: 0;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 90vw;
  transform: translate(-50%, -50%);
  p {
    background: linear-gradient(120deg, rgb(255, 0, 183), #00c8ff);
    background-clip: text;
    -webkit-background-clip: text;
    font-size: 1em;
    line-height: 50px;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
  }
  strong {
    background: linear-gradient(120deg, rgb(255, 255, 255), #00fff7);
    background-clip: text;
    -webkit-background-clip: text;
    font-size: 1.2em;
  }
}
}
</style>
