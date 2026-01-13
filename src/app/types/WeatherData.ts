import { Dispatch, SetStateAction } from "react";

export interface WeatherData {
    name: string;
    main: string;
    description: string;
    icon: string;
    temp: number;
    humidity: number;
    windSpeed: number;
}

export interface CardRequestProps {
    setWeatherInfo: Dispatch<SetStateAction<WeatherData | null>>;
}

export interface CardResponseProps {
    weatherInfo: WeatherData | null;
}