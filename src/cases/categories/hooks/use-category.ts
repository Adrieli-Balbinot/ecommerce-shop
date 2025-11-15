import { useQuery } from "@tanstack/react-query";
import { CategoryService } from "../services/category.service";
import type { CategoryDTO } from "../dto/category.dto";


export function useCategory(id: string) {
    return useQuery<CategoryDTO>({
        queryKey: ["categories", id],
        queryFn: () => CategoryService.getById(id),
        enabled: !!id
    });
}

export function useCategories() {
    return useQuery<CategoryDTO[]>({
        queryKey: ["categories"],
        queryFn: CategoryService.list
    });
}
