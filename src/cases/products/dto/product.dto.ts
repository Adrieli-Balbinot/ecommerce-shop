import type { CategoryDTO } from "@/cases/categories/dto/category.dto";

export interface ProductDTO {
  id?: string;
  name: string;
  description?: string;
  price: number;
  active: boolean;
  category: CategoryDTO;
  rating: number;    
  ratingsCount: number;
}