<script setup lang="ts">
</script>

<template>
    <div>
        <h1>O mně</h1>
        
        <h2>Kdo jsem?</h2>

        <h2>Jak jsem začal s Počítačem</h2>
        <p class="text-justify">
            Začal jsem ve 4.třídě, když jsem dostal svůj vlastní (né zrovna dobrý) počítač s Debian 6. Tím jsem byl seznámen s Linux ekosytémem.
            Po tomhle počítači jsem udělal vyměnu za nový, který jsem měl až do začátku střední školy. Tenhle počítač byl vybaven "Intel Pentium dual core" a "Nvidia gtx 420". Na něm jsem se naučil Python a tvorbu webů. Můj momentální počítač má "Intel i5 11gen" s "AMD Radeon rx 6600".
        </p>

        <h2>Co umím</h2>
        <p class="text-justify">
            Mám zkušenosti s většinou nejznámějších programovacích jazyků, jako je Python, Lua, C, JavaScript a TypeScript.

            
            Mým preferovaným jazykem je TypeScript. <br>

            <h3>Graf zkušeností:</h3>
            <div class="progress text-dark" style="height: 1.3rem;">
                <div class="progress-bar text-dark" role="progressbar" style="width: 36%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"><b>Python</b></div>
                <div class="progress-bar text-dark bg-success" role="progressbar" style="width: 60%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"><b>TypeScript (JS)</b></div>
                <div class="progress-bar text-dark bg-info" role="progressbar" style="width: 2%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"><b>Lua</b></div>
                <div class="progress-bar text-dark bg-warning" role="progressbar" style="width: 2%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"><b>C</b></div>
            </div>
        </p>
        <h2>Co neumím</h2>
        <p>
            Gramatiku! Takže za chyby se omlouvám. 😊
        </p>

        <router-link to="/about/web">O stránce</router-link>
    </div>
</template>

<style scoped>

</style>
