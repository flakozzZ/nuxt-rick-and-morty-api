import axios from "axios";


export const useCharacterStore = defineStore('characters', {
    state: () => ({
        allCharacters: [],
        getCharacters: [] as any,
        episodeCharacters: [] as any
    }),
    actions: {
        async GET_ALL_CHARACTERS() {
            try {
                const response = await axios.get('https://rickandmortyapi.com/api/character')
                this.allCharacters = response.data.results;
            } catch (e) {
                console.error(e)
            }

        },
        async GET_CHARACTER_EPISODES(id: string | string[]) {
            try {
                const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
                this.getCharacters = response.data
                const getURL = this.getCharacters.episode
                const getMap = getURL.map((url: string) => axios.get(url))
                const getPromise = await Promise.all(getMap)
                this.episodeCharacters = getPromise.map((getResponse) => getResponse.data)

            } catch (e) {
                console.error(e)
            }
        }
    }
})