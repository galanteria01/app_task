import { API_URL } from "../utils/constants";

class ApiService {
  apiUrl: string;
  constructor() {
    this.apiUrl = API_URL;
  }
  async getUsers(page: number) {
    const response = await fetch(`${this.apiUrl}?page=${page}`);
    return await response.json();
  }
  async getUser(id: number) {
    const response = await fetch(`${this.apiUrl}/${id}`);
    return await response.json();
  }
}

export default ApiService