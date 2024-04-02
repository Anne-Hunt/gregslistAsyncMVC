import { AppState } from "../AppState.js";

export class House {
  constructor(data) {
    this.id = data.id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.creatorId = data.creatorId
    this.creator = data.creator
  }

  get HouseTemplate() {
    return `
        <div class="col-12 col-md-6 p-2">
  <div class="card">
    <img class="card-img-top"
      src="${this.imgUrl}"
      alt="Image of a ${this.year}, ${this.bedrooms} ${this.bathrooms} House">
    <div class="card-body">
      <h3 class="card-title">${this.bedrooms} bedrooms, ${this.bathrooms} bathrooms ${this.year}</h3>
      <p class="card-text">${this.description}</p>
      <div class="d-flex justify-content-between align-items-center">
        <p class="fw-bold fs-4">$${this.price}</p>
        <div>
          <span class="text-secondary me-2">${this.creator.name}</span>
          <img class="profile-picture profile-picture-sm"
            src="${this.creator.picture}"
            alt="an image of ${this.creator.name}">
        </div>
      </div>
    </div>
    <button onclick="app.HouseController.trashHouse('${this.id}')"class="btn btn-danger rounded border-5"><i class="mdi mdi-delete-circle-outline"></i></button>
  </div>
</div>  
        `
  }
}