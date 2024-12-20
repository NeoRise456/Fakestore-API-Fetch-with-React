import {Rating} from "./rating.entity.ts";

export class Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;

    constructor(id: number,
                title: string,
                price: number,
                description: string,
                category: string,
                image: string,
                rating: Rating) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.category = category;
        this.image = image;
        this.rating = rating;
    }
}