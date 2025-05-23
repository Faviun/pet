import { axiosInstance } from "./instance"
import { ApiRoutes } from "./constans"
import { Ingredient } from "@prisma/client"

export const getAll = async (): Promise<Ingredient[]> => {
    return (await axiosInstance.get<Ingredient[]>(ApiRoutes.SEARCH_INGREDIENTS)).data;
}