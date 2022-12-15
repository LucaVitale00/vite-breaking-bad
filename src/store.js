import { reactive } from 'vue'

export const store = reactive({
    characterList: [],
    apiURL: "https://rickandmortyapi.com/api/character",
    titolo: "Rick and Morty App",
    status: "Open this select menu",
    parameter: "status",
    options: [
        { text: 'Alive', value: 'Alive' },
        { text: 'Dead', value: 'Dead' },
        { text: 'Unknown', value: 'unknown' },
    ],
    isLoading: true,
    totalResults: 0
});