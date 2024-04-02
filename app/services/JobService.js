import { AppState } from "../AppState.js"
import { Job } from "../models/Job.js"
import { api } from "./AxiosService.js"


class JobService {
    async getJobs() {
        let response = await api.get('api/jobs')
        console.log('service waiting', response)
        const jobs = response.data.map(job => new Job(job))
        console.log('response', jobs)
        AppState.jobs = jobs
    }

    async createJobs(jobData) {
        let response = await api.post('api/jobs', jobData)
        console.log('service jobbing', response)
        const job = new Job(response.data)
        AppState.jobs.push(job)
    }

    async trashJobs(jobId) {
        let response = await api.delete(`api/jobs/${jobId}`)
        console.log('deleting', response)
        let jobToTrash = AppState.jobs.findIndex(job => job.id == jobId)
        AppState.jobs.splice(jobToTrash, 1)
    }
}
export const jobService = new JobService()