import { Ingredient, ProductItem } from "@prisma/client";
import { mapPizzaType, PizzaSize, PizzaType } from "../constants/pizza";
import { calcTotalPrice } from "./calc-total-prices";

export const getProductDetails = (
    type: PizzaType,
    size: PizzaSize,
    items: ProductItem[],
    ingredients: Ingredient[],
    selectedIngredients: Set<number>,

) => {
    const totalPrice = calcTotalPrice(type, size, items, ingredients, selectedIngredients);
    const textDetails = `${size} см, ${mapPizzaType[type]} пицца, ингредиенты ${selectedIngredients.size}`;

    return { totalPrice, textDetails }
}