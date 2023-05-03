<script setup lang="ts">
    import { defineComponent } from "vue";
    import Loading from '@comp/loading.vue';
    import { Modal } from 'bootstrap';
import { type } from "os";
</script>

<template>
    <div>
        <div v-if="mainloading">
            <br><br>
            <Loading />
            <h3 class="text-center">Načítaní do paměti</h3>
            
            <div class="py-5 my-5"></div>
        </div>
        
        <div v-else class="row md-2">
            <template v-for="post,id in posts">
                <div class="col-md-6">
                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column position-static">
                        
                        <h3 class="mb-0">{{ post.name }}</h3>
                        <div>
                            <span class="badge rounded-pill text-bg-info">Info</span>
                        </div>
                        
                        <div class="mb-1 text-body-secondary">{{ post.date}}</div>
                        <p class="card-text mb-auto"></p>
                        <button class="btn btn-outline-info text-left" @click="showPost(id)">Přečíst</button>
                        </div>
                        <div class="col-auto d-none d-lg-block">
                        <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                        </div>
                    </div>
                </div>
            </template>
        </div>
        <hr>
        Zdroj: <a href="https://mobilex1122.blogspot.com/">https://mobilex1122.blogspot.com/</a>

        <div class="modal fade" id="post" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl modal-fullscreen-md-down modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="post">{{ nowshowing.name }}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div v-html="'<h1>' + nowshowing.name + '</h1><hr>'+ nowshowing.content" class="modal-body text-light">
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts">

    const textTrim = (text: String, max:number, removehtml:boolean = false):String => {
        if (removehtml) {
            text = text.replace(/<(.|\n)*?>/g, '');
        }

        return truncate(text,max,true)
    }

    function truncate( str:String, n:number, useWordBoundary:boolean ){
        if (str.length <= n) { return str; }
        const subString = str.slice(0, n-1); // the original check
        return (useWordBoundary 
            ? subString.slice(0, subString.lastIndexOf(" ")) 
            : subString) + "&hellip;";
    };

    type BlogData = {
        items: {title: string, content:string, published:string}[]
    }

    export default defineComponent({
        data() {
            return {
                posts: [] as {name: String, content: String, date: String}[],
                mainloading: true,
                nowshowing: {} as {name: String, content: String}
            }
        },
        methods: {
            showPost: function (id:number) {
                const modal = new Modal('#post')
                this.nowshowing = this.posts[id]
                modal.show()
            }
        },

        async mounted () {

            const postsraw = await fetch("https://www.googleapis.com/blogger/v3/blogs/2050273709837882209/posts?key=AIzaSyBMLzLqb7IYdnBdKFLMOZe48L4rfzU9L54")
            const posts = await postsraw.json() as BlogData

            if (posts.items) {
                posts.items.forEach((post)=> {
                    let out = {
                        name: post.title,
                        content: post.content,
                        date: (() => {
                            return new Date(post.published).toLocaleDateString(
                                'cz-cz',
                                {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                }
                            )})()
                    }

                    this.posts.push(out)
                })
            }
            this.mainloading = false
            console.log(this.posts);
            
        }
    })
</script>

<style scoped>

</style>
