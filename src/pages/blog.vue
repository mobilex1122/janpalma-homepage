<script setup lang="ts">
    import { defineComponent, ref } from "vue";
    import Loading from '@comp/loading.vue';
    import LoadError from '@comp/loaderror.vue'
import { type } from "os";
import { Ref } from "vue";

// handle success event
</script>

<template>
    <div>
        <h1>Blog</h1>
        <div v-if="mainloading">
            <br><br>
            <Loading />
            <h3 class="text-center">Načítaní do paměti</h3>
            
            <div class="py-5 my-5"></div>
        </div>
        
        <div v-else-if="posts[0]" class="row md-2">
            <template v-for="post,id in posts">
                <div class="col-md-6">
                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column position-static">
                        
                        <h3 class="mb-0">{{ post.name }}</h3>
                        
                        <div class="mb-1 text-body-secondary"><code>{{ post.date}}</code></div>
                        <div class="mb-3 text-body-secondary">{{ post.author }}</div>
                        <p class="card-text mb-auto"></p>
                        <button class="btn btn-outline-info text-left" @click="showPost(id)" type="button" data-bs-toggle="modal" data-bs-target="#post">Přečíst</button>
                        </div>
                        <div class="col-auto d-none d-lg-block">
                        <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                        </div>
                    </div>
                </div>
            </template>
        </div>
        <div v-else>
            <br><br>
            <LoadError />
            <h3 class="text-center">Nastala Chyba nebo nejsou žádné příspěvky</h3>
            
            <div class="py-5 my-5"></div>
            
        </div>
        <hr>
        <div class="blogger text-center ">
            <a class="link-body-emphasis link-underline link-underline-opacity-0" href="https://www.blogger.com" rel="nofollow">
                <svg class="svg-icon-24" view-box="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 20c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4 7v1c0 .55.45 1 1 1s1 .45 1 1v3c0 1.66-1.34 3-3 3H9c-1.66 0-3-1.34-3-3V8c0-1.66 1.34-3 3-3h4c1.66 0 3 1.34 3 3v1zm-6.05 1h2.6c.55 0 1-.45 1-1s-.45-1-1-1h-2.6c-.55 0-1 .45-1 1s.45 1 1 1zM14 13H9.95c-.55 0-1 .45-1 1s.45 1 1 1H14c.55 0 1-.45 1-1s-.45-1-1-1z"></path><path d="M0 0h24v24H0z" fill="none"></path>
                </svg>
                Používá technologii služby Blogger
            </a>
        </div>

        <!-- Popups -->
        <div class="modal fade" id="post" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl modal-fullscreen-md-down modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="post">{{ nowshowing.name }}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div v-html="'<h1>' + nowshowing.name + '</h1><hr>'+ nowshowing.content" class="modal-body">
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
        items: {title: string, content:string, published:string, author: {displayName:string}}[]
    }
    export default defineComponent({
        data() {
            return {
                posts: [] as {name: String, content: String, date: String, author:String}[],
                mainloading: true,
                nowshowing: {} as {name: String, content: String, author:String},
                error: true,
                adminToken: "",
                cont: ""
            }
        },
        methods: {
            showPost: function (id:number) {
                this.nowshowing = this.posts[id]
            },
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
                            )})(),
                        author: post.author.displayName
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
