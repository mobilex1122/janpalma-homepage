Adresa: `/about/web`

Tato stránka byla vytvořená pomocí Typescriptu, Vue,Vite a Bootstrap 5.3 (Alfa)

## Obsidian Poznámky
Poznámky kde jsou předlohy, Návrhy a Mapy* stránky.

Můžou tam být gramatické chyby

---

*Tlačítka*

---

*: Mapy jsou vyditelné pouze v softwaru Obsidian

## Frameworky
### Vue
Je framework pro JavaScript který ulehčuje tvorbu UI (Uživatelského Rozhtaní). Dá se nainsatllovat pomocí `npm` (node package manager) nebo jen importovat `CDN` (Content Delivery Network). Celá tahle stránka byla vytvořená pomocí Vue, i s vlastníma komponentama.

Většina stránek vyvořených pomocí Vue je rozkouskovaná na víc souborů `.vue` které můžou být celé stránky nebo jen komponenty. Výhodou komponentů je že místo psaní velkého kódu pořát dokola se může psát jeden kradší který dosáhne stejného výsledku.

#### Příklad
##### Normální kód:
```vue
<div class="carousel-item w-100 bg-white position-relative">
    <div style="isolation: isolate;">
        <img style="width: 100%; object-fit: cover; aspect-ratio: 16/9;" class="m-0 p-0" src="'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg'" alt="">
        <b class="d-md-block d-none position-absolute text-white text-center bottom-0 start-0 w-100 pb-2" style="filter: drop-shadow(black 0 0px 4px);">Video</b>
        <button type="button" class="position-absolute m-0 p-1 top-50 start-50 translate-middle btn rounded-circle btn-outline-light border-0" style="width: 30%; min-width: 5rem; max-width: 10rem;  aspect-ratio: 1; filter: drop-shadow(black 0 0 5px); aspect-ratio: 1/1; z-index: 2;" data-bs-toggle="modal" data-bs-target="'#video">
            <svg xmlns="http://www.w3.org/2000/svg" style="width: 100%; aspect-ratio:1 ;" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
            </svg>
        </button>
    </div>
    <div class="modal modal-xl fade" id="video" tabindex="-1" aria-labelledby="video" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Video</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <iframe class="w-100" style="aspect-ratio: 16/9;" src="'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>  
</div>
```
##### Vue kód:

Stejný kód jen přepsaný do kompomentu a importovaný pod jménem `carousellYt`
```vue
<carousellYt video="dQw4w9WgXcQ" title="Video"/>
```

### Vite

Vite je tzv.: `Bundler` což je software který zjednodušuje a spravuje `.js`,`.html`,`.css`,`.scss` soubory a zabaluje je je do menších souborů.  
Umí V reálném čase převádět Typescript a scss soubory do JS a css souborů.  
Tež umí `HMR` (Hot Module Replacement) což je umožnůje změnu kódu bez potřeby restartu stránky.  
Tahle stránka je normálně přibližně 15 souborů a vy se koukáte na stejnou stránku která má jen 5 souborů z těch jen jeden je `.html`.

### TypeScript
TypeScip je takový lepší JavaScript (Je prakticky stejný jen má funkce navíc)

### Bootstrap
Bootstrap je vysoce upravitelná css/js sada která umožnůje rychle tvořit responzivní webové stránky. Většina elementů na téhle stránce byla vytvořená pomocí bootstrapu.
[Bootstrap Stránky](https://getbootstrap.com/)
## Vlastní styly, komponenty