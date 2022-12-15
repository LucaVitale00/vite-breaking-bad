<script >
import SingleCharacter from '../components/SingleCharacter.vue'

import { store } from "../store.js";

export default {

    name: "CharacterList",
    components: {
        SingleCharacter
    },
    data() {
        return {
            store,
        }
    }

}
</script>

<template>

    <section class="container">
        <div class="row">
            <div class="col" v-for="character in store.characterList" :key="character.id">
                <SingleCharacter :info="character" />
            </div>

        </div>
    </section>


</template>

<style lang="scss" scoped>

</style>
