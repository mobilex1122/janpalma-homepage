<script setup lang="ts">

</script>

<template>
    <div>
        <h1>Projekty</h1>
        
        <div class="m-1">
            <a class="btn btn-outline-primary" @click="togglearchived()" id="toggler">Archivy</a>
        </div>
        

        <div id="projectlist" class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
            <div class="col"><p class="placeholder-glow m-1" ><span class="placeholder col-12 rounded-3" style="height: 8rem;"></span></p></div>
            <div class="col"><p class="placeholder-glow m-1" ><span class="placeholder col-12 rounded-3" style="height: 8rem;"></span></p></div>
            <div class="col"><p class="placeholder-glow m-1" ><span class="placeholder col-12 rounded-3" style="height: 8rem;"></span></p></div>
            <div class="col"><p class="placeholder-glow m-1" ><span class="placeholder col-12 rounded-3" style="height: 8rem;"></span></p></div>
            <div class="col"><p class="placeholder-glow m-1" ><span class="placeholder col-12 rounded-3" style="height: 8rem;"></span></p></div>
            <div class="col"><p class="placeholder-glow m-1" ><span class="placeholder col-12 rounded-3" style="height: 8rem;"></span></p></div>
            <div class="col"><p class="placeholder-glow m-1" ><span class="placeholder col-12 rounded-3" style="height: 8rem;"></span></p></div>
            <div class="col"><p class="placeholder-glow m-1" ><span class="placeholder col-12 rounded-3" style="height: 8rem;"></span></p></div>
            <div class="col"><p class="placeholder-glow m-1" ><span class="placeholder col-12 rounded-3" style="height: 8rem;"></span></p></div>
            <div class="col"><p class="placeholder-glow m-1" ><span class="placeholder col-12 rounded-3" style="height: 8rem;"></span></p></div>
        </div>
    </div>
</template>

<script lang="ts">


    const repos = async (list:Element,parms: {archived:string})=> {
        let data = await fetch("https://api.github.com/users/mobilex1122/repos", {
    method: "Get", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      'Accept':'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'authorization': "token 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"
    }}) 
        let output = await data.json() 
        list.innerHTML = ""

        output.forEach((repo: {name:string,html_url:string,description:string,topics:string[],archived:boolean})=> {
            console.log(repo.name,repo.html_url,repo.description, repo.topics)
            let formtags = ""
            repo.topics!.forEach((tag:string)=> {
                formtags += `<span class="badge bg-info-subtle border borde-info-subtle text-info-emphasis rounded-pill">${tag}</span>`
            })
            if (repo.description == null) {repo.description = 'No description';}
            let arhived = repo.archived
            if (arhived) {
                list.innerHTML += `
                <div class="col d-none" id="archived">
                    <div class="card h-100 m-1 ${(()=> {if (repo.archived) return `border-warning border-2`; else return ``})()}">
                        <div class="card-body">
                            <h5 class="card-title">${repo.name}${(()=> {if (repo.archived) return ` <span class="badge bg-warning text-dark rounded-pill">Archiv</span>`; else return ``})()}</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">${formtags}</h6>
                            <p class="card-text">${ repo.description}</p>
                        </div>
                        <div class="card-footer">
                            <a href="${repo.html_url}" target="_BLANK" class="btn btn-primary">Github</a>
                        </div>
                    </div>
                </div>
                `

            } else {

                list.innerHTML += `
                <div class="col">
                    <div class="card h-100 m-1 ${(()=> {if (repo.archived) return `border-warning border-2`; else return ``})()}">
                        <div class="card-body">
                            <h5 class="card-title">${repo.name}${(()=> {if (repo.archived) return ` <span class="badge bg-warning text-dark rounded-pill">Archiv</span>`; else return ``})()}</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">${formtags}</h6>
                            <p class="card-text">${ repo.description}</p>
                        </div>
                        <div class="card-footer">
                            <a href="${repo.html_url}" target="_BLANK" class="btn btn-primary">Github</a>
                        </div>
                    </div>
                </div>
                `
            
            }
    });
    }

    

    
    export default {
        methods: {
            togglearchived: ()=> {
                let arcived = document.querySelectorAll('#archived')
                if (arcived) {
                    arcived.forEach((el)=> {
                        el.classList.toggle('d-none')
                    })
                }

                let toggler = document.querySelector('#toggler')
                toggler?.classList.toggle('btn-outline-primary')
                toggler?.classList.toggle('btn-success')
            }
        },
    mounted() {
        
        const list = document.querySelector("#projectlist") as Element


        repos(list,{
            archived: this.$route.query['archived'] as string
        })
    }
  }
</script>

<style scoped>
</style>
