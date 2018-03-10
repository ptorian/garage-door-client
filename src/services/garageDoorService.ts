import { axios } from "./axiosService";

class GarageDoorService {
    async getAllGarageDoors() {
        return await axios.get(`/garage-doors`);
    }

    async triggerOpener(garageDoorId: string) {
        return await axios.post(`/garage-doors/${garageDoorId}/trigger-opener`);
    }
}

export const garageDoorService = new GarageDoorService();