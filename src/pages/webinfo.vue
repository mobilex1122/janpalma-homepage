

<script setup lang="ts">
    import accorMain from '@comp/accordion/main.vue';
    import accorItem from '@comp/accordion/item.vue';
</script>

<template>
    <div>
        <h1>O Stránce</h1>
        
        <p>Tato stránka byla vytvořená pomocí Typescriptu, Vue,Vite a Bootstrap 5.3</p>


        <h2>Frameworky</h2>
        <div class="card">
            <div class="card-header">

            <div class="nav nav-tabs card-header-tabs" id="frameworkinfo" role="tablist">
                <button class="nav-link d-flex align-items-center active" id="vue-tab" data-bs-toggle="tab" data-bs-target="#vue" type="button" role="tab" aria-controls="vue" aria-selected="true">
                    <img class="ratio-1x1" src="/svg/icons/vue.svg" alt="Vue logo" style="height: 2em; padding-right: 0.5em;"/>
                    Vue
                </button>
                <button class="nav-link d-flex align-items-center" id="vite-tab" data-bs-toggle="tab" data-bs-target="#vite" type="button" role="tab" aria-controls="vue" aria-selected="true">
                    <img class="ratio-1x1" src="/svg/icons/vite.svg" alt="Vite logo" style="height: 2em; padding-right: 0.5em;"/>
                    Vite
                </button>
                    <button class="nav-link d-flex align-items-center" id="ts-tab" data-bs-toggle="tab" data-bs-target="#ts" type="button" role="tab" aria-controls="vue" aria-selected="true">
                        <img class="ratio-1x1" src="/svg/icons/ts.svg" alt="Ts logo" style="height: 2em; padding-right: 0.5em;"/>
                        Typescript
                    </button>
                    <button class="nav-link d-flex align-items-center" id="vue-tab" data-bs-toggle="tab" data-bs-target="#bootstrap" type="button" role="tab" aria-controls="vue" aria-selected="true">
                        <img class="ratio-1x1" src="/svg/icons/bs.svg" alt="Bootstrap logo" style="height: 2em; padding-right: 0.5em;"/>
                        Bootstrap
                    </button>
                </div>
            </div>
            <div class="card-body">

            <div class="tab-content card-text" id="frameworkinfotabs">
                <div class="tab-pane m-2 show active" id="vue" role="tabpanel" aria-labelledby="vue-tab" tabindex="0">
                    <h3>Vue</h3>
                    <p>
                        Je framework pro JavaScript, který ulehčuje tvorbu UI (Uživatelského Rozhtaní).
                        Dá se nainsatllovat pomocí <ccode>npm</ccode> (node package manager) nebo jen importovat <ccode>CDN</ccode> (Content Delivery Network).
                        Celá tahle stránka byla vytvořená pomocí Vue, I s vlastními komponenty.
                    </p>
                    <p>
                        Většina stránek vyvořených pomocí Vue je rozkouskovaná na víc souborů <ccode>.vue</ccode>, které můžou být buť celými stránkami nebo jen komponenty.
                        Výhodou komponentů, je že místo psaní velkého kódu pořád dokola, se může psát jeden kratší, který dosáhne stejného výsledku.
                    </p>
                    <h4>Příklad</h4>
                    <h5>Normální kód:</h5>
                    <div class="bg-body-secondary rounded p-1">
                    <pre class="m-0"><code id="htmlViewer" style="color:rgb(171, 178, 191); font-weight:400;display:block;padding: .5em;">&lt;div <span style="color:rgb(249, 38, 114); font-weight:400;background:rgba(0, 0, 0, 0);">class</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;carousel-item w-100 bg-white position-relative&quot;</span>&gt;
    <span style="color:rgb(171, 178, 191); font-weight:400;background:rgba(0, 0, 0, 0);"><span style="color:rgb(171, 178, 191); font-weight:400;background:rgba(0, 0, 0, 0);">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;isolation: isolate;&quot;</span>&gt;</span>
        <span style="color:rgb(171, 178, 191); font-weight:400;background:rgba(0, 0, 0, 0);">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">style</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;width: 100%; object-fit: cover; aspect-ratio: 16/9;&quot;</span> <span class="hljs-attr">class</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;m-0 p-0&quot;</span> <span class="hljs-attr">src</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;&#x27;https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg&#x27;&quot;</span> <span class="hljs-attr">alt</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;&quot;</span>&gt;</span>
        <span style="color:rgb(171, 178, 191); font-weight:400;background:rgba(0, 0, 0, 0);">&lt;<span class="hljs-name">b</span> <span class="hljs-attr">class</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;d-md-block d-none position-absolute text-white text-center bottom-0 start-0 w-100 pb-2&quot;</span> <span class="hljs-attr">style</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;filter: drop-shadow(black 0 0px 4px);&quot;</span>&gt;</span>Video<span style="color:rgb(171, 178, 191); font-weight:400;background:rgba(0, 0, 0, 0);">&lt;/<span class="hljs-name">b</span>&gt;</span>
        <span style="color:rgb(171, 178, 191); font-weight:400;background:rgba(0, 0, 0, 0);">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;button&quot;</span> <span class="hljs-attr">class</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;position-absolute m-0 p-1 top-50 start-50 translate-middle btn rounded-circle btn-outline-light border-0&quot;</span> <span class="hljs-attr">style</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;width: 30%; min-width: 5rem; max-width: 10rem;  aspect-ratio: 1; filter: drop-shadow(black 0 0 5px); aspect-ratio: 1/1; z-index: 2;&quot;</span> <span class="hljs-attr">data-bs-toggle</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;modal&quot;</span> <span class="hljs-attr">data-bs-target</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;&#x27;#video&quot;</span>&gt;</span>
            <span style="color:rgb(171, 178, 191); font-weight:400;background:rgba(0, 0, 0, 0);">&lt;<span class="hljs-name">svg</span> <span class="hljs-attr">xmlns</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;http://www.w3.org/2000/svg&quot;</span> <span class="hljs-attr">style</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;width: 100%; aspect-ratio:1 ;&quot;</span> <span class="hljs-attr">fill</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;currentColor&quot;</span> <span class="hljs-attr">class</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;bi bi-play-circle-fill&quot;</span> <span class="hljs-attr">viewBox</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;0 0 16 16&quot;</span>&gt;</span>
                <span style="color:rgb(171, 178, 191); font-weight:400;background:rgba(0, 0, 0, 0);">&lt;<span class="hljs-name">path</span> <span class="hljs-attr">d</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z&quot;</span>/&gt;</span>
                <span style="color:rgb(171, 178, 191); font-weight:400;background:rgba(0, 0, 0, 0);">&lt;<span class="hljs-name">path</span> <span class="hljs-attr">d</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z&quot;</span>/&gt;</span>
            <span style="color:rgb(171, 178, 191); font-weight:400;background:rgba(0, 0, 0, 0);">&lt;/<span class="hljs-name">svg</span>&gt;</span>
        <span style="color:rgb(171, 178, 191); font-weight:400;background:rgba(0, 0, 0, 0);">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span style="color:rgb(171, 178, 191); font-weight:400;background:rgba(0, 0, 0, 0);">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span style="color:rgb(171, 178, 191); font-weight:400;background:rgba(0, 0, 0, 0);">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;modal modal-xl fade&quot;</span> <span class="hljs-attr">id</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;video&quot;</span> <span class="hljs-attr">tabindex</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;-1&quot;</span> <span class="hljs-attr">aria-labelledby</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;video&quot;</span> <span class="hljs-attr">aria-hidden</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;true&quot;</span>&gt;</span>
        <span style="color:rgb(171, 178, 191); font-weight:400;background:rgba(0, 0, 0, 0);">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;modal-dialog modal-dialog-centered&quot;</span>&gt;</span>
            <span style="color:rgb(171, 178, 191); font-weight:400;background:rgba(0, 0, 0, 0);">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;modal-content&quot;</span>&gt;</span>
                <span style="color:rgb(171, 178, 191); font-weight:400;background:rgba(0, 0, 0, 0);">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;modal-header&quot;</span>&gt;</span>
                    <span style="color:rgb(171, 178, 191); font-weight:400;background:rgba(0, 0, 0, 0);">&lt;<span class="hljs-name">h1</span> <span class="hljs-attr">class</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;modal-title fs-5&quot;</span> <span class="hljs-attr">id</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;exampleModalLabel&quot;</span>&gt;</span>Video<span style="color:rgb(171, 178, 191); font-weight:400;background:rgba(0, 0, 0, 0);">&lt;/<span class="hljs-name">h1</span>&gt;</span>
                    <span style="color:rgb(171, 178, 191); font-weight:400;background:rgba(0, 0, 0, 0);">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;button&quot;</span> <span class="hljs-attr">class</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;btn-close&quot;</span> <span class="hljs-attr">data-bs-dismiss</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;modal&quot;</span> <span class="hljs-attr">aria-label</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;Close&quot;</span>&gt;</span><span style="color:rgb(171, 178, 191); font-weight:400;background:rgba(0, 0, 0, 0);">&lt;/<span class="hljs-name">button</span>&gt;</span>
                <span style="color:rgb(171, 178, 191); font-weight:400;background:rgba(0, 0, 0, 0);">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span style="color:rgb(171, 178, 191); font-weight:400;background:rgba(0, 0, 0, 0);">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;modal-body&quot;</span>&gt;</span>
                    <span style="color:rgb(171, 178, 191); font-weight:400;background:rgba(0, 0, 0, 0);">&lt;<span class="hljs-name">iframe</span> <span class="hljs-attr">class</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;w-100&quot;</span> <span class="hljs-attr">style</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;aspect-ratio: 16/9;&quot;</span> <span class="hljs-attr">src</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;&#x27;https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ&quot;</span> <span class="hljs-attr">frameborder</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;0&quot;</span> <span class="hljs-attr">allowfullscreen</span>&gt;</span><span style="color:rgb(171, 178, 191); font-weight:400;background:rgba(0, 0, 0, 0);">&lt;/<span class="hljs-name">iframe</span>&gt;</span>
                <span style="color:rgb(171, 178, 191); font-weight:400;background:rgba(0, 0, 0, 0);">&lt;/<span class="hljs-name">div</span>&gt;</span>
            <span style="color:rgb(171, 178, 191); font-weight:400;background:rgba(0, 0, 0, 0);">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span style="color:rgb(171, 178, 191); font-weight:400;background:rgba(0, 0, 0, 0);">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span style="color:rgb(171, 178, 191); font-weight:400;background:rgba(0, 0, 0, 0);">&lt;/<span class="hljs-name">div</span>&gt;</span>  
