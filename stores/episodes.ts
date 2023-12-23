import {defineStore} from "pinia";
import axios from "axios";

export const useEpisodeStore = defineStore('episode', {
    state: () => ({
        episodes: [],
        characters: [] as any
    }),
    actions: {
        async GET_ALL_EPISODES() {
            const response = await axios.get('https://rickandmortyapi.com/api/episode')
            this.episodes = response.data.results;
        },
        async GET_CHARACTER_EPISODES(id: string | string[]) {
            const response = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`)
            const episodeCharacters = response.data
            const getURL = episodeCharacters.characters;
            const getMap = getURL.map((url: string) => axios.get(url))
            const getPromise = await Promise.all(getMap)
            this.characters = getPromise.map((getResponse) => getResponse.data);

        }
    }
})