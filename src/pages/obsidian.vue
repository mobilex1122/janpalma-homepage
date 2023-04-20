<script setup lang="ts">
</script>

<template>
    <div>
        <h1>Obsidian Poznámky</h1>
        <p>Poznámky kde jsou předlohy, Návrhy a Mapy* stránky.</p>
        <hr>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#download">
            Launch demo modal
        </button>

        <a class="btn btn-primary" href="#">Stáhnout</a><a class="btn btn-primary" href="#">Otevřít online</a>
        <hr>

        <p>*: Mapy jsou viditelné pouze v softwaru Obsidian</p>




        <div class="modal" tabindex="-1" id="download">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Pozor</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Pro správné zobrazení potřebujete software jménem Obsidian.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Zavřít</button>
                        <button type="button" class="btn btn-primary">Stáhnout</button>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script lang="ts">
</script>

<style scoped>
    
</style>
