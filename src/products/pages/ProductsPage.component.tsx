import {useState, useEffect} from "react";
import {Product} from "@/products/model/product.entity.ts";
import {ProductsApiService} from "@/products/services/products-api.service.ts";
import {FakestoreToolbar} from "@/public/components/FakestoreToolbar.component.tsx";
import {ProductList} from "@/products/components/ProductList.component.tsx";

export function ProductsPage () {
    const [products,setProducts] = useState<Product[]>([]);
    const productApiService = new ProductsApiService();

    // methods
    async function fetchAllProducts(){
        const response = await productApiService.getAllProducts();
        setProducts(response.data);
    }

    useEffect(
        () => {
            fetchAllProducts();
        }, []);

    return (
        <>
            <div className="flex flex-col">
                <FakestoreToolbar/>
                <div className="p-8">
                    <ProductList products={products}/>
                </div>
            </div>
        </>
    )
}