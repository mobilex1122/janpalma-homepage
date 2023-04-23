<script setup lang="ts">
import { type } from 'os';

</script>

<template>
    <div>
        <h1>Page</h1>

        <h2>Anime</h2>
        <h3>Seznam Kategorií</h3>
        <div id="animecatlist">
            
        </div>
        


        <h2>Manga</h2>
        <h3>Seznam Kategorií</h3>
        <div id="mangacatlist">
            
        </div>
        <p>Zdroj: Můj účet na kitsu.io</p>

    </div>
</template>



<script lang="ts">
    type Animedata = {
        data:{ attributes: {
                kind: string,
                statsData: {
                    categories: Record<string, number>
                }
            }}[]
        
            
    }



    export default {
    data() {
        return {
            anistats: {}
        }
    },
    methods: {
        
    },
    mounted() {


        function random_rgba() {
            var o = Math.round, r = Math.random, s = (255 - 150);
            return 'rgba(' + o(r()*s+150) + ',' + o(r()*s+150) + ',' + o(r()*s+150) + ',' + r().toFixed(1) + ')';
        }

        var color = random_rgba();

        let animestatsel = document.querySelector("#animastats") as HTMLElement
        let alist= document.querySelector("#animecatlist") as HTMLElement
        const astat = async ()=> {
            let stats: Record<string, number> = {}

            let data = await fetch("https://kitsu.io/api/edge/users/1237814/stats")
            let proceseddata:Animedata = await data.json()
            proceseddata["data"].forEach(element => {
                if (element.attributes.kind == "anime-category-breakdown") {
                    console.log(element.attributes.statsData.categories)

                    stats = element.attributes.statsData.categories
                    
                }
            });



            Object.keys(stats).forEach((key) => {
                let randomcol = random_rgba()
                alist.innerHTML += `<span class="badge rounded-pill text-bg-info m-1">${key}</span>`
            })
            animestatsel.classList.add("loaded")
        }
        astat()

        let mangastatsel = document.querySelector("#mangastats") as HTMLElement
        let mlist = document.querySelector("#mangacatlist") as HTMLElement
        const mstat = async ()=> {
            let stats:Record<string, number> = {}
            let data = await fetch("https://kitsu.io/api/edge/users/1237814/stats")
            let proceseddata:Animedata = await data.json()
            proceseddata["data"].forEach(element => {
                if (element.attributes.kind == "manga-category-breakdown") {
                    console.log(element.attributes.statsData.categories)

                    stats = element.attributes.statsData.categories
                    
                }
            });



            Object.keys(stats).forEach((key) => {
                mlist.innerHTML += `<span class="badge rounded-pill text-bg-secondary m-1">${key}</span>`
            })
            mangastatsel.classList.add("loaded")
        }
        mstat()
    }
  }
</script>

<style scoped>
    .progressanim {
        width: 0%;
        
    }
    .loaded {
        animation: stshw 1s forwards;
    }

    @keyframes stshw {
        0% {
            width: 0;
        }
        100% {
            width: 100%;
        }
    }
</style>
