import { useState } from "react";
import FavoriteCard from "./favorite-card";
import { CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";
import type { FavoriteDTO } from "../dtos/favorite.dto";

export function FavoriteLayout() {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    const [favorites] = useState<FavoriteDTO[]>(() => {
        const stored = localStorage.getItem("favorites");
        return stored ? JSON.parse(stored) : [];
    });

    const favoritesFiltered = favorites.filter(
        fav => fav.idUser === user.id
    );

    return (
        <div className="p-6 w-full"> 
            
            {/* Título alinhado à esquerda */}
            <div className="flex items-center gap-3 mb-8">
                <Heart className="w-7 h-7 text-primary" />
                <CardTitle className="text-3xl font-bold text-black dark:text-white">
                    Meus Produtos Favoritos
                </CardTitle>
            </div>

            {/* Estado vazio centralizado */}
            {favoritesFiltered.length === 0 && (
                <div className="flex flex-col items-center justify-center mt-24 text-center w-full">
                    <Heart className="w-16 h-16 text-gray-300 mb-4" />
                    <p className="text-gray-500 text-lg">
                        Você ainda não adicionou nenhum favorito.
                    </p>
                </div>
            )}

            {/* Cards alinhados à esquerda */}
            {favoritesFiltered.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-start w-full">
                    {favoritesFiltered.map((fav) => (
                        <FavoriteCard
                            key={fav.id}
                            favorite={fav}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
