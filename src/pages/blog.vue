<script setup lang="ts">
    import { defineComponent, ref } from "vue";
    import Loading from '@comp/loading.vue';
    import LoadError from '@comp/loaderror.vue'
import { type } from "os";
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import '@vueup/vue-quill/dist/vue-quill.bubble.css'
    import { Ref } from "vue";
import {
  GoogleSignInButton,
  type CredentialResponse,
} from "vue3-google-signin";

// handle success event
const handleLoginSuccess = (response: CredentialResponse) => {
  const { credential } = response;
  console.log("Access Token", credential);
};

// handle an error event
const handleLoginError = () => {
  console.error("Login failed");
};
</script>

<template>
    <div>
        <!-- <div>
            <div v-if="token">

            </div>
            <div v-else class="text-center">
            <GoogleSignInButton
                @success="handleLoginSuccess"
                @error="handleLoginError"
                ></GoogleSignInButton>
            </div>
        </div> -->
        <div class="">
            <div class="bg-light text-dark">
                <QuillEditor contetType='html'  theme="snow" v-model:content="cont" ref="editor"/>
            </div>
            <button @click="log">Print data</button>
        </div>
        
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
                        <button class="btn btn-outline-info text-left" @click="editPost(id)" type="button" data-bs-toggle="modal" data-bs-target="#postedit">Přečíst</button>
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


        <div class="modal fade" id="postedit" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl modal-fullscreen-md-down modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="post">{{ nowshowing.name }}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div>
                        <div class="bg-light text-dark">
                            <QuillEditor contetType='html' theme="snow" ref="editor"></QuillEditor>
                        </div>
                        <button @click="log">Print data</button>
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
    const editor = ref(QuillEditor)
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
            log: function() {
                console.log(editor.value.getHTML())
            },
            showPost: function (id:number) {

                this.nowshowing = this.posts[id]
            },
            editPost: function (id:number) {
                editor.value.setHTML(this.posts[id].content)
                
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
    .reset-this {
    animation : none;
    animation-delay : 0;
    animation-direction : normal;
    animation-duration : 0;
    animation-fill-mode : none;
    animation-iteration-count : 1;
    animation-name : none;
    animation-play-state : running;
    animation-timing-function : ease;
    backface-visibility : visible;
    background : 0;
    background-attachment : scroll;
    background-clip : border-box;
    background-color : transparent;
    background-image : none;
    background-origin : padding-box;
    background-position : 0 0;
    background-position-x : 0;
    background-position-y : 0;
    background-repeat : repeat;
    background-size : auto auto;
    border : 0;
    border-style : none;
    border-width : medium;
    border-color : inherit;
    border-bottom : 0;
    border-bottom-color : inherit;
    border-bottom-left-radius : 0;
    border-bottom-right-radius : 0;
    border-bottom-style : none;
    border-bottom-width : medium;
    border-collapse : separate;
    border-image : none;
    border-left : 0;
    border-left-color : inherit;
    border-left-style : none;
    border-left-width : medium;
    border-radius : 0;
    border-right : 0;
    border-right-color : inherit;
    border-right-style : none;
    border-right-width : medium;
    border-spacing : 0;
    border-top : 0;
    border-top-color : inherit;
    border-top-left-radius : 0;
    border-top-right-radius : 0;
    border-top-style : none;
    border-top-width : medium;
    bottom : auto;
    box-shadow : none;
    box-sizing : content-box;
    caption-side : top;
    clear : none;
    clip : auto;
    color : inherit;
    columns : auto;
    column-count : auto;
    column-fill : balance;
    column-gap : normal;
    column-rule : medium none currentColor;
    column-rule-color : currentColor;
    column-rule-style : none;
    column-rule-width : none;
    column-span : 1;
    column-width : auto;
    content : normal;
    counter-increment : none;
    counter-reset : none;
    cursor : auto;
    direction : ltr;
    display : inline;
    empty-cells : show;
    float : none;
    font : normal;
    font-family : inherit;
    font-size : medium;
    font-style : normal;
    font-variant : normal;
    font-weight : normal;
    height : auto;
    hyphens : none;
    left : auto;
    letter-spacing : normal;
    line-height : normal;
    list-style : none;
    list-style-image : none;
    list-style-position : outside;
    list-style-type : disc;
    margin : 0;
    margin-bottom : 0;
    margin-left : 0;
    margin-right : 0;
    margin-top : 0;
    max-height : none;
    max-width : none;
    min-height : 0;
    min-width : 0;
    opacity : 1;
    orphans : 0;
    outline : 0;
    outline-color : invert;
    outline-style : none;
    outline-width : medium;
    overflow : visible;
    overflow-x : visible;
    overflow-y : visible;
    padding : 0;
    padding-bottom : 0;
    padding-left : 0;
    padding-right : 0;
    padding-top : 0;
    page-break-after : auto;
    page-break-before : auto;
    page-break-inside : auto;
    perspective : none;
    perspective-origin : 50% 50%;
    position : static;
    /* May need to alter quotes for different locales (e.g fr) */
    quotes : '\201C' '\201D' '\2018' '\2019';
    right : auto;
    tab-size : 8;
    table-layout : auto;
    text-align : inherit;
    text-align-last : auto;
    text-decoration : none;
    text-decoration-color : inherit;
    text-decoration-line : none;
    text-decoration-style : solid;
    text-indent : 0;
    text-shadow : none;
    text-transform : none;
    top : auto;
    transform : none;
    transform-style : flat;
    transition : none;
    transition-delay : 0s;
    transition-duration : 0s;
    transition-property : none;
    transition-timing-function : ease;
    unicode-bidi : normal;
    vertical-align : baseline;
    visibility : visible;
    white-space : normal;
    widows : 0;
    width : auto;
    word-spacing : normal;
    z-index : auto;
    /* basic modern patch */
    all: initial;
    all: unset;
}
</style>
