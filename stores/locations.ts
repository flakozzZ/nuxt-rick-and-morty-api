import axios from "axios";


export const useLocationStore = defineStore('location', {
    state: () => ({
        locations: [],
        locationCharacters: [] as any,
    }),
    actions: {
        async GET_ALL_LOCATIONS() {
            try {
                const response = await axios.get('https://rickandmortyapi.com/api/location')
                this.locations = response.data.results
            } catch (e) {
                console.error(e)
            }

        },
        async GET_CHARACTER_LOCATIONS(id: string | string[]) {
            try {
                const response = await axios.get(`https://rickandmortyapi.com/api/location/${id}`)
                const responseData = response.data
                const getURL = responseData.residents
                const getMap = getURL.map((url: string) => axios.get(url))
                const getPromise = await Promise.all(getMap);
                this.locationCharacters = getPromise.map((getResponse) => getResponse.data)
            } catch (e) {
                console.error(e)
            }

        }
    }
})