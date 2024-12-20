import http from "@/shared/services/http-common.ts";
import {AxiosResponse} from "axios";
import {Product} from "@/products/model/product.entity.ts";

export class ProductsApiService{

    /**
     * Get all products from the API
     * @returns Promise<AxiosResponse<Product[]>>
     */
    async getAllProducts() : Promise<AxiosResponse<Product[]>>{
        return http.get<Product[]>("/products");
    }

}