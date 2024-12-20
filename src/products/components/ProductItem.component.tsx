import {Product} from "@/products/model/product.entity.ts";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardDescription,
    CardTitle,
} from "@/components/ui/card"

interface ProductItemProps {
    product: Product;
}

export function ProductItem({product} : ProductItemProps){

    return (
        <Card className="w-80 overflow-hidden min-w-80">
            <CardHeader className="p-0">
                <div className="relative w-full h-52">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"/>
                </div>
            </CardHeader>
            <CardContent className="p-4">
                <CardTitle className="text-lg font-semibold">{product.title}</CardTitle>
                <CardDescription className="text-sm mt-2 ">{product.description}</CardDescription>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
            </CardFooter>
        </Card>
    )
}