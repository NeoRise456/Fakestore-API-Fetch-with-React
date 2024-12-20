import {Product} from "@/products/model/product.entity.ts";
import {ProductItem} from "@/products/components/ProductItem.component.tsx";

interface ProductListProps {
    products: Product[];
}


export function ProductList({products} : ProductListProps){

    return (
        <>
            <div className="flex flex-row flex-wrap gap-12 justify-center">
                {products.map((product) => (
                    <ProductItem key={product.id} product={product}/>
                ))}
            </div>
        </>
    )
}