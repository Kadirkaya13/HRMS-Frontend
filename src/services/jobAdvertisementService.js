import axios from "axios"

export default class JobAdvertisementService{
    getJobAdvertisement() {
        return axios.get("http://localhost:8080/api/jobAdvertisements/getallbyactive")
    }

    getJobAdvertisementId(id) {
        return axios.get("http://localhost:8080/api/jobAdvertisements/getbyid?id=" + id)
    }
}