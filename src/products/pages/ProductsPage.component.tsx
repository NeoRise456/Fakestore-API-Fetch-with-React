import {useState, useEffect} from "react";
import {Product} from "@/products/model/product.entity.ts";
import {ProductsApiService} from "@/products/services/products-api.service.ts";
import {ProductItem} from "@/products/components/ProductItem.component.tsx";

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
            <div>
                <h1>Products Page</h1>
                <div>
                    {products.map(
                        (product: Product) => (
                            <li key={product.id}>{product.title}</li>
                        )
                    )}
                </div>
                <div>
                    <ProductItem/>
                </div>
            </div>
        </>
    )
}