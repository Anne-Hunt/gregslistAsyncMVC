import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"
import { House } from "../models/House.js"


class HouseService {

    async getHouses() {
        let response = await api.get('api/houses')
        console.log('service waiting', response)
        const houses = response.data.map(house => new House(house))
        console.log('response', houses)
        AppState.houses = houses
    }


}

export const houseService = new HouseService()