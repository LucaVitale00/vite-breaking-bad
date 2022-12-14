<script>
import axios from "axios";
import SingleCharacter from './SingleCharacter.vue';

export default{
    name: "CharacterList",
    components:{SingleCharacter},
    props:{},
    data() {
        return {
            charactersList:[],
        };
    },
    created() {
        axios.get("https://rickandmortyapi.com/api/character")
        .then(resp =>{
            this.charactersList = resp.data.results;
        });
    },
};
</script>

<template>
    <section>
        <div class="container">
            <div class="row row-col-4 roe-col-md-6 g-4">
                <div class="col" v-for="(singlecharacter, index) in charactersList" :key="index">
                    <SingleCharacter :character="singlecharacter"></SingleCharacter>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">

section{
    background-color: rgb(46, 58, 70);
}
.container{
    padding: 3rem;
    background-color: white;
}
</style>
