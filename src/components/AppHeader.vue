<script >
import { store } from "../store.js";


export default {

    name: "AppHeader",
    props: ["msg"]

}
</script>

<template>

    <header class="container">
        <h1 class="text-center my-5">
            {{ msg }}
        </h1>
    </header>


</template>

<style lang="scss" scoped>
h1 {
    font-weight: 700;
}
</style>
