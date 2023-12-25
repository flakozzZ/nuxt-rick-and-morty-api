import axios from "axios";


export const useCharacterStore = defineStore('characters', {
    state: () => ({
        allCharacters: [] as any
    }),
    actions: {
        async GET_ALL_CHARACTERS() {
            try {
                const response = await axios.get('https://rickandmortyapi.com/api/character')
                this.allCharacters = response.data.results;
            } catch (e) {
                console.error(e)
            }

        }
    }
})