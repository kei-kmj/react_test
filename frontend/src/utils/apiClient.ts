import axios, {AxiosResponse} from "axios";

export class ApiClient {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async getDate(): Promise<AxiosResponse<{ data: string }>> {
        return await axios.get(`${this.baseUrl}/api/data`);
    }
}