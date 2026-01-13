import { api } from "./api";

export async function getWeatherByName(name: string) {

    try {

        const response = await api.get(`/weather/${name}`);
        return response.data;
        
    } catch (error: any) {
        if(error.satus == 404){}   
    }
}