<span style="color:rgb(171, 178, 191); font-weight:400;background:rgba(0, 0, 0, 0);">&lt;/<span class="hljs-name">div</span>&gt;</span></span></code></pre>
                    </div>
                    <br>
                    <h5>Vue kód:</h5>
                    <p>Stejný kód jen přepsaný do kompomentu a importovaný pod jménem <ccode>carousellYt</ccode></p>
                    <div class="bg-body-secondary rounded p-1">
                        <pre class="p-0 m-0"><code id="htmlViewer" style="color:rgb(171, 178, 191); font-weight:400;display:block;padding: .5em;"><span style="color:rgb(171, 178, 191); font-weight:400;background:rgba(0, 0, 0, 0);">&lt;<span style="color:rgb(224, 108, 117); font-weight:400;background:rgba(0, 0, 0, 0);">carousellYt</span> <span style="color:rgb(209, 154, 102); font-weight:400;background:rgba(0, 0, 0, 0);">video</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;dQw4w9WgXcQ&quot;</span> <span style="color:rgb(209, 154, 102); font-weight:400;background:rgba(0, 0, 0, 0);">title</span>=<span style="color:rgb(152, 195, 121); font-weight:400;background:rgba(0, 0, 0, 0);">&quot;Video&quot;</span>/&gt;</span></code></pre>
                    </div>
                </div>
                <div class="tab-pane m-2" id="vite" role="tabpanel" aria-labelledby="vite-tab" tabindex="0">
                    <h3>Vite</h3>
                    <p>
                        Vite je tzv.: <ccode>Bundler</ccode> což je software který zjednodušuje a spravuje <ccode>.js</ccode>,<ccode>.html</ccode>,<ccode>.css</ccode>,<ccode>.scss</ccode> soubory a zabaluje je je do menších souborů.<br>
                        Umí V reálném čase převádět Typescript a scss soubory do JS a css souborů.<br>
                        Tež umí <ccode>HMR</ccode> (Hot Module Replacement) což je umožnůje změnu kódu bez potřeby restartu stránky.<br>
                        Tahle stránka je normálně přibližně 15 souborů a vy se koukáte na stejnou stránku která má jen 5 souborů z těch jen jeden je <ccode>.html</ccode>.
                    </p>
                </div>
                <div class="tab-pane m-2" id="ts" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                    <h3>Typescript</h3>
                </div>
                <div class="tab-pane m-2" id="bootstrap" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                    <h3>Bootstrap</h3>
                    <p>
                        Bootstrap je vysoce upravitelná css/js sada která umožnůje rychle tvořit responzivní webové stránky.
                        Většina elementů na téhle stránce byla vytvořená pomocí bootstrapu.

                        
                    </p>
                    <a class="btn btn-primary" href="https://getbootstrap.com/">Bootstrap stránky</a>
                </div>
            </div>
        </div>
        </div>
        <!-- <br>
        <h2>Vlastní styly, komponenty</h2> -->


        <div class="modal fade" tabindex="-1" id="download">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Pozor</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>
                            Pro správné zobrazení potřebujete software jménem Obsidian. Který je dostupný ke stažení <a href="https://obsidian.md/download">Zde</a>
                        </p>
                        <p>
                            Pokud tento software nechcete stahovat můžete se podívat na online limitovanou verzy
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Zavřít</button>
                        <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#online">Otevřít Online</button>
                        <button type="button" class="btn btn-primary">Stáhnout</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" tabindex="-1" id="online">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Pozor</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>
                            Online verze je limitovaná a nemá všechny funkce dostupné (Jako mapy).
                        </p>
                        <p>
                            Doporučuju stáhnout Offline verzy.
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Zavřít</button>
                        <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#download">Stáhnout</button>
                        <a href="/obsidian/readme.html" target="_blank" type="button" class="btn btn-primary">Otevřít Online</a>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
</script>

<style scoped>
    
</style>
