import { reactive } from "vue";


export const state = reactive({
    lighttheme: false,
    reducedanim: false,
    blur: true

})

export const pages = [
    {
        name: "Stránky",
        ismain:true,
        type: "routes",
        pages: [
            {title: "Domov", url:"/"},
            {title: "O mně", url:"/about"},
            {title: "Galerie", url:"/gallery"},
            {title: "Projekty", url:"/projects"},
            {title: "Blog", url:"/blog"},
        ]
    },
    {
        name: "Socialní sítě",
        ismain:false,
        type: "links",
        pages: [
            {title: "Github", url:"https://github.com/mobilex1122"},
            {title: "Yotube", url:"https://www.youtube.com/@mobilexENCZ"},
            {title: "Facebook", url:"https://www.facebook.com/mobilex1122.cz/"},
            {title: "Instagram", url:"https://www.instagram.com/mobilex1122_cz/"},
            {title: "Twitter", url:"https://twitter.com/mobilex1122"},
        ]
    },
]
