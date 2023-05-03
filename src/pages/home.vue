<script setup lang="ts">
  import linkButton from '@comp/link-button.vue'
import { appendFile } from 'fs';
import { state } from '../props';
import "@motion-canvas/player"

</script>

<template>
  <div>
    <img src="/main-logo.svg" class="mx-auto d-block" :class="{light: state.lighttheme}" style="width: 70%;">
    <h1>Domov</h1>
    <p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, delectus deleniti. Dignissimos veritatis officiis perferendis numquam doloremque quo nihil optio recusandae nisi omnis veniam libero, tenetur, illum officia voluptatem laboriosam.</p>
    <p class="text-justify">Soluta fuga aperiam, illum labore quibusdam repellendus facere porro blanditiis voluptates magnam possimus earum esse eius. In, sequi quidem delectus iste, voluptatibus voluptate ratione quam eligendi provident voluptatem deleniti vero.</p>
    <p class="text-justify">Deserunt totam pariatur quidem, quibusdam expedita doloribus vel unde velit veniam distinctio tempora sapiente eos aperiam natus numquam voluptate dolore sit delectus reiciendis! Eos, incidunt ullam ab quo nam atque.</p>
    <p class="text-justify">Molestiae soluta voluptas non autem ducimus cupiditate obcaecati numquam modi eaque tenetur esse inventore eum, illo maxime labore minima officiis cum asperiores sit. Praesentium optio commodi, at expedita dolores fugiat!</p>
    <p class="text-justify">Alias, delectus cumque? Quam ex labore minima eligendi voluptates quia? Soluta impedit architecto dignissimos, voluptates nam asperiores dolores. Minima id maxime cumque repudiandae numquam veritatis alias sequi neque voluptatem explicabo?</p>
    <h2>Lorem</h2>
    <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis porro, temporibus reprehenderit labore ullam dicta impedit, accusamus, molestias neque totam iusto enim consequuntur voluptates veniam beatae distinctio quae ratione laudantium.</span><span>Non nemo tempora beatae provident. Unde tenetur, assumenda et libero aspernatur ad odit veritatis necessitatibus illum consectetur consequatur commodi quibusdam sint modi iusto mollitia quas enim, facilis soluta alias fuga.</span><span>Vero laborum facilis explicabo sed unde dolorum minima optio dolorem vel ipsa eligendi laboriosam enim alias, libero sequi, ex ducimus consectetur commodi odio perferendis obcaecati. Maxime quasi et quam nulla.</span><span>Officiis ducimus soluta assumenda adipisci aperiam consequuntur animi accusantium, quibusdam nulla amet rerum modi natus tenetur harum tempore incidunt iste perspiciatis pariatur eligendi optio temporibus tempora debitis nisi? Odio, eligendi.</span><span>Tempora corrupti minima dolore veniam esse harum necessitatibus sunt expedita, praesentium iure quo fugit sed. Perspiciatis, temporibus dignissimos. Dolore nemo et dignissimos, corporis necessitatibus cupiditate odio repellat amet nulla ab.</span><span>Tenetur ratione maxime accusamus, officiis reiciendis temporibus quasi ducimus pariatur quis magni quam esse dicta eum accusantium molestiae iure? Assumenda asperiores suscipit maxime, voluptate temporibus nulla dolores vero quaerat sit!</span><span>Cupiditate voluptatibus quo aperiam voluptas voluptatum reprehenderit. Modi, iste unde assumenda maxime beatae itaque repellendus cum velit sapiente labore aliquid ullam nam deserunt laborum. At porro culpa ad cumque minus.</span><span>Mollitia odit quisquam sunt sequi, accusantium voluptas fugiat consequuntur necessitatibus dolore? Excepturi nam, quos ex atque nisi nihil deleniti repellat, pariatur corrupti est labore earum distinctio quia blanditiis quod. Facilis.</span></p>
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
  .light {
    filter: invert(1);
  }
</style>
