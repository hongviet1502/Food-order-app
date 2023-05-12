import { ImageRequireSource } from "react-native/Libraries/Image/ImageSource";

export interface Restaurant {
    data: RestaurantData;
}

export interface RestaurantData {
    background?: ImageRequireSource;
    distance?: number;
    name?: string;
    type?: string;
    country?: string;
    currency?: string;
    rating?: number;
}
