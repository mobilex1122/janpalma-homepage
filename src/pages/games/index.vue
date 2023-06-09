<script setup lang="ts">
    import itchSquare from "@comp/itch/darksquare.vue";
    import { state } from '../../props';
    import BSheart from "@comp/bsicons/heart-svg.vue"
</script>
<template>
    <div>
        <h1>Hry</h1>
        <h2>Co jsem vytvořil</h2>
        <div class="row row-cols-1 row-cols-md-2 row-cols-xxl-4 g-4">
            <div class="col">
                <itchSquare title="Cube crash 2" link="https://mobilex1122.itch.io/cubecrash2">
                    Jednoduchá uhíbací hra a taky prakticky první hra která byla udělaná v normální game engině.
                </itchSquare>
            </div>
            <div class="col">
                <itchSquare title="Duck platform" link="https://mobilex1122.itch.io/duck-platform">
                    Jednoduchá uhíbací hra a taky prakticky první hra která byla udělaná v normální game engině
                </itchSquare>
            </div>
            <div class="col">
                <itchSquare title="Sparking" link="https://mobilex1122.itch.io/sparking">
                    První hra kterou jsem udělal pro soutěž <a href="https://gogodotjam.com/" target="_blank">"GoGodot Jam 2"</a>.
                </itchSquare>
            </div>
            <div class="col">
                <itchSquare title="RObo" link="https://mobilex1122.itch.io/robo">
                    Zajímavej projekt na kterém jsem pracoval. Boužel tenhle projekt jsem ukončil ale chci udělat novou verzy.
                </itchSquare>
            </div>
        </div>
        <br>
        <h2>Co používám</h2>
        <p>MOje primární game engine je Godot ale také zkouším mnoho dalšich engin (převážně ty které nejsou tak známé)</p>
        <h3>List Enginu které jsem používal/zkoušel</h3>
        <div class="table-responsive">        
            <table class="table table-hover" :class='{"table-dark":!state.lighttheme,"table-striped":!state.lighttheme, "table-hover-dark":!state.lighttheme  }'>
                <thead>
                    <tr>
                        <th scope="col">Jméno</th>
                        <th scope="col">Jazyk</th>
                        <th scope="col">Hodnocení</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <tr>
                        <th scope="row">Godot</th>
                        <td>GDscript / C#</td>
                        <td><BSheart type="full"/></td>
                    </tr>
                    <tr>
                        <th scope="row">Tic-80</th>
                        <td>Lua</td>
                        <td><BSheart type="full"/></td>
                    </tr>
                    <tr>
                        <th scope="row">Pygame</th>
                        <td>Python</td>
                        <td><BSheart type="half"/></td>
                    </tr>
                    <tr>
                        <th scope="row">Liko-12</th>
                        <td>Lua</td>
                        <td><BSheart type="half"/></td>
                    </tr>
                    
                    
                    
                    <tr>
                        <th scope="row">GDevelop</th>
                        <td>Visual script</td>
                        <td><BSheart type="half"/></td>
                    </tr>

                    <tr>
                        <th scope="row">Enigma engine</th>
                        <td>Visual script</td>
                        <td><BSheart type="none"/></td>
                    </tr>

                    <tr>
                        <th scope="row">Phaser</th>
                        <td>JS/TS</td>
                        <td><BSheart type="none"/></td>
                    </tr>
                    
                    <tr>
                        <th scope="row">RPG Paper Maker</th>
                        <td>JS/TS</td>
                        <td>(Neohodnoceno)</td>
                    </tr>

                    <tr>
                        <th scope="row">Unity</th>
                        <td>C#</td>
                        <td><BSheart type="none"/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>