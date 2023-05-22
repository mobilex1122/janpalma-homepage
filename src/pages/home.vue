<script setup lang="ts">
  import linkButton from '@comp/link-button.vue'
import { appendFile } from 'fs';
import { state } from '../props';
import "@motion-canvas/player"
import transitionheader from '../components/transitionheader.vue';

</script>

<template>
  <div style="margin-top: -1.5rem;">
    <div class="headder container-fluid p-0 mb-3" style="position: relative; background-color: black;">
      <div id="headerbg" style="opacity: 1;">
          <img src="/video/header/static-extralow.jpeg">
          <img src="/video/header/static-low.jpeg">
          <img src="/video/header/static.png">
          <video src="/video/header/main.mp4" autoplay loop muted/>
          
      </div>
      <img src="/main-logo.svg" class="mx-auto d-block" :class="{light: state.lighttheme}" style="height: 70%; max-width: 97%; position: absolute; z-index: 5; left: 50%; top: 50%; transform: translate(-50%,-50%);">
    </div>
    
    
    <div class="container">

    
      <h2 id="kdojsem">Kdo jsem?</h2>
      <p class="text-justify">
        Jmenuji se Jan Palma. Věnuji se IT a jsem velký nadšenec v tomto oboru.

        <br><router-link class="btn btn-primary m-1" to="/about">O mně</router-link>
      </p>
      

    
      <h2 id="coumim">Co umím?</h2>
      <p class="text-justify">
        Animace, edity, programování, grafika, design.
        <!-- <br>
        <router-link class="btn btn-primary m-1" to="/gallery">Galerie</router-link>
        <a class="btn btn-primary m-1" target="_blank" href="https://youtube.com/@mobilexENCZ/">Youtube</a>
        <a class="btn btn-primary m-1" target="_blank" href="https://github.com/mobilex1122">Github</a> -->
      </p>
    
      <h2 id="mojeprojekty">Moje projekty</h2>
      <h3 id="projnullweb">ProjNULL Web</h3>
      <p class="text-justify">
        Je asi nejzajímavější projekt na kterém pracuji. ProjNULL web (webové stránky týmu, ve kterém jsem) je od základu napsaný mnou (HTML,CSS,JS) a momentálně pracuji na přepsání do Vue (stejný systém na kterém běží tahle stránka)
        <br><a href="http://null.mobilex1122.eu" target="_blank" rel="noopener noreferrer">Null Web</a>
      </p>
      <h3 id="rssbot">RSS News Bot</h3>
      <p class="text-justify">
        Projekt, na kterém pracuji se spolužákem (pod přezdívkou HyScript). Cílem projektu je udělat bota na Discord, který zobrazuje RSS (nebo i jiné) správy přímo na Discordu.
        <br><a href="http://null.mobilex1122.eu" target="_blank" rel="noopener noreferrer">Github Repositář</a>
      </p>
      <router-link class="btn btn-primary m-1" to="/projects">Víc projektů</router-link>
    </div>
    <br>
</div>
</template>

<script lang="ts">
  
  export default {
    methods: {
      lighttheme() {
        console.log( state.lighttheme)
        return state.lighttheme
      }
    },
    mounted() {
      //let player = new mtplay()
    }
  }
</script>

<style scoped>


  #headerbg {
    overflow: hidden !important;
    aspect-ratio: 20/4;
  }
  #headerbg video {
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  #headerbg img {
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  @media (max-width: 576px) {
    #headerbg video {
      display: none;
    }
    #headerbg {
      overflow: hidden !important;
      aspect-ratio: 2/1;
    }
    #headerbg img {
      opacity: 1;
    }
  }
  .light {
    filter: invert(0);
  }
</style>
