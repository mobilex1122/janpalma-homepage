

<script setup lang="ts">
    import carousellMain from '@comp/carousell/carousell-main.vue';
    import carousellImg from '@comp/carousell/carousell-img.vue';
    import carousellYt from '@comp/carousell/carousell-yt.vue';
    import ytvideo from '@comp/yt/video.vue';
    import ytgrid from '@comp/yt/grid.vue';
</script>

<template>
    <h1>Galerie</h1>
    
    <h2>Tapety <a class="btn btn-primary" target="_blank" href="https://gallery.mobilex1122.eu/index.php?/category/wallpapers">Zobrazit vše</a></h2>
    <carousellMain id="wallpapers">
        <carousellImg src="img/wall/wall1.jpg" class="active"/>
        <carousellImg src="img/wall/wall2.png" />
        <carousellImg src="img/wall/wall3.png" />
    </carousellMain>

    <br>
    <h2>2D Tvorba <a class="btn btn-primary" target="_blank"  href="https://gallery.mobilex1122.eu/index.php?/category/12">Zobrazit vše</a></h2>
    <carousellMain id="2dart">
        <carousellImg src="img/2d/img1.png" class="active"/>
        <carousellImg src="img/2d/img2.png"/>
        <carousellImg src="img/2d/img3.png"/>
    </carousellMain>
    <br>
    <h2>Videa <a class="btn btn-primary" target="_blank"  href="https://www.youtube.com/@MobilexENCZ">Zobrazit vše</a></h2>
    <carousellMain id="test">
        <carousellYt video="OKbuN4DAvUg" title="Kasedo Games - Into (concept)" class="active"/>
        <carousellYt video="TApyWru5q4Q" title="Cool guys - animation (Inspired by NFS intro)"/>
        <carousellYt video="lUBJjQCdMH8" title="Factorio Wube logo animation"/>
    </carousellMain>
    <!-- <ytgrid>
        <ytvideo id="kesedo" video="OKbuN4DAvUg" title="Kasedo Games - Into (concept)"/>
        <ytvideo id="nfs" video="TApyWru5q4Q" title="Cool guys - animation (Inspired by NFS intro)"/>
        <ytvideo id="factorio" video="lUBJjQCdMH8" title="Factorio Wube logo animation"/>
    </ytgrid> -->
    
        

</template>

<style scoped>
    
</style>
