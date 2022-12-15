<script >
import axios from "axios";
import AppHeader from './components/AppHeader.vue'
import CharacterList from './components/CharacterList.vue'
import Select from './components/select.vue';
import Result from './components/Result.vue';


import { store } from './store.js'

export default {

  name: "App",
  components: {
    AppHeader,
    CharacterList,
    Select,
    Result
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCharacters() {
      let myUrl = store.apiURL;
      store.status = store.status;

      if (store.status === "Alive") {

        myUrl += `?${store.parameter}=${store.status}`

      } else if (store.status === "Dead") {

        myUrl += `?${store.parameter}=${store.status}`

      } else if (store.status === "unknown") {

        myUrl += `?${store.parameter}=${store.status}`

      }

      axios
        .get(myUrl)
        .then(res => {
          store.characterList = res.data.results
          store.isLoading = false;
          store.totalResults = store.characterList.length;
        })
        .catch(err => {
          console.log("Errori", err);
        }

        );
    }
  },
  mounted() {
    this.getCharacters();
  }
}

</script>


<template>

  <div v-if="store.isLoading" class="spinner-grow" role="status">
    <span class="sr-only"></span>
  </div>
  <div v-else>
    <AppHeader :msg="store.titolo" />
    <Result />
    <main>
      <Select @filterCharacter="getCharacters" />
      <CharacterList />
    </main>
  </div>



</template>

<style lang="scss">
@use "../src/styles/generals.scss";


main {
  padding-top: 20px;
}
</style>
