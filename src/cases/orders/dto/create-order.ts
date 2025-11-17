export interface CreateOrderDTO {
    customerId: string;
    shipping: number;
    total: number;
    items: {
        productId: string;
        quantity: number;
        value: number; 
    }[];
}
