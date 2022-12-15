<script>
import { store } from '../store.js'

export default {
    name: "Select",
    data() {
        return {
            store
        };
    }
};
</script>

<template>
    <select @change="$emit('filterCharacter')" class="form-select" aria-label="Default select example"
        v-model="store.status">
        <option selected>Open this select menu</option>
        <option v-for="option in store.options" :value="option.value">{{ option.text }}</option>
    </select>
</template>



<style lang="scss" scoped>
select {
    margin-bottom: 50px;
}
</style>