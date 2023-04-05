

<script setup lang="ts">
    import carousellMain from '@comp/carousell/carousell-main.vue';
    import carousellImg from '@comp/carousell/carousell-img.vue';
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
    <h2>3D Tvorba <a class="btn btn-primary" target="_blank"  href="https://gallery.mobilex1122.eu/index.php?/category/3">Zobrazit vše</a></h2>
    <carousellMain id="3dart">
        <carousellImg src="img/3d/img1.png" class="active"/>
        <carousellImg src="img/3d/img2.png"/>
        <carousellImg src="img/3d/img3.png"/>
        <carousellImg src="img/3d/img4.jpg"/>
    </carousellMain>
</template>

<style scoped>

</style>
