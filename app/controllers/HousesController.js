import { carsService } from "../services/CarsService.js"
import { houseService } from "../services/HousesService.js"

export class HousesController {
    constructor() {
        this.getHouses()
    }


    async getHouses() {
        await houseService.getHouses()

    }
}