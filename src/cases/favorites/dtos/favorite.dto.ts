export interface FavoriteDTO {
    id: string;
    idUser: string;
    product: {
        id: string;
        name: string;
        price: number;
        rating?: number;
        category?: string;
        description?: string;
    };
}
