import { AppState } from "../AppState.js";

export class Job {
  constructor(data) {
    this.id = data.id
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = data.updatedAt
    this.creatorId = data.creatorId
    this.creator = data.creator
  }

  get JobTemplate() {
    return `
        <div class="col-12 col-md-6 p-2">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">${this.jobTitle}</h3>
                <p class="card-text">${this.rate}/${this.hours}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <p class="fw-bold fs-4">$${this.company}</p>
                    <div>
                        <span class="text-secondary me-2">${this.creator.name}</span>
                        <img class="profile-picture profile-picture-sm" src="${this.creator.picture}"
                            alt="an image of ${this.creator.name}">
                    </div>
                </div>
                <div class="text-secondary">Listed on ${this.createdAt.toDateString()}</div>
            </div>
            <button onclick="app.JobController.trashJob('${this.id}')" class="btn btn-danger rounded border-5"><i
                    class="mdi mdi-delete-circle-outline"></i></button>
        </div>
    </div>
        `
  }
}