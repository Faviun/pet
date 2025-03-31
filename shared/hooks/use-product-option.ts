import React from "react";
import { Variant } from '../components/shared/group-variants';
import { PizzaSize, PizzaType } from "../constants/pizza";
import { useSet } from "react-use";
import { getAvailableSizes } from "../lib/get-available-sizes";
import { ProductItem } from "@prisma/client";

interface ReturnProps {
    size: PizzaSize;
    type: PizzaType;
    selectedIngredients: Set<number>;
    availableSizes: Variant[];
    setSize: (size: PizzaSize) => void;
    setType: (type: PizzaType) => void;
    addIngredient: (id: number) => void;
}

export const useProductOption = (items: ProductItem[]): ReturnProps => {
    const [size, setSize] = React.useState<PizzaSize>(20);
    const [type, setType] = React.useState<PizzaType>(1);
    const [selectedIngredients, {toggle: addIngredient}] = useSet(new Set<number>([]));

    const availableSizes = getAvailableSizes(type, items);

    React.useEffect(() => {
        const isDisabledSize = availableSizes?.find((item) => Number(item.value) === size && !item.disabled);
        const availableSize = availableSizes?.find((item) => !item.disabled);
    
        if (!isDisabledSize && availableSize) {
            setSize(Number(availableSize.value) as PizzaSize);
        }
    }, [type, size, availableSizes]);

    return { size, type, selectedIngredients, availableSizes, setSize, setType, addIngredient  }
}