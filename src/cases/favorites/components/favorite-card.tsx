import { Star, ShoppingCart } from "lucide-react";
import type { FavoriteDTO } from "../dtos/favorite.dto";
import { useCartContext } from "@/cases/cart/hooks/use-cart.context";

interface FavoriteCardProps {
    favorite: FavoriteDTO;
}

export default function FavoriteCard({ favorite }: FavoriteCardProps) {
    const { addToCart } = useCartContext();
    const product = favorite.product;
    const price = Number(product.price);

    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const userId = user?.id;

    function handleAddToCart() {
        addToCart({
            id: product.id!,
            name: product.name,
            price: product.price,
            userId: userId,
        });
    }

    return (
        <div className="relative border rounded-2xl shadow-sm p-4 bg-white hover:shadow-lg transition-all duration-300 group">
            {/* Botão de carrinho */}
            <button
                onClick={handleAddToCart}
                className="absolute top-4 right-4 bg-primary text-white p-2 rounded-full shadow-md hover:bg-primary/90 transition"
                aria-label="Adicionar ao carrinho"
            >
                <ShoppingCart className="w-5 h-5" />
            </button>

            {/* Nome do produto */}
            <h3 className="font-semibold text-lg text-gray-900 mb-1">{product.name}</h3>

            {/* Categoria */}
            {product.category && (
                <p className="text-sm text-gray-500">{product.category}</p>
            )}

            {/* Preço */}
            <p className="mt-2 font-bold text-primary text-lg">
                R$ {price.toFixed(2)}
            </p>

            {/* Avaliação */}
            {product.rating && (
                <div className="flex items-center gap-1 mt-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-yellow-500 stroke-yellow-500" />
                    <span className="text-sm">{product.rating}</span>
                </div>
            )}
        </div>
    );
}
