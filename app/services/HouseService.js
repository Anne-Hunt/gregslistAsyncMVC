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

    async createHouses(houseData) {
        let response = await api.post('api/houses', houseData)
        console.log('service housing', response)
        const house = new House(response.data)
        AppState.houses.push(house)
    }

    async trashHouse(houseId) {
        let response = await api.delete(`api/houses/${houseId}`)
        console.log('trashing house', response)
        const houseToTrash = AppState.houses.findIndex(house => house.id == houseId)
        AppState.houses.splice(houseToTrash, 1)
    }


}

export const houseService = new HouseService()