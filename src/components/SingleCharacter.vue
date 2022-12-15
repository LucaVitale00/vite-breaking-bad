<script >

export default {

    name: "SingleCharacter",
    props: ["info"]

}
</script>

<template>

    <div class="character text-center">
        <img :src="info.image" alt="info.name">
        <h4>{{ info.name }}</h4>
        <div>{{ info.status }}</div>
        <div class="font-weight-bold">{{ info.species }}</div>
    </div>


</template>

<style lang="scss" scoped>
h4 {
    text-transform: capitalize;

    &::after {
        content: '';
        display: block;
        width: 40px;
        height: 1px;
        margin: 1rem, auto;
    }
}

img {
    border-radius: 50%;
    box-shadow: 0 0 6px 3px rgba(#000, 0.15);
}
</style>
