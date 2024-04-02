import { AppState } from "../AppState.js"
import { houseService } from "../services/HouseService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class HousesController {
    constructor() {
        this.getHouses()
        AppState.on('houses', this.drawHouses)
        AppState.on('account', this.drawHouses)
        AppState.on('account', this.displayHouseForm)
        this.displayHouseForm()
    }


    async getHouses() {
        try {
            await houseService.getHouses()
        } catch (error) {
            console.log('houses get error', TypeError)
            Pop.toast("Uh-oh! Where did the houses go?", 'error')
        }

    }

    displayHouseForm() {
        const account = AppState.account
        if (account) {
            const formElm = document.getElementById('house-form')
            formElm.classList.remove('d-none')
        }
    }

    async createHouses() {
        try {
            event.preventDefault()
            console.log('house form submitted')
            const form = event.target
            const houseData = getFormData(form)
            console.log('getting data', houseData)
            await houseService.createHouses(houseData)
        }
        catch (error) {
            console.log("ERROR")
            Pop.toast("House rejected, try again", "error")
        }
    }

    drawHouses() {
        console.log('house draw time')
        let houseDisplay = ''
        AppState.houses.forEach(house => houseDisplay += house.HouseTemplate)
        setHTML('house-display', houseDisplay)
    }

    async trashHouse(houseId) {
        try {
            console.log('delete engaged on house', houseId)
            let result = await Pop.confirm("Do you want to delete this house?", "warning")
            if (result == false) return

            await houseService.trashHouse(houseId)
        } catch (error) {
            console.log("ERROR")
            Pop.toast("Sorry, unable to delete", "warning")
        }

    }
}