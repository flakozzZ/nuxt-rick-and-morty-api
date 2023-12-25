import {defineStore} from "pinia";
import axios from "axios";

export const useEpisodeStore = defineStore('episode', {
    state: () => ({
        episodes: [],
        characters: [] as any
    }),
    actions: {
        async GET_ALL_EPISODES() {
            try {
                const response = await axios.get('https://rickandmortyapi.com/api/episode')
                this.episodes = response.data.results;
            } catch (e) {
                console.error(e)
            }

        },
        async GET_CHARACTER_EPISODES(id: string | string[]) {
            try {
                const response = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`)
                const episodeCharacters = response.data
                const getURL = episodeCharacters.characters;
                const getMap = getURL.map((url: string) => axios.get(url))
                const getPromise = await Promise.all(getMap)
                this.characters = getPromise.map((getResponse) => getResponse.data);

            } catch (e) {
                console.error(e)
            }

        }
    }
})