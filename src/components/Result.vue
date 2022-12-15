
  
<script>

import { store } from '../store.js'
export default {
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div>
        <p>Numero totale di risultati: {{ store.totalResults }}</p>
    </div>
</template>
  