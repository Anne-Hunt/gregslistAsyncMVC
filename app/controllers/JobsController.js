import { AppState } from "../AppState.js"
import { jobService } from "../services/JobsService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class JobsController {
    constructor() {
        this.getJobs()
        AppState.on('jobs', this.drawJobs)
        AppState.on('account', this.drawJobs)
        AppState.on('account', this.displayJobForm)
        this.displayJobForm()
    }

    async getJobs() {
        try {
            await jobService.getJobs()
        } catch (error) {
            Pop.toast("No jobs for you!", 'error')
        }
    }

    displayJobForm() {
        const account = AppState.account
        if (account) {
            const formElm = document.getElementById('job-form')
            formElm.classList.remove('d-none')
        }
    }

    drawJobs() {
        console.log('imagining job outlook')
        let jobDisplay = ''
        AppState.jobs.forEach(job => jobDisplay += job.JobTemplate)
        setHTML('job-display', jobDisplay)
    }

    async createJobs() {
        try {
            event.preventDefault()
            console.log('job form submitted')
            const form = event.target
            const jobData = getFormData(form)
            console.log('getting data', jobData)
            await jobService.createJobs(jobData)
        }
        catch (error) {
            console.log("ERROR")
            Pop.toast("Job rejected, try again", "error")
        }
    }

    async trashJob(jobId) {
        try {
            console.log('delete button selected', jobId)
            Pop.confirm("Do you really want to delete this job?", "warning")
            await jobService.trashJobs(jobId)
        } catch (error) {
            console.log('ERROR')
            Pop.toast("Unable to delete", 'error')
        }
    }
